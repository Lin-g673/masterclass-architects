import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      service,
      fullName,
      email,
      phone,
      location,
      notes,
// Architecture
projectType,
siteSize,
landStatus,
budget,
projectStage,
architectureSupport,
      // Interior
      preferredStyle,

      // House Plans
      plotSize,
      bedrooms,
      floors,

      // 3D Visualization
      companyName,
      renderingService,
      numberOfRenders,
      animationDuration,
      modelAvailable,
      documentation,
      visualizationProjectType,
      deadline,

      // Student Services
      university,
      course,
      studentRequestType,
      studentServices,
      softwareTraining,
      trainingPackage,
      trainingFormat,
      skillLevel,
      trainingGoals,
    } = data;

    /* =================================================
       VALIDATION
    ================================================= */

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    /* =================================================
       HELPERS
    ================================================= */

    const escapeHtml = (value: unknown) => {
      return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    const formatValue = (value: unknown) => {
      if (Array.isArray(value)) {
        return value
          .filter(Boolean)
          .map((item) => escapeHtml(item))
          .join("<br>");
      }

      return escapeHtml(value);
    };

    const hasValue = (value: unknown) => {
      if (Array.isArray(value)) {
        return value.length > 0;
      }

      return (
        value !== undefined &&
        value !== null &&
        value !== ""
      );
    };

    const createRows = (
      details: [string, unknown][]
    ) => {
      return details
        .filter(([, value]) => hasValue(value))
        .map(
          ([label, value]) => `
            <tr>
              <td
                style="
                  padding: 12px 16px;
                  border-bottom: 1px solid #e5e7eb;
                  font-weight: 600;
                  width: 35%;
                  vertical-align: top;
                  color: #071321;
                "
              >
                ${escapeHtml(label)}
              </td>

              <td
                style="
                  padding: 12px 16px;
                  border-bottom: 1px solid #e5e7eb;
                  vertical-align: top;
                  color: #374151;
                  line-height: 1.6;
                "
              >
                ${formatValue(value)}
              </td>
            </tr>
          `
        )
        .join("");
    };

    const createSection = (
      title: string,
      details: [string, unknown][]
    ) => {
      const validDetails = details.filter(
        ([, value]) => hasValue(value)
      );

      if (validDetails.length === 0) {
        return "";
      }

      return `
        <div style="margin-top: 30px;">

          <h2
            style="
              margin: 0 0 12px;
              font-size: 16px;
              color: #D4A85A;
              text-transform: uppercase;
              letter-spacing: 1px;
            "
          >
            ${escapeHtml(title)}
          </h2>

          <table
            style="
              width: 100%;
              border-collapse: collapse;
              color: #1f2937;
            "
          >
            ${createRows(validDetails)}
          </table>

        </div>
      `;
    };

    /* =================================================
       CLIENT DETAILS
    ================================================= */

    const clientSection = createSection(
      "Client Details",
      [
        ["Service Requested", service],
        ["Full Name", fullName],
        ["Email", email],
        ["Phone / WhatsApp", phone],
        ["Location", location],
      ]
    );

    /* =================================================
   ARCHITECTURE / INTERIOR / HOUSE PLANS
================================================= */

const projectSection = createSection(
  "Project Details",
  [
    ["Project Type", projectType],
    ["Approximate Site Size", siteSize],
    ["Land Status", landStatus],
    ["Project Stage", projectStage],
    [
  "Architectural Support Required",
  Array.isArray(architectureSupport)
    ? architectureSupport.join(", ")
    : architectureSupport,
],
    ["Estimated Construction Budget", budget],
    ["Preferred Style", preferredStyle],
    ["Plot Size", plotSize],
    ["Bedrooms", bedrooms],
    ["Floors", floors],
  ]
);

    /* =================================================
       3D VISUALIZATION
    ================================================= */

    const visualizationSection = createSection(
      "3D Visualization Request",
      [
        ["Company Name", companyName],
        ["Service Required", renderingService],
        ["Number of Still Renders", numberOfRenders],
        ["Animation Duration", animationDuration],
        ["3D Model Available", modelAvailable],
        ["Documentation Available", documentation],
        ["Project Type", visualizationProjectType],
        ["Required Delivery Date", deadline],
      ]
    );

    /* =================================================
       STUDENT SERVICES
    ================================================= */

    const studentSection = createSection(
      "Student Services",
      [
        ["University / Institution", university],
        ["Course / Programme", course],
        ["Support Required", studentRequestType],
        ["Project Assistance Required", studentServices],
      ]
    );

    /* =================================================
       SOFTWARE TRAINING
    ================================================= */

    const trainingSection = createSection(
      "Software Training & Mentorship",
      [
        ["Software Selected", softwareTraining],
        ["Training Package", trainingPackage],
        ["Preferred Training Format", trainingFormat],
        ["Current Skill Level", skillLevel],
        ["What They Would Like To Learn", trainingGoals],
      ]
    );

    /* =================================================
       ADDITIONAL NOTES
    ================================================= */

    const notesSection = createSection(
      "Additional Information",
      [
        ["Additional Notes", notes],
      ]
    );

    /* =================================================
       SEND EMAIL
    ================================================= */

    const response = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          from:
            "Apiyo Design Studio Website <website@apiyodesignstudio.co.ke>",

          to: [
            "info@apiyodesignstudio.co.ke",
          ],

          reply_to: email,

          subject:
            `New Consultation Request — ${
              service || "Website Inquiry"
            }`,

          html: `
            <div
              style="
                font-family: Arial, Helvetica, sans-serif;
                background: #f4f4f4;
                padding: 40px 20px;
              "
            >

              <div
                style="
                  max-width: 720px;
                  margin: 0 auto;
                  background: #ffffff;
                  border-radius: 16px;
                  overflow: hidden;
                  box-shadow:
                    0 8px 30px rgba(0,0,0,0.06);
                "
              >

                <!-- HEADER -->

                <div
                  style="
                    background: #071321;
                    padding: 36px 30px;
                    text-align: center;
                  "
                >

                  <h1
                    style="
                      color: #D4A85A;
                      margin: 0;
                      font-size: 28px;
                      font-weight: 500;
                    "
                  >
                    Apiyo Design Studio
                  </h1>

                  <p
                    style="
                      color: #ffffff;
                      margin: 10px 0 0;
                      font-size: 14px;
                      letter-spacing: 0.5px;
                    "
                  >
                    New Consultation Request
                  </p>

                </div>


                <!-- CONTENT -->

                <div style="padding: 32px;">

                  <p
                    style="
                      font-size: 15px;
                      color: #4b5563;
                      line-height: 1.7;
                      margin-top: 0;
                    "
                  >
                    A new consultation request has been
                    submitted through the Apiyo Design
                    Studio website.
                  </p>


                  ${clientSection}

                  ${projectSection}

                  ${visualizationSection}

                  ${studentSection}

                  ${trainingSection}

                  ${notesSection}


                  <!-- CLIENT CONTACT -->

                  <div
                    style="
                      margin-top: 34px;
                      padding: 20px;
                      background: #f8f8f8;
                      border-left: 3px solid #D4A85A;
                      border-radius: 8px;
                    "
                  >

                    <strong
                      style="
                        color: #071321;
                      "
                    >
                      Client Contact
                    </strong>

                    <div
                      style="
                        margin-top: 10px;
                        color: #4b5563;
                        line-height: 1.8;
                      "
                    >
                      ${escapeHtml(email)}
                      <br />
                      ${escapeHtml(phone)}
                    </div>

                  </div>


                  <!-- FOOTER -->

                  <div
                    style="
                      margin-top: 35px;
                      padding-top: 20px;
                      border-top: 1px solid #e5e7eb;
                      text-align: center;
                      font-size: 11px;
                      color: #9ca3af;
                      line-height: 1.6;
                    "
                  >
                    Apiyo Design Studio
                    <br />
                    Architecture • Interior Design • Visualization
                  </div>

                </div>

              </div>

            </div>
          `,
        }),
      }
    );

    /* =================================================
       RESEND RESPONSE
    ================================================= */

    if (!response.ok) {
      const error = await response.text();

      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Email could not be sent." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Consultation request received.",
      },
      { status: 200 }
    );

  } catch (error) {

    console.error(
      "Consultation submission error:",
      error
    );

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
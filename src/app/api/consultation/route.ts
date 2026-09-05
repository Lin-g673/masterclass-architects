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
      projectType,
      siteSize,
      landStatus,
      budget,
      preferredStyle,
      plotSize,
      bedrooms,
      floors,
      companyName,
      renderingService,
      documentation,
      university,
      course,
      studentService,
      notes,
    } = data;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const projectDetails = [
      ["Service", service],
      ["Full Name", fullName],
      ["Email", email],
      ["Phone / WhatsApp", phone],
      ["Project Location", location],
      ["Project Type", projectType],
      ["Approximate Site Size", siteSize],
      ["Land Status", landStatus],
      ["Budget", budget],
      ["Preferred Style", preferredStyle],
      ["Plot Size", plotSize],
      ["Bedrooms", bedrooms],
      ["Floors", floors],
      ["Company Name", companyName],
      ["Rendering Service", renderingService],
      ["Documentation Available", documentation],
      ["University", university],
      ["Course", course],
      ["Student Service", studentService],
      ["Additional Notes", notes],
    ].filter(([, value]) => value);

    const rows = projectDetails
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
              "
            >
              ${label}
            </td>

            <td
              style="
                padding: 12px 16px;
                border-bottom: 1px solid #e5e7eb;
                vertical-align: top;
              "
            >
              ${value}
            </td>
          </tr>
        `
      )
      .join("");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",

      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        from: "Apiyo Design Studio Website <website@apiyodesignstudio.co.ke>",

        to: ["info@apiyodesignstudio.co.ke"],

        reply_to: email,

        subject: `New Consultation Request — ${service || "Website Inquiry"}`,

        html: `
          <div
            style="
              font-family: Arial, sans-serif;
              background: #f4f4f4;
              padding: 40px 20px;
            "
          >
            <div
              style="
                max-width: 700px;
                margin: 0 auto;
                background: #ffffff;
                border-radius: 16px;
                overflow: hidden;
              "
            >

              <div
                style="
                  background: #071321;
                  padding: 32px;
                  text-align: center;
                "
              >
                <h1
                  style="
                    color: #D4A85A;
                    margin: 0;
                    font-size: 28px;
                  "
                >
                  Apiyo Design Studio
                </h1>

                <p
                  style="
                    color: #ffffff;
                    margin: 10px 0 0;
                  "
                >
                  New Consultation Request
                </p>
              </div>

              <div style="padding: 32px;">

                <p
                  style="
                    font-size: 16px;
                    color: #374151;
                    margin-top: 0;
                  "
                >
                  A new consultation request has been submitted through
                  the Apiyo Design Studio website.
                </p>

                <table
                  style="
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 24px;
                    color: #1f2937;
                  "
                >
                  ${rows}
                </table>

                <div
                  style="
                    margin-top: 30px;
                    padding: 18px;
                    background: #f8f8f8;
                    border-radius: 10px;
                  "
                >
                  <strong>Reply directly to the client:</strong>
                  <br />
                  ${email}
                  <br />
                  ${phone}
                </div>

              </div>

            </div>
          </div>
        `,
      }),
    });

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
    console.error("Consultation submission error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
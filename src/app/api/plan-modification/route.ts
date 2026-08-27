import { NextResponse } from "next/server";
import { Resend } from "resend";


export async function POST(request: Request) {

  try {

    /* =====================================================
       CHECK RESEND API KEY
    ===================================================== */

    const apiKey =
      process.env.RESEND_API_KEY;

    if (!apiKey) {

      console.error(
        "RESEND_API_KEY is missing from .env.local"
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Email service is not configured.",
        },
        {
          status: 500,
        }
      );

    }


    /* =====================================================
       START RESEND
    ===================================================== */

    const resend =
      new Resend(apiKey);


    /* =====================================================
       READ FORM DATA
    ===================================================== */

    const body =
      await request.json();


    const {
      planCode,
      planTitle,
      name,
      email,
      phone,
      plotSize,
      location,
      plotOwnership,
      constructionStart,
      budget,
      changes,
    } = body;


    /* =====================================================
       REQUIRED FIELDS
    ===================================================== */

    if (
      !name ||
      !email ||
      !phone ||
      !changes
    ) {

      return NextResponse.json(
        {
          success: false,
          message:
            "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );

    }


    /* =====================================================
       SEND EMAIL
    ===================================================== */

    const {
      data,
      error,
    } = await resend.emails.send({

      from:
        "Apiyo Design Studio <website@apiyodesignstudio.co.ke>",

      to: [
        "info@apiyodesignstudio.co.ke",
      ],

      replyTo: email,

      subject:
        `Plan Modification Request — ${planCode} — ${name}`,

      html: `
        <div
          style="
            max-width:700px;
            margin:0 auto;
            padding:32px;
            font-family:Arial,sans-serif;
            color:#1c2530;
            background:#ffffff;
          "
        >

          <div
            style="
              border-bottom:2px solid #D4A85A;
              padding-bottom:20px;
              margin-bottom:28px;
            "
          >

            <p
              style="
                margin:0 0 8px;
                color:#D4A85A;
                font-size:11px;
                letter-spacing:3px;
                text-transform:uppercase;
              "
            >
              Apiyo Design Studio
            </p>

            <h1
              style="
                margin:0;
                font-size:28px;
                font-weight:400;
                color:#071321;
              "
            >
              Plan Modification Request
            </h1>

          </div>


          <h2
            style="
              font-size:20px;
              color:#071321;
              margin-bottom:8px;
            "
          >
            ${planTitle || "House Plan"}
          </h2>


          <p
            style="
              margin-top:0;
              color:#777;
              font-size:13px;
            "
          >
            Plan Code:
            ${planCode || "Not provided"}
          </p>


          <table
            style="
              width:100%;
              border-collapse:collapse;
              margin-top:28px;
            "
          >

            <tr>
              <td
                style="
                  padding:10px 0;
                  color:#777;
                "
              >
                Client
              </td>

              <td
                style="
                  padding:10px 0;
                  text-align:right;
                  font-weight:600;
                "
              >
                ${name}
              </td>
            </tr>


            <tr>
              <td
                style="
                  padding:10px 0;
                  color:#777;
                "
              >
                Email
              </td>

              <td
                style="
                  padding:10px 0;
                  text-align:right;
                "
              >
                ${email}
              </td>
            </tr>


            <tr>
              <td
                style="
                  padding:10px 0;
                  color:#777;
                "
              >
                Phone / WhatsApp
              </td>

              <td
                style="
                  padding:10px 0;
                  text-align:right;
                "
              >
                ${phone}
              </td>
            </tr>


            <tr>
              <td
                style="
                  padding:10px 0;
                  color:#777;
                "
              >
                Plot Size
              </td>

              <td
                style="
                  padding:10px 0;
                  text-align:right;
                "
              >
                ${plotSize || "Not provided"}
              </td>
            </tr>


            <tr>
              <td
                style="
                  padding:10px 0;
                  color:#777;
                "
              >
                Location
              </td>

              <td
                style="
                  padding:10px 0;
                  text-align:right;
                "
              >
                ${location || "Not provided"}
              </td>
            </tr>


            <tr>
              <td
                style="
                  padding:10px 0;
                  color:#777;
                "
              >
                Plot Ownership
              </td>

              <td
                style="
                  padding:10px 0;
                  text-align:right;
                "
              >
                ${plotOwnership || "Not provided"}
              </td>
            </tr>


            <tr>
              <td
                style="
                  padding:10px 0;
                  color:#777;
                "
              >
                Construction Start
              </td>

              <td
                style="
                  padding:10px 0;
                  text-align:right;
                "
              >
                ${constructionStart || "Not provided"}
              </td>
            </tr>


            <tr>
              <td
                style="
                  padding:10px 0;
                  color:#777;
                "
              >
                Approx. Budget
              </td>

              <td
                style="
                  padding:10px 0;
                  text-align:right;
                "
              >
                ${budget || "Not provided"}
              </td>
            </tr>

          </table>


          <div
            style="
              margin-top:30px;
              padding:22px;
              background:#f4f6f8;
              border-left:3px solid #D4A85A;
            "
          >

            <p
              style="
                margin:0 0 10px;
                color:#D4A85A;
                font-size:11px;
                letter-spacing:2px;
                text-transform:uppercase;
              "
            >
              Requested Changes
            </p>


            <p
              style="
                margin:0;
                line-height:1.7;
                white-space:pre-wrap;
              "
            >
              ${changes}
            </p>

          </div>


          <p
            style="
              margin-top:32px;
              font-size:12px;
              color:#999;
            "
          >
            Submitted through the
            Apiyo Design Studio House Plans website.
          </p>

        </div>
      `,
    });


    /* =====================================================
       RESEND ERROR
    ===================================================== */

    if (error) {

      console.error(
        "RESEND ERROR:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          message:
            error.message ||
            "Unable to send modification request.",
        },
        {
          status: 500,
        }
      );

    }


    /* =====================================================
       SUCCESS
    ===================================================== */

    console.log(
      "Modification request sent:",
      data
    );

    return NextResponse.json(
      {
        success: true,
        id: data?.id,
      },
      {
        status: 200,
      }
    );

  } catch (error) {

    console.error(
      "PLAN MODIFICATION API ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong.",
      },
      {
        status: 500,
      }
    );

  }

}
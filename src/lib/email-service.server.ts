import nodemailer from "nodemailer";

export interface SubmissionEmailPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
  source?: string;
  attachmentUrl?: string;
  attachmentName?: string;
  attachmentSize?: number;
  attachmentBase64?: string;
  details?: Record<string, string | number | undefined>;
}

export interface ChatEmailPayload {
  clientName: string;
  clientCity?: string;
  clientPhone?: string;
  clientEmail?: string;
  message: string;
  timestamp: string;
}

let cachedTransporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter {
  if (cachedTransporter) return cachedTransporter;

  const host = process.env.SMTP_HOST || "smtppro.zoho.com";
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const user = process.env.SMTP_USER || "";
  const pass = process.env.SMTP_PASS || "";

  if (!user || !pass) {
    console.warn("⚠️ [Zoho SMTP] Missing SMTP_USER or SMTP_PASS environment variables.");
  }

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  return cachedTransporter;
}

const DEFAULT_RECIPIENT = process.env.NOTIFICATION_EMAIL || "eva@stellrit.com";
const SENDER_EMAIL = process.env.SMTP_USER || "eva@stellrit.com";

/**
 * Format submission type for subject header
 */
function getSubjectHeader(source?: string, service?: string): string {
  const src = (source || "").toLowerCase();
  const srv = (service || "").toLowerCase();

  if (src.includes("gc") || src.includes("bid") || src.includes("plan") || srv.includes("bid") || srv.includes("plan")) {
    return "⚡ [R&E Electrical] New GC Bid / Plan Submission";
  }
  if (src.includes("career") || srv.includes("job") || srv.includes("career") || srv.includes("application")) {
    return "💼 [R&E Electrical] New Job / Career Application";
  }
  if (src.includes("estimate") || srv.includes("estimate") || srv.includes("quote")) {
    return "📋 [R&E Electrical] New Free Estimate Request";
  }
  return "📩 [R&E Electrical] New Website Form Submission";
}

/**
 * Sends a rich, branded email alert whenever a visitor submits any form on the site.
 */
export async function sendSubmissionEmail(payload: SubmissionEmailPayload): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const transporter = getTransporter();
    const recipient = process.env.NOTIFICATION_EMAIL || DEFAULT_RECIPIENT;
    const subjectPrefix = getSubjectHeader(payload.source, payload.service);
    const subject = `${subjectPrefix} from ${payload.name || "Website Visitor"}`;

    const formattedDate = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "full",
      timeStyle: "short"
    });

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="max-width: 650px; margin: 30px auto; background-color: #ffffff; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
    
    <!-- Top Header Banner -->
    <div style="background-color: #0f172a; padding: 28px 32px; border-bottom: 4px solid #ff6b00;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td>
            <div style="color: #ff6b00; font-weight: 800; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;">R&E ELECTRICAL CONTRACTOR CORP</div>
            <h1 style="color: #ffffff; font-size: 22px; font-weight: 800; margin: 0; line-height: 1.3;">
              New Website Submission
            </h1>
            <p style="color: #94a3b8; font-size: 13px; margin: 6px 0 0 0;">Received on ${formattedDate} (EST)</p>
          </td>
          <td align="right" valign="middle" style="width: 70px;">
            <div style="background: rgba(255, 107, 0, 0.15); border: 1px solid rgba(255, 107, 0, 0.3); border-radius: 10px; width: 50px; height: 50px; text-align: center; line-height: 50px; font-size: 24px;">
              ⚡
            </div>
          </td>
        </tr>
      </table>
    </div>

    <!-- Main Content Area -->
    <div style="padding: 32px;">
      
      <!-- Quick Actions -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
        <tr>
          ${payload.phone ? `
          <td style="padding-right: 10px;">
            <a href="tel:${payload.phone.replace(/[^0-9+]/g, '')}" style="display: block; text-align: center; background-color: #ff6b00; color: #ffffff; text-decoration: none; padding: 12px 18px; border-radius: 8px; font-weight: 700; font-size: 14px;">
              📞 Call ${payload.phone}
            </a>
          </td>` : ''}
          ${payload.email ? `
          <td>
            <a href="mailto:${payload.email}?subject=Regarding your inquiry at R%26E Electrical" style="display: block; text-align: center; background-color: #0f172a; color: #ffffff; text-decoration: none; padding: 12px 18px; border-radius: 8px; font-weight: 700; font-size: 14px;">
              ✉️ Reply to ${payload.email}
            </a>
          </td>` : ''}
        </tr>
      </table>

      <!-- Submission Details Table -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; margin-bottom: 28px; background-color: #f8fafc; border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0;">
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 14px 18px; font-weight: 700; color: #64748b; font-size: 13px; width: 140px; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</td>
          <td style="padding: 14px 18px; font-weight: 700; color: #0f172a; font-size: 15px;">${payload.name || "N/A"}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 14px 18px; font-weight: 700; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
          <td style="padding: 14px 18px; color: #0f172a; font-size: 15px;">
            <a href="mailto:${payload.email}" style="color: #ff6b00; text-decoration: none; font-weight: 600;">${payload.email || "N/A"}</a>
          </td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 14px 18px; font-weight: 700; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
          <td style="padding: 14px 18px; color: #0f172a; font-size: 15px; font-weight: 600;">
            ${payload.phone ? `<a href="tel:${payload.phone.replace(/[^0-9+]/g, '')}" style="color: #0f172a; text-decoration: none;">${payload.phone}</a>` : "Not provided"}
          </td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 14px 18px; font-weight: 700; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Service / Type</td>
          <td style="padding: 14px 18px; color: #0f172a; font-size: 15px; font-weight: 600;">
            <span style="display: inline-block; background-color: #ffedd5; color: #c2410c; padding: 3px 10px; border-radius: 6px; font-size: 13px; font-weight: 700;">
              ${payload.service || "General Inquiry"}
            </span>
          </td>
        </tr>
        <tr>
          <td style="padding: 14px 18px; font-weight: 700; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Source / Page</td>
          <td style="padding: 14px 18px; color: #475569; font-size: 14px;">${payload.source || "Website"}</td>
        </tr>
      </table>

      <!-- Message / Details Block -->
      <div style="margin-bottom: 28px;">
        <h3 style="font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #475569; margin: 0 0 10px 0;">Message / Project Scope</h3>
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #ff6b00; border-radius: 8px; padding: 18px; color: #1e293b; font-size: 14px; white-space: pre-wrap; word-break: break-word;">${payload.message || "No additional message provided."}</div>
      </div>

      <!-- Attached Blueprint / Plan Set -->
      ${payload.attachmentName ? `
      <div style="margin-bottom: 28px; background-color: #fff7ed; border: 1.5px solid #fed7aa; border-radius: 10px; padding: 18px 20px;">
        <div style="margin-bottom: 8px;">
          <span style="display: inline-block; background-color: #ff6b00; color: #ffffff; padding: 3px 10px; border-radius: 6px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;">Attached Plan Set / PDF Blueprint</span>
        </div>
        <h4 style="margin: 4px 0 6px 0; color: #0f172a; font-size: 16px; font-weight: 800;">📄 ${payload.attachmentName}</h4>
        <p style="margin: 0 0 14px 0; color: #7c2d12; font-size: 13px; font-weight: 500;">
          ${payload.attachmentSize ? (payload.attachmentSize / (1024 * 1024)).toFixed(2) + " MB • " : ""}Attached to this email and accessible in your admin dashboard.
        </p>
        ${payload.attachmentUrl ? `
        <a href="${payload.attachmentUrl}" target="_blank" style="display: inline-block; background-color: #ff6b00; color: #ffffff; text-decoration: none; padding: 10px 22px; border-radius: 8px; font-size: 13px; font-weight: 700;">
          Download / View Attached PDF Plans →
        </a>
        ` : ""}
      </div>
      ` : ""}

      <!-- Dashboard Link -->
      <div style="text-align: center; padding-top: 10px; border-top: 1px solid #e2e8f0;">
        <p style="color: #64748b; font-size: 13px; margin-bottom: 14px;">This submission has also been logged in your live admin dashboard.</p>
        <a href="https://electricalcontractorcorp.com/dashboard?tab=emails" style="display: inline-block; background-color: #f1f5f9; color: #0f172a; border: 1px solid #cbd5e1; text-decoration: none; padding: 10px 22px; border-radius: 8px; font-size: 13px; font-weight: 700;">
          Open Admin Dashboard →
        </a>
      </div>

    </div>

    <!-- Footer -->
    <div style="background-color: #f8fafc; padding: 20px 32px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
      <p style="margin: 0 0 4px 0;">R&E Electrical Contractor Corp • 18730 NW 77 TH CT, Hialeah, FL 33015 • Florida EC #13008942</p>
      <p style="margin: 0;">Automated notification sent via Zoho Mail server to <strong>${recipient}</strong></p>
    </div>

  </div>
</body>
</html>
    `.trim();

    const textContent = `
NEW WEBSITE SUBMISSION - R&E ELECTRICAL CONTRACTOR CORP
--------------------------------------------------------
Date: ${formattedDate}
From: ${payload.name}
Email: ${payload.email}
Phone: ${payload.phone || "Not provided"}
Service: ${payload.service || "General Inquiry"}
Source: ${payload.source || "Website"}

Message / Details:
${payload.message || "None"}
${payload.attachmentName ? `\nAttached Plan: ${payload.attachmentName} (${payload.attachmentUrl || "Attached to email"})\n` : ""}
--------------------------------------------------------
Delivered to: ${recipient}
View in Dashboard: https://electricalcontractorcorp.com/dashboard?tab=emails
    `.trim();

    // Prepare attachments for nodemailer
    const attachments: Array<{ filename: string; content?: Buffer; path?: string; contentType?: string }> = [];

    if (payload.attachmentName) {
      if (payload.attachmentBase64) {
        const base64Data = payload.attachmentBase64.includes(",")
          ? payload.attachmentBase64.split(",")[1]
          : payload.attachmentBase64;
        attachments.push({
          filename: payload.attachmentName,
          content: Buffer.from(base64Data, "base64"),
          contentType: payload.attachmentName.toLowerCase().endsWith(".pdf") ? "application/pdf" : undefined
        });
      } else if (payload.attachmentUrl && payload.attachmentUrl.startsWith("http")) {
        attachments.push({
          filename: payload.attachmentName,
          path: payload.attachmentUrl
        });
      }
    }

    const info = await transporter.sendMail({
      from: `"R&E Electrical Leads" <${SENDER_EMAIL}>`,
      to: recipient,
      replyTo: payload.email || undefined,
      subject,
      text: textContent,
      html: htmlContent,
      attachments: attachments.length > 0 ? attachments : undefined
    });

    console.log(`✅ [Zoho SMTP] Submission email delivered successfully to ${recipient}. MessageId: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (err: any) {
    console.error("❌ [Zoho SMTP] Failed to send submission email notification:", err);
    return { success: false, error: err.message || "Failed to send email" };
  }
}

/**
 * Sends an email notification when a live chat conversation is started.
 */
export async function sendChatNotificationEmail(payload: ChatEmailPayload): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const transporter = getTransporter();
    const recipient = process.env.NOTIFICATION_EMAIL || DEFAULT_RECIPIENT;
    const subject = `⚡ [R&E Electrical] Live Chat Started by ${payload.clientName || "Website Visitor"}`;

    const formattedDate = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "full",
      timeStyle: "short"
    });

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1e293b;">
  <div style="max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 14px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
    <div style="background-color: #0f172a; padding: 24px; border-bottom: 4px solid #ff6b00;">
      <div style="color: #ff6b00; font-weight: 800; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">LIVE CHAT ALERT</div>
      <h1 style="color: #ffffff; font-size: 20px; font-weight: 800; margin: 6px 0 0 0;">New Chat Initiated</h1>
      <p style="color: #94a3b8; font-size: 12px; margin: 4px 0 0 0;">${formattedDate} (EST)</p>
    </div>
    <div style="padding: 24px;">
      <p style="font-size: 15px; margin-top: 0;"><strong>${payload.clientName}</strong> has just started a live chat session on the website.</p>
      
      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #ff6b00; border-radius: 6px; padding: 16px; margin: 18px 0; font-size: 14px;">
        <strong>First Message:</strong><br>
        <p style="margin: 8px 0 0 0; color: #334155; white-space: pre-wrap;">${payload.message}</p>
      </div>

      <div style="text-align: center; margin-top: 24px;">
        <a href="https://electricalcontractorcorp.com/dashboard?tab=chat" style="display: inline-block; background-color: #ff6b00; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 14px;">
          Open Live Chat Dashboard →
        </a>
      </div>
    </div>
    <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
      R&E Electrical Contractor Corp • Notification delivered to ${recipient}
    </div>
  </div>
</body>
</html>
    `.trim();

    const info = await transporter.sendMail({
      from: `"R&E Electrical Chat" <${SENDER_EMAIL}>`,
      to: recipient,
      subject,
      text: `Live Chat Started by ${payload.clientName}\nMessage: ${payload.message}\nTime: ${formattedDate}\nOpen Dashboard: https://electricalcontractorcorp.com/dashboard?tab=chat`,
      html: htmlContent
    });

    console.log(`✅ [Zoho SMTP] Chat notification delivered to ${recipient}. MessageId: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (err: any) {
    console.error("❌ [Zoho SMTP] Failed to send chat email notification:", err);
    return { success: false, error: err.message || "Failed to send chat notification" };
  }
}

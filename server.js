const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const nodemailer = require('nodemailer');

// ----------------------------------------------------
// 1. Load Environment Variables from .env file
// ----------------------------------------------------
function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    content.split(/\r?\n/).forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx > 0) {
        const key = trimmed.slice(0, eqIdx).trim();
        let val = trimmed.slice(eqIdx + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    });
  }
}
loadEnv();

const PORT = Number(process.env.PORT) || 5000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

// ----------------------------------------------------
// 2. Handle Quote Request API (/api/send-quote)
// ----------------------------------------------------
async function handleSendQuote(req, res) {
  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Method not allowed.' }));
  }

  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
    if (body.length > 1e6) {
      req.destroy();
    }
  });

  req.on('end', async () => {
    let payload = {};
    try {
      if (req.headers['content-type']?.includes('application/json')) {
        payload = JSON.parse(body || '{}');
      } else {
        const params = new URLSearchParams(body);
        for (const [k, v] of params.entries()) {
          payload[k] = v;
        }
      }
    } catch {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Invalid request data.' }));
    }

    const clean = (val, max) => String(val ?? '').trim().slice(0, max);
    
    // Honeypot check for bots
    if (clean(payload.website, 200)) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ ok: true }));
    }

    const fullName = clean(payload.fullName, 100);
    const company = clean(payload.company, 120);
    const email = clean(payload.email, 254);
    const phone = clean(payload.phone, 50);
    const service = clean(payload.service, 120);
    const message = clean(payload.message, 4000);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fullName || !company || !emailPattern.test(email) || !phone || !service || !message) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Please fill in all required fields with valid details.' }));
    }

    const smtpHost = process.env.SMTP_HOST || 'mail.skylinkcorridors.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER || 'Info@skylinkcorridors.com';
    const smtpPassword = process.env.SMTP_PASSWORD;
    const recipient = process.env.QUOTE_RECIPIENT || 'Info@skylinkcorridors.com';

    if (!smtpPassword || smtpPassword === 'YOUR_PASSWORD_HERE') {
      console.warn('[SMTP WARNING] SMTP_PASSWORD is not set in .env file.');
      res.writeHead(500, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ 
        error: 'Email service is not configured yet. Please enter your email password in the .env file.' 
      }));
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const plainText = [
      'New Quote Request Received - Skylink Corridors Website',
      '====================================================',
      '',
      `Full Name:        ${fullName}`,
      `Company:          ${company}`,
      `Email:            ${email}`,
      `Phone Number:     ${phone}`,
      `Service Required: ${service}`,
      '',
      'Message / Requirements:',
      message,
      '',
      '====================================================',
      `Sent from: Skylink Corridors Website (${new Date().toLocaleString()})`
    ].join('\n');

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background: #111111; color: #ffffff; padding: 20px 24px; border-bottom: 3px solid #F15922;">
          <h2 style="margin: 0; font-size: 20px; color: #ffffff;">New Quote Request</h2>
          <p style="margin: 4px 0 0 0; font-size: 13px; color: #aaaaaa;">Skylink Corridors Website</p>
        </div>
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; color: #777777; width: 140px; font-weight: bold;">Full Name:</td>
              <td style="padding: 10px 0; color: #222222; font-weight: 600;">${escapeHtml(fullName)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #777777; font-weight: bold;">Company:</td>
              <td style="padding: 10px 0; color: #222222; font-weight: 600;">${escapeHtml(company)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #777777; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0; color: #222222;"><a href="mailto:${escapeHtml(email)}" style="color: #F15922; text-decoration: none;">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #777777; font-weight: bold;">Phone:</td>
              <td style="padding: 10px 0; color: #222222;"><a href="tel:${escapeHtml(phone)}" style="color: #222222; text-decoration: none;">${escapeHtml(phone)}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #777777; font-weight: bold;">Service Required:</td>
              <td style="padding: 10px 0; color: #222222; font-weight: 600; color: #F15922;">${escapeHtml(service)}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #eeeeee;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #555555; font-size: 14px;">Message / Requirements:</p>
            <div style="background: #f8f9fa; padding: 14px; border-radius: 6px; color: #333333; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">${escapeHtml(message)}</div>
          </div>
        </div>
        <div style="background: #fafafa; padding: 12px 24px; font-size: 12px; color: #999999; border-top: 1px solid #eeeeee; text-align: center;">
          This inquiry was submitted from the official Skylink Corridors website form.
        </div>
      </div>
    `;

    try {
      await transporter.sendMail({
        from: `"Skylink Corridors Website" <${smtpUser}>`,
        to: recipient,
        replyTo: email,
        subject: `New Quote Request: ${company} - ${service}`,
        text: plainText,
        html: htmlContent
      });

      console.log(`[QUOTE RECEIVED] Successfully sent quote email for ${company} (${email})`);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ ok: true, message: 'Your quote request has been sent successfully.' }));
    } catch (error) {
      console.error('[SMTP ERROR] Failed to send quote email:', error?.message || error);
      res.writeHead(502, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ 
        error: error?.message || 'Could not send email. Please check your SMTP password and server settings.' 
      }));
    }
  });
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ----------------------------------------------------
// 3. Static File Server for Website Pages
// ----------------------------------------------------
function handleStaticFiles(req, res) {
  const reqUrl = new URL(req.url, 'http://localhost');
  let pathname = decodeURIComponent(reqUrl.pathname);

  // Default route
  if (pathname === '/') {
    pathname = '/index.html';
  }

  let filePath = path.join(ROOT_DIR, pathname);

  // If path is a directory, look for index.html inside
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  // Prevent path traversal
  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    return res.end('403 Forbidden');
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      // 404 handler
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(`<!DOCTYPE html><html><head><title>404 Not Found</title></head><body style="font-family:sans-serif;text-align:center;padding:50px;"><h1>404 Not Found</h1><p><a href="/">Return to Skylink Corridors</a></p></body></html>`);
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=86400'
    });
    res.end(content);
  });
}

// ----------------------------------------------------
// 4. Create and Start Server
// ----------------------------------------------------
const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  const reqPath = new URL(req.url, 'http://localhost').pathname;

  // Route API requests
  if (reqPath === '/api/send-quote' || reqPath === '/api/send-quote/') {
    return handleSendQuote(req, res);
  }

  // Route Static website files
  return handleStaticFiles(req, res);
});

server.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`  Skylink Corridors Server is Running!`);
  console.log(`  URL: http://localhost:${PORT}`);
  console.log(`  Environment: ${process.env.NODE_ENV || 'production'}`);
  console.log(`  SMTP Host: ${process.env.SMTP_HOST || 'mail.skylinkcorridors.com'}`);
  console.log(`  SMTP User: ${process.env.SMTP_USER || 'Info@skylinkcorridors.com'}`);
  console.log(`====================================================`);
});

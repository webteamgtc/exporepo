import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import otpGenerator from 'otp-generator';
import { transporter } from '../../config/nodemailer'

export async function POST(req) {
    const { email } = await req.json();
    const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, digits: true, lowerCaseAlphabets: false });
    const mailData = {
        from: '"Edu Trade" <portal@mx4.gtcmail.com>',
        to: email,
        subject: "Your Edu Trade OTP Code",
        text: `Your OTP is ${otp}`,
        html: `
         <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>You’ve Registered for the GTC Demo Competition</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Poppins', sans-serif; padding: 20px;">
      <tr>
        <td align="center">
       
          <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0; border-radius:8px;padding:30px; padding-top: 60px">
            <tr>
              <td align="center" style="padding-bottom: 40px;">
                <img src="https://edutrade-phi.vercel.app/logo.svg" alt="GTC Logo" style="width:180px;" />
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:25px;font-weight:600;color:#662D91;padding-bottom:10px; font-weight: 900">
                Turn Your IB Business into<br>
a Revenue Machine
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:18px;color:#000;padding-bottom:20px; font-weight: 600">
                Confirm your email by entering the OTP that’s in this email.
              </td>
            </tr>
            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Dear Client,
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">

Thanks again for your interest in Edu Trade.


              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Here’s the OTP that you’ll need to enter into the form.
              </td>
            </tr>
            <tr>
              <td style="font-size:24px;font-weight:600;color:#662D91;padding:20px 0px;">
                ${otp}
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
                If you need any help or assistance, simply reach out to our amazing Customer Care team via our Live Chat feature that’s on our website, 
                <a href="https://edu.trade">https://edu.trade</a>.
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                We hope you’re excited about the upcoming Edu Trade Event!
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:30px;">
                Have a great day,<br>Your Edu Trade Family
              </td>
            </tr>
            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>
            <tr>
              <td style="padding-top: 0px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left">
                      <img src="https://edutrade-phi.vercel.app/logo.svg" alt="GTC Logo" style="width: 180px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Phone: +971 800 667788<br/>
                      ✉️ Email: <a href="mailto:event@edu.trade" style="color: #192055; text-decoration: none;">event@edu.trade</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Add Legal + Social sections here if needed -->


<tr>
  <td align="center" style="font-size: 12px; color: #666666; padding-top: 45px; padding-bottom: 10px;">
    &copy; Copyright 2025 Edu.Trade – All Rights Reserved
  </td>
</tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
        `
    };
    try {
        await transporter.sendMail(mailData);
        return NextResponse.json({ message: `5649${otp}632` }, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Error Sending OTP' }, { status: 500 })
    }
}
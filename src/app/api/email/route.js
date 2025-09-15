import { NextResponse } from 'next/server';
import { transporter, mailOptions } from '../../config/nodemailer';

const generateEmailContent = (data) => {
    return {
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
       
          <table width="600" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0; border-radius:8px;padding:30px; padding-top: 40px">
            <tr>
              <td align="center" style="padding-bottom: 40px;">
                <img src="https://edutrade-phi.vercel.app/logo.svg" alt="ETU Logo" style="width:180px;" />
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:30px;font-weight:900;color:#662D91;padding-bottom:10px;">
                Attending the Museum of the Future IB Event
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:18px;color:#000;padding-bottom:20px; font-weight: 600">
             Thanks for showing an interest in attending the IB event at the 
Museum of the Future in Dubai. <br>Simply confirm your email.
              </td>
            </tr>
            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Dear ${data?.first_name || "Client"},
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">


Thanks for showing an interest in attending the greatest Introducing 
Broker event of the year at the Museum of the Future.



              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
               The event is taking place at 1pm on Saturday, 11th October 2025 
and we’d love to see you there!
              </td>
            </tr>

 <tr>
              <td style="font-size:22px;color:#662D91;padding:20px 0px; font-weight: 600">
          Important Info


              </td>
            </tr>

               <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
Once you’ve clicked on the email verification link, our Account Managers will be in touch with you via phone. We do this because we need to ensure that everyone attending this free event is indeed an IB </td>
            </tr>
            <tr>
 <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
              If we can’t get through to you via the phone, we’ll email you, and if there’s no response, your seat will go to someone else, unfortunately.
</td>
            </tr>
 <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
            This is a very specialised and sought after event, and seats are extremely limited, so we can only offer them to Introducing Brokers who really do want to be shown how they can expand their business.
            </td>
            </tr>


              <td style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
                If you need any help or assistance, simply reach out to our amazing Customer Care team via our Live Chat feature that’s on our website, 
                <a href="https://edu.trade">https://edu.trade</a>.
              </td>
            </tr>
      
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:30px;">
                Have a great day,<br>

Your Edu.trade Family
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
             <!-- Legal Footer -->



<tr>
  <td align="center" style="font-size: 12px; color: #666666; padding-top: 45px;">
    &copy; Copyright 2025 Edu.Trade – All Rights Reserved
  </td>
</tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
      
      `,
    };
};



export async function POST(req) {
    const reqBody = await req.json();
    const mailOption = {
        from: '"Edu Trade" <portal@mx4.gtcmail.com>',
        to: reqBody?.email,
    }
    try {
        await transporter.sendMail({
            ...mailOption,
            ...generateEmailContent(reqBody),
            subject: `Attending the Museum of the Future IB Event`
        });
        return NextResponse.json({ message: "Success", email: reqBody?.email }, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}
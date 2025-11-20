const generateEnglis = (data) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>You’ve Registered for the GTC Demo Competition
</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Poppins', sans-serif; padding: 20px;">
      <tr>
        <td align="center">

          <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0; border-radius:8px;padding:30px; padding-top: 30px">
           <!-- Logo -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#2a2f83;padding-bottom:10px;">
              Get 5,000 USC to Trade. <br>No Deposit Needed!





              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
                We’ve added all your credentials into this email so that you’re ready!
              </td>
            </tr>

            <tr>
  <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
</tr>

            <!-- Greeting & OTP -->
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Hi ${data?.name},
              </td>
            </tr>
             <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
             You’re now ready to take on the world and prove that you really are the best trader on earth!
              </td>
            </tr>
             <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
            Your GTC Trading Account has been created and here’s how you access it.

              </td>
            </tr>

        <!-- Account Info Box -->
<!-- Account Info Box -->
<tr>
  <td style="padding: 20px 0;">
    <h3 style="color: #b68756; font-size: 18px; margin: 0 0 16px 0;">Your GTC Trading Account Info</h3>
    <table width="100%" cellpadding="0" cellspacing="0" style="border-radius: 10px; background-color: #fdf6ee; font-size: 14px; color: #000;">
      <tr>
        <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Account Currency</td>
        <td style="padding: 5px;">
          <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">USD</div>
        </td>
      </tr>
      <tr>
        <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">GTC Trading Account Number</td>
        <td style="padding: 5px;">
          <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">${data?.user}</div>
        </td>
      </tr>
      <tr>
        <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Your Password</td>
        <td style="padding: 5px;">
          <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">${data?.password}</div>
        </td>
      </tr>
      <tr>
        <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Investor Password</td>
        <td style="padding: 5px;">
          <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px; border: 2px solid #a076f9;">${data?.invest_password}</div>
        </td>
      </tr>
        <tr>
        <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Client Portal Password</td>
        <td style="padding: 5px;">
          <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">${data?.cPassword}</div>
        </td>
      </tr>
      <tr>
        <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Trading Platform</td>
        <td style="padding: 5px;">
          <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">MT5</div>
        </td>
      </tr>
      <tr>
        <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Server Name</td>
        <td style="padding: 5px;">
          <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">GTCGlobalTrade-Server</div>
        </td>
      </tr>
    </table>
  </td>
</tr>


<!-- CTA Buttons -->
<tr>
  <td align="center" style="padding: 0px 0 20px 0;">
    <p style="font-size: 16px; color: #202a6b; font-weight: 600; margin-bottom: 20px;">Access Your GTC Client Zone</p>
    <table cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center" style="padding: 0 10px;">
          <a href="https://download.mql5.com/cdn/web/gtc.global.trade/mt5/gtcglobaltrade5setup.exe" style="background-color: #ffffff; border: 2px solid #b68756; border-radius: 8px; color: #b68756; font-weight: 600; padding: 12px 20px; text-decoration: none; display: inline-block;">
            Desktop GTC Client Zone
          </a>
        </td>
        <td align="center" style="padding: 0 10px;">
          <a href="https://download.mql5.com/cdn/mobile/mt5/android?server=GTCGlobalTrade-Server" style="background-color: #b68756; border-radius: 8px; color: #ffffff; font-weight: 600; padding: 12px 20px; text-decoration: none; display: inline-block;">
            Mobile GTC Client Zone
          </a>
        </td>
      </tr>
    </table>
  </td>
</tr>

          <tr>
              <td style="font-size:16px;color:#4D4D70;padding-bottom:10px; font-weight: 600">


Need Help?
              </td>
            </tr>
               <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
           If you’ve got any questions or need further assistance, please don’t hesitate to contact us at <a href="mailto:support@gtcfx.com">support@gtcfx.com</a> . We are here to support you and ensure your experience with us is the best you’ve ever experienced.

              </td>
            </tr>

            <!-- Signoff -->
            <tr>
              <td style="font-size:16px;color:#4D4D70;padding-bottom:10px; font-weight: 600;">
                <br>
             Best Regard,

              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:30px;">
                You’re the best, and soon, you’ll show the world you are!
<br>
                Your GTC Family

              </td>
            </tr>

             <tr>
  <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
</tr>

            <!-- Contact Info -->
            <tr>
              <td style="padding-top: 0px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left">
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Phone: +971 800 667788<br/>
                      ✉️ Email: <a href="mailto:support@gtcfx.com" style="color: #192055; text-decoration: none;">support@gtcfx.com</a>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>

            <!-- Legal Footer -->
<tr>
  <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5;">
  <strong>Your login account and password must be kept confidential at all times. Passwords should never be shared or exposed to others. You should never let anyone else access your GTC trading account, or do anything else that might jeopardize the security of your account.</strong><br/><br/>
    <strong>You’re responsible for the confidentiality and use of all IDs, passwords, and other security data, methods, and devices in connection with the GTC client zone and the GTC trading platform(s).</strong> 
    <br/><br/>
    This website is owned and operated by GTC Global Ltd, a limited company incorporated in Mauritius (company number: C188049) and licensed by the Financial Services Commission, Mauritius (No. GB22200292) to trade as an SEC-2.1B Investment Dealer. Registered Address: Cyberati Lounge, Ground Floor, The Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebene, Republic of Mauritius. The financial services and products promoted on this website are offered by GTC Global Ltd and GTC Global Trade Capital Co. Limited, a company authorised by the Vanuatu Financial Services Commission of the Republic of Vanuatu, Company License Number: 40354.
    <br/><br/>
    <stong style="font-weight: 600p; color: #000;">GTC Global Ltd and GTC Global Trade Capital Co. Limited</stong> belong to the GTC Financial Group, which consists of a group of entities across the globe.
    <br/><br/>
    Investing in derivative products carries significant risks and may not be suitable for all investors. Leveraging in these instruments can increase the level of risk and potential loss exposure. Before making any decision to engage in foreign exchange trading or CFDs, it is essential to carefully assess your investment objectives, level of experience, and risk tolerance. You should only invest funds that you can afford to lose. We strongly encourage you to educate yourself thoroughly about the associated risks and, if you have any questions, seek advice from an independent financial or tax advisor.
    <br/><br/>
    <stong style="font-weight: 600p; color: #000;">GTC Global Ltd and GTC Global Trade Capital Co. Limited</stong> do not provide services to individuals residing in specific jurisdictions and/or jurisdictions where distribution of such services would be contrary to local law or regulation.
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">Other Group Entities:</strong><br/>
    The financial products and services offered on this website are <u>NOT</u> provided by the following group entities, and no recourse against the following entities is available. If you are interested in the products and services offered by each of the following entities, please visit their respective websites.
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">GTC Group LLC-FZ</strong> is a holding company incorporated in Dubai, United Arab Emirates with Business License Number: 2311147.01. Its registered office is at Business Center 1, M Floor, Meydan Hotel, Nad Al Sheba, Dubai, United Arab Emirates.
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">GTC Multi Trading DMCC</strong> is a limited company licensed and incorporated under the laws of the Dubai Multi Commodities Centre (No. DMCC-312687) and licensed by the Securities and Commodities Authority, United Arab Emirates (No. 20224D4D7007) to practice the activity of Commodity Brokerage - Trading and Clearing. Registered Address: Unit No: 1501, 1 Lake Plaza, Plot No: JLT-PH2-T2A, Jumeirah Lakes Towers, Dubai, United Arab Emirates.
    <br/><br/>
    Each of the entities within the GTC Financial Group is managed separately. The financial products and services offered on this website are ONLY provided by GTC Global Ltd and GTC Global Trade Capital Co. Limited.
    <br/><br/>
    All trademarks are the property of their respective owners. All rights reserved. GTC Global Ltd is part of the GTC Financial Group, which consists of a group of entities across the globe.
    <br/><br/>
    <strong>Risk Warning:</strong> Trading leveraged products such as forex and derivatives may not be suitable for all investors as they carry a high degree of risk to your capital. Please ensure that you fully understand the risks involved and seek independent advice if necessary.
  </td>
</tr>

<!-- Social Media Footer -->
<tr>
  <td style="padding-top: 30px; text-align: center;">
    <table align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding: 0 5px;">
          <a href="https://www.facebook.com/GTCFXGlobalTradeCapital" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://x.com/GTC_fx" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="X" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://www.youtube.com/channel/UCnKWakjm1b9Bm63xgwNFXHA" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://linkedin.com/company/gtcfx-official" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://www.instagram.com/gtcfxofficial/" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://api.whatsapp.com/send/?phone=448000488461&text&type=phone_number&app_absent=0" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://t.me/gtc_vip_signal" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="GTCFX - Global Trade Capital on TikTok" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" width="20" height="20" style="display:block;">
          </a>
        </td>
      </tr>
    </table>
  </td>
</tr>

<tr>
  <td align="center" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 30px;">
    &copy; Copyright 2025 GTCVIP – All Rights Reserved
  </td>
</tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
      
      `;
};
const generateArabic = (data) => {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <title>لقد تم تسجيلك في مسابقة GTC للتداول التجريبي</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Noto Kufi Arabic',sans-serif;direction:rtl;text-align:right;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family:'Noto Kufi Arabic',sans-serif;padding:20px;">
      <tr>
        <td align="center">

          <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0;border-radius:8px;padding:30px;padding-top:30px;">
            <!-- الشعار -->
            <tr>
              <td align="center" style="padding-bottom:20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="شعار GTC" style="width:160px;" />
              </td>
            </tr>

            <!-- العنوان -->
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#2a2f83;padding-bottom:10px;">
                احصل على 5,000&nbsp;USC للتداول.<br>بدون إيداع!
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
                أضفنا كل بيانات الدخول الخاصة بك في هذا البريد حتى تكون جاهزًا للبدء!
              </td>
            </tr>

            <tr><td style="border-top:2px solid #e0e0e0;padding:15px 0;"></td></tr>

            <!-- الترحيب -->
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                مرحبًا ${data?.name}،
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                أنت الآن جاهز لتثبت للعالم أنك أفضل متداول على الإطلاق!
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                تم إنشاء حساب تداول GTC الخاص بك، وإليك كيفية الوصول إليه.
              </td>
            </tr>

            <!-- صندوق معلومات الحساب -->
            <tr>
              <td style="padding:20px 0;">
                <h3 style="color:#b68756;font-size:18px;margin:0 0 16px 0;">معلومات حساب تداول GTC الخاص بك</h3>
                <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;background-color:#fdf6ee;font-size:14px;color:#000;">
                  <tr>
                    <td width="45%" style="font-weight:600;color:#7c4e00;padding:12px 12px;">عملة الحساب</td>
                    <td style="padding:5px;">
                      <div style="background-color:#ffffff;padding:10px 14px;border-radius:8px;">USD</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight:600;color:#7c4e00;padding:12px 12px;">رقم حساب تداول GTC</td>
                    <td style="padding:5px;">
                      <div style="background-color:#ffffff;padding:10px 14px;border-radius:8px;">${data?.user}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight:600;color:#7c4e00;padding:12px 12px;">كلمة المرور الخاصة بك</td>
                    <td style="padding:5px;">
                      <div style="background-color:#ffffff;padding:10px 14px;border-radius:8px;">${data?.password}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight:600;color:#7c4e00;padding:12px 12px;">كلمة مرور المستثمر</td>
                    <td style="padding:5px;">
                      <div style="background-color:#ffffff;padding:10px 14px;border-radius:8px;border:2px solid #a076f9;">${data?.invest_password}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight:600;color:#7c4e00;padding:12px 12px;">منصة التداول</td>
                    <td style="padding:5px;">
                      <div style="background-color:#ffffff;padding:10px 14px;border-radius:8px;">MT5</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight:600;color:#7c4e00;padding:12px 12px;">اسم الخادم</td>
                    <td style="padding:5px;">
                      <div style="background-color:#ffffff;padding:10px 14px;border-radius:8px;">GTCGlobalTrade-Server</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- أزرار الوصول -->
            <tr>
              <td align="center" style="padding:0 0 20px 0;">
                <p style="font-size:16px;color:#202a6b;font-weight:600;margin-bottom:20px;">ادخل إلى منطقة عملاء GTC</p>
                <table cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td align="center" style="padding:0 10px;">
                      <a href="https://download.mql5.com/cdn/web/gtc.global.trade/mt5/gtcglobaltrade5setup.exe" style="background-color:#ffffff;border:2px solid #b68756;border-radius:8px;color:#b68756;font-weight:600;padding:12px 20px;text-decoration:none;display:inline-block;">
                        منطقة العملاء على سطح المكتب
                      </a>
                    </td>
                    <td align="center" style="padding:0 10px;">
                      <a href="https://download.mql5.com/cdn/mobile/mt5/android?server=GTCGlobalTrade-Server" style="background-color:#b68756;border-radius:8px;color:#ffffff;font-weight:600;padding:12px 20px;text-decoration:none;display:inline-block;">
                        منطقة العملاء على الجوال
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- المساعدة -->
            <tr>
              <td style="font-size:16px;color:#4D4D70;padding-bottom:10px;font-weight:600;">
                هل تحتاج إلى مساعدة؟
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                إذا كان لديك أي استفسار أو تحتاج إلى مساعدة إضافية، لا تتردد في التواصل معنا عبر البريد:
                <a href="mailto:support@gtcfx.com">support@gtcfx.com</a>. نحن هنا لدعمك وضمان أن تجربتك معنا هي الأفضل على الإطلاق.
              </td>
            </tr>

            <!-- ختام -->
            <tr>
              <td style="font-size:16px;color:#4D4D70;padding-bottom:10px;font-weight:600;">
                مع أطيب التحيات،
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:30px;">
                أنت الأفضل، وقريبًا ستُثبت ذلك للعالم!<br>
                عائلتك في GTC
              </td>
            </tr>

            <tr><td style="border-top:2px solid #e0e0e0;padding:15px 0;"></td></tr>

            <!-- بيانات التواصل -->
            <tr>
              <td style="padding-top:0;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="right">
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="شعار GTC" style="width:160px;" />
                    </td>
                    <td align="left" style="font-size:13px;color:#192055;line-height:25px;">
                      📞 الهاتف: +971 800 667788<br/>
                      ✉️ البريد: <a href="mailto:support@gtcfx.com" style="color:#192055;text-decoration:none;">support@gtcfx.com</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- القسم القانوني -->
            <tr>
              <td style="font-size:11px;color:#666;padding:20px 0;line-height:1.5;">
                <strong>يجب الحفاظ على سرية حساب الدخول وكلمة المرور في جميع الأوقات. لا ينبغي مشاركة كلمات المرور أو كشفها للآخرين. لا تسمح لأي شخص بالوصول إلى حساب التداول الخاص بك أو القيام بأي شيء قد يعرّض أمان حسابك للخطر.</strong><br/><br/>
                <strong>أنت مسؤول عن سرية واستخدام جميع معرّفات الدخول وكلمات المرور وبيانات وأساليب وأدوات الأمان الأخرى المتعلقة بمنطقة عملاء GTC ومنصات التداول الخاصة بـ GTC.</strong>
                <br/><br/>
                هذا الموقع مملوك ومدار من قِبل GTC Global Ltd، وهي شركة محدودة مُسجّلة في موريشيوس (رقم الشركة: C188049) ومرخّصة من قِبل لجنة الخدمات المالية في موريشيوس (No. GB22200292) لمزاولة أعمال وسيط استثمار SEC-2.1B. العنوان المسجّل: Cyberati Lounge, Ground Floor, The Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebene, Republic of Mauritius. يتم تقديم الخدمات والمنتجات المالية المُروّج لها على هذا الموقع من قِبل GTC Global Ltd و GTC Global Trade Capital Co. Limited، وهي شركة مخوّلة من لجنة الخدمات المالية في فانواتو، رقم الترخيص: 40354.
                <br/><br/>
                <strong style="color:#000;">GTC Global Ltd و GTC Global Trade Capital Co. Limited</strong> تنتميان إلى مجموعة GTC المالية، التي تضم مجموعة من الكيانات حول العالم.
                <br/><br/>
                ينطوي الاستثمار في المشتقات المالية على مخاطر كبيرة وقد لا يكون مناسبًا لجميع المستثمرين. يمكن أن تزيد الرافعة المالية مستوى المخاطر واحتمالية التعرّض للخسائر. قبل اتخاذ قرار بالتداول في الفوركس أو عقود الفروقات، من الضروري تقييم أهدافك الاستثمارية ومستوى خبرتك وتحملك للمخاطر بعناية. ينبغي عليك استثمار الأموال التي يمكنك تحمل خسارتها فقط. نوصي بشدّة بأن تثقّف نفسك جيدًا حول المخاطر المرتبطة، وأن تطلب المشورة من مستشار مالي أو ضريبي مستقل إذا لزم الأمر.
                <br/><br/>
                <strong style="color:#000;">GTC Global Ltd و GTC Global Trade Capital Co. Limited</strong> لا تقدّمان خدمات للأفراد المقيمين في بعض الاختصاصات القضائية و/أو حيث يكون تقديم مثل هذه الخدمات مخالفًا للقوانين أو اللوائح المحلية.
                <br/><br/>
                <strong style="color:#000;">كيانات المجموعة الأخرى:</strong><br/>
                المنتجات والخدمات المالية المعروضة على هذا الموقع لا تُقدَّم من قِبل الكيانات التالية، ولا تتوافر أي حقوق رجوع ضدها. إذا كنت مهتمًا بالمنتجات والخدمات التي تقدّمها كل من الكيانات التالية، فيُرجى زيارة مواقعها الرسمية.
                <br/><br/>
                <strong style="color:#000;">GTC Group LLC-FZ</strong> شركة قابضة مُسجّلة في دبي، الإمارات العربية المتحدة، برقم الرخصة التجارية: 2311147.01. مكتبها المسجّل: Business Center 1, M Floor, Meydan Hotel, Nad Al Sheba, Dubai, UAE.
                <br/><br/>
                <strong style="color:#000;">GTC Multi Trading DMCC</strong> شركة محدودة مُرخّصة ومُسجّلة بمركز دبي للسلع المتعددة (No. DMCC-312687) ومرخّصة من هيئة الأوراق المالية والسلع في الإمارات العربية المتحدة (No. 20224D4D7007) لمزاولة نشاط سمسرة السلع – التداول والمقاصة. العنوان المسجّل: Unit No: 1501, 1 Lake Plaza, Plot No: JLT-PH2-T2A, Jumeirah Lakes Towers, Dubai, UAE.
                <br/><br/>
                تتم إدارة كل كيان من كيانات مجموعة GTC المالية بشكل مستقل. المنتجات والخدمات المالية المعروضة على هذا الموقع تُقدَّم فقط من قِبل GTC Global Ltd و GTC Global Trade Capital Co. Limited.
                <br/><br/>
                جميع العلامات التجارية ملك لأصحابها. جميع الحقوق محفوظة. GTC Global Ltd جزء من مجموعة GTC المالية التي تضم كيانات حول العالم.
                <br/><br/>
                <strong>تحذير المخاطر:</strong> قد لا يكون التداول بالمنتجات ذات الرافعة المالية مثل الفوركس والمشتقات مناسبًا لجميع المستثمرين لأنه ينطوي على درجة عالية من المخاطر على رأس المال. يُرجى التأكد من فهمك الكامل للمخاطر وطلب المشورة المستقلة إذا لزم الأمر.
              </td>
            </tr>

            <!-- تذييل السوشيال -->
            <tr>
              <td style="padding-top:30px;text-align:center;">
                <table align="center" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:0 5px;">
                      <a href="https://www.facebook.com/GTCFXGlobalTradeCapital" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="20" height="20" style="display:block;">
                      </a>
                    </td>
                    <td style="padding:0 5px;">
                      <a href="https://x.com/GTC_fx" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="X" width="20" height="20" style="display:block;">
                      </a>
                    </td>
                    <td style="padding:0 5px;">
                      <a href="https://www.youtube.com/channel/UCnKWakjm1b9Bm63xgwNFXHA" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width="20" height="20" style="display:block;">
                      </a>
                    </td>
                    <td style="padding:0 5px;">
                      <a href="https://linkedin.com/company/gtcfx-official" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" width="20" height="20" style="display:block;">
                      </a>
                    </td>
                    <td style="padding:0 5px;">
                      <a href="https://www.instagram.com/gtcfxofficial/" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="20" height="20" style="display:block;">
                      </a>
                    </td>
                    <td style="padding:0 5px;">
                      <a href="https://api.whatsapp.com/send/?phone=448000488461&text&type=phone_number&app_absent=0" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" width="20" height="20" style="display:block;">
                      </a>
                    </td>
                    <td style="padding:0 5px;">
                      <a href="https://t.me/gtc_vip_signal" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" width="20" height="20" style="display:block;">
                      </a>
                    </td>
                    <td style="padding:0 5px;">
                      <a href="GTCFX - Global Trade Capital on TikTok" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" width="20" height="20" style="display:block;">
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td align="center" style="font-size:12px;color:#666666;padding-top:15px;padding-bottom:30px;">
                &copy; حقوق الطبع والنشر 2025 GTCVIP – جميع الحقوق محفوظة
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};
export { generateEnglis, generateArabic };

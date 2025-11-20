const generateEnglis = (data) => {
    return `
  <!DOCTYPE html>
  <html lang="en" style="background:#ffffff;">
  <head>
    <meta charset="UTF-8">
    <title>🎉 You’re Our Lucky Winner!</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- Preheader (hidden) -->
    <meta name="color-scheme" content="light only">
    <style>
      /* Some clients respect this; keep minimal */
      @media (prefers-color-scheme: dark) {
        body, .wrap { background:#ffffff !important; }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background:#ffffff;font-family:Arial,Helvetica,sans-serif;color:#1e2158;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
      Congratulations! A special surprise is waiting inside—open to see the big reveal 🌸🎊
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fff;padding:20px 0;">
     <tr>
          <td align="center">
  
            <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0; border-radius:8px;padding:30px; padding-top: 20px; background-color: #182063;">
              <tr>
                <td align="center" style="padding-bottom: 20px;">
                  <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/social/new-logo.webp" alt="GTC Logo" style="width: 160px;" />
                </td>
              </tr>
  
  
            <!-- Headline -->
            <tr>
              <td align="center" style="padding:24px 24px 8px;">
                <div style="font-size:24px;line-height:1.35;color:#fff;font-weight:700;">
                  Congratulations, <span style="color:#b68756;">WINNER_NAME</span>! 🌸🎉
                </div>
              </td>
            </tr>
  
            <!-- Subtext -->
            <tr>
              <td align="center" style="padding:0 24px 12px;">
                <div style="font-size:14px;color:#ffff;">
                  You’ve been selected as our <strong>Lucky Winner</strong>! We’re thrilled to announce your prize below.
                </div>
              </td>
            </tr>
  
            <!-- Divider -->
            <tr><td style="border-top:2px solid #f0f1f6;padding:12px 0;"></td></tr>
  
            <!-- Prize Card -->
            <tr>
              <td>
                <h3 style="margin:0 0 10px 0;color:#b68756;font-size:18px;">Your Prize</h3>
              </td>
            </tr>
            <tr>
              <td>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fdf6ee;border-radius:10px;">
                  <tr>
                    <td width="45%" style="padding:14px 14px;color:#7c4e00;font-weight:600;">Prize Amount</td>
                    <td style="padding:8px 14px;">
                      <div style="background:#ffffff;border-radius:8px;padding:10px 14px;font-size:14px;color:#000;">PRIZE_AMOUNT</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="padding:14px 14px;color:#7c4e00;font-weight:600;">Winning Ticket / Ref</td>
                    <td style="padding:8px 14px;">
                      <div style="background:#ffffff;border-radius:8px;padding:10px 14px;font-size:14px;color:#000;">WIN_REF_CODE</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="padding:14px 14px;color:#7c4e00;font-weight:600;">Draw Date</td>
                    <td style="padding:8px 14px;">
                      <div style="background:#ffffff;border-radius:8px;padding:10px 14px;font-size:14px;color:#000;">DRAW_DATE</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
  
            <!-- Next Steps -->
            <tr>
              <td style="padding: 12px 0 0px;">
                <h3 style="margin:0 0 10px 0;color:#b68756;font-size:18px;">What Happens Next?</h3>
              </td>
            </tr>
            <tr>
              <td style="padding:0 24px 18px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="font-size:14px;color:#ffff;padding:4px 0;">✅ Our team will verify your details within <strong>1–2 business days</strong>.</td>
                  </tr>
                  <tr>
                    <td style="font-size:14px;color:#ffff;padding:4px 0;">📧 Keep an eye on your email for a quick confirmation.</td>
                  </tr>
                  <tr>
                    <td style="font-size:14px;color:#ffff;padding:4px 0;">🧾 You may be asked to provide ID/eligibility confirmation (standard process).</td>
                  </tr>
                </table>
              </td>
            </tr>
  
              <tr>
                <td style="font-size:14px;color:#ffff;padding-bottom:20px;">
                  If you need any help, our Customer Care team is available via Live Chat on our website or by email at support@gtcfx.com.
                </td>
              </tr>
  
              <tr>
                <td style="font-size:14px;color:#ffff;padding-bottom:30px;">
                  Have a great day,<br>Your GTC Family
                </td>
              </tr>
              <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>
  
  
  
            <!-- Contact & Socials -->
            <tr>
                <td style="padding-top: 0px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="left">
                        <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/social/new-logo.webp" alt="GTC Logo" style="width: 160px;" />
                      </td>
                      <td align="right" style="font-size: 13px; color: #fff; line-height: 25px;">
                        📞 Phone: +971 800 667788<br/>
                        ✉️ Email: <a href="mailto:support@gtcfx.com" style="color: #fff; text-decoration: none;">support@gtcfx.com</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
  
        <tr>
    <td style="font-size: 11px; color: #ccc; padding: 20px 0px; line-height: 1.5;">
  
      This website is owned and operated by GTC Global Ltd, a limited company incorporated in Mauritius (company number: C188049) and licensed by the Financial Services Commission, Mauritius (No. GB22200292) to trade as an SEC-2.1B Investment Dealer. Registered Address: Cyberati Lounge, Ground Floor, The Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebene, Republic of Mauritius. The financial services and products promoted on this website are offered by GTC Global Ltd and GTC Global Trade Capital Co. Limited, a company authorised by the Vanuatu Financial Services Commission of the Republic of Vanuatu, Company License Number: 40354.
  
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
    <td align="center" style="font-size: 12px; color: #ccc; padding-top: 15px;">
      &copy; Copyright 2025 GTCFX – All Rights Reserved
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
  
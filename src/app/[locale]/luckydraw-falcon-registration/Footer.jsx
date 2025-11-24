"use client";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
     <section className='bg-gradient-to-l from-[#05175D] via-[#000021] to-[#05175D]'>
         <div className="max-w-7xl mx-auto lg:flex justify-start items-center pt-8 border-t border-y-cyan-50 border-opacity-40 px-2 ">
          <div className="lg:basis-3/12 lg:flex flex-wrap items-center justify-center md:pr-10">
          <div className="flex justify-center w-full gap-4  mb-5">
                    <Image
                      src="/lucky/new-logo.webp"
                      width={260}
                      height={93}
                      alt="GTCFX"
                      className="lg:w-[260px] lg:h-[93px] md:w-[110px] md:h-[40px] w-[130px] h-[47px] cursor-pointer"
                    />
                  </div>
            
           
            <div className="relative w-full h-[150px] pt-5 ">
                <Image src="/footer-map.webp" fill alt="GTC Map" className="object-contain" />
            </div>
          </div>
          <div className="lg:basis-9/12 text-xs text-white text-opacity-70 space-y-3 leading-5  pb-16">
            <p>
           This website is owned and operated by GTC Global SA (Pty) Ltd, a private limited company incorporated in South Africa (Company Number: 2020/810937/07) and licensed by the Financial Sector Conduct Authority of South Africa (FSP No. 51545) to operate as an Intermediary. Registered Address: 18 Cavendish Road, Clarement, Cape Town, Western Cape, 7708, South Africa. The financial services and products promoted on this website are offered by GTC Global Trade Capital Co. Limited, a company authorised by the Vanuatu Financial Services Commission of the Republic of Vanuatu (Company License Number: 40354). Registered Address: 1/Floor, B&P House, Kumul Highway, Port Vila, Vanuatu.
            </p>
            <p>
              <span className="text-secondary">
                GTC Global SA (Pty) Ltd and GTC Global Trade Capital Co. Limited
              </span>
             are part of the GTC Financial Group which comprises a network of entities across the globe.
            </p>

            <p>Investing in derivative products carries significant risks and may not be suitable for all investors. The use of leverage in these instruments can increase both the level of risk and potential for losses. Before making any decision to engage in foreign exchange trading or Contracts for Difference (CFDs), it is essential to carefully consider your investment objectives, level of experience, and risk tolerance. You should only invest funds that you can afford to lose. We strongly encourage you to educate yourself thoroughly on the associated risks and, if you have any questions, seek advice from an independent financial or tax advisor.</p>
            <p>
              <span className="text-secondary">
               GTC Global SA (Pty) Ltd and GTC Global Trade Capital Co. Limited
              </span>
              do not provide services to individuals residing in specific jurisdictions and/or jurisdictions where distribution of such services would be contrary to local law or regulations.
            </p>
          
          
           
            <p>
            
              Each entity within the GTC Financial Group operates independently. The financial products and services offered on this website are provided SOLELY by GTC Global Trade Capital Co. Limited.


            </p>
         
          </div>
        </div>
        <div className='bg-white text-primary flex justify-center items-center p-4 text-[8px] md:text-sm  text-center'>
        © COPYRIGHT 2025 GTCFX - ALL RIGHTS RESERVED
    </div>
    </section>
  );
}


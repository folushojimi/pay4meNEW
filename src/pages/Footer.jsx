import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center">
          <div>
            <img src="/images/" alt="" />
            <div className="flex gap-3 "><img src="/images/email.svg" alt="" /> <p className="text-[#5D5D5D]">support@pay4me.app</p></div>
          </div>

        {/* Company List */}
        <div className="p-4">
          <h1 className="font-semibold text-lg mb-4">Company</h1>
          <ul className="space-y-4 text-sm text-[#5D5D5D]">
            <li>About</li>
            <li>Blog</li>
            <li>How it works</li>
            <li>Career</li>
            <li></li>
          </ul>
        </div>

        {/* Company List */}
        <div className="p-4">
          <h1 className="font-semibold text-lg mb-4">Resources</h1>
          <ul className="space-y-4 text-sm text-[#5D5D5D]">
            <li>Android Reviews</li>
            <li>iOS Reviews</li>
            <li>Testimonials</li>
            <li>FAQs</li>
            <li></li>
          </ul>
        </div>

        {/* Company List */}
        <div className="p-4">
          <h1 className="font-semibold text-lg mb-4">Legal</h1>
          <ul className="space-y-4 text-sm text-[#5D5D5D]">
            <li>Terms of Service</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>KYC/AML Policy</li>
            <li></li>
            <li></li>
          </ul>
        </div>

{/* Download Buttons */}
       <div className="">
         <div className="flex gap-2">
          <button className="bg-black flex gap-3 justify-center items-center rounded-full py-2 px-6">
            <img src="/images/whiteapple.svg" alt="" />
             <div>
                <p className="text-white text-xs">Download on</p>
                <h2 className="text-white font-semibold">Appstore</h2>
             </div>
          </button>

          <button className="bg-black flex gap-3 justify-center items-center rounded-full py-2 px-6">
            <img src="/images/whiteplay.svg" alt="" />
             <div>
                <p className="text-white text-xs">Download on</p>
                <h2 className="text-white font-semibold">Playstore</h2>
             </div>
          </button>
         </div>
          
         <p className="text-sm text-[#5D5D5D] w-[300px] leading-7">Depending on your mobile device, 
            download our awesome native app to
           start enjoying all the benefits of pay4Me.
         </p>

       </div>

      </div>
    </div>
  );
};

export default Footer;

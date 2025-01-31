import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="flex justify-between items-start px-14 py-5">
        <div>
          <img src="/images/footerlogo.svg" alt="footerlogo" className="mb-5" />
          <div className="flex items-center gap-3 mb-8">
            <img src="/images/email.svg" alt="" />{" "}
            <p className="text-[#5D5D5D] text-sm">support@pay4me.app</p>
          </div>
          <div className="flex items-center gap-3">
            <img src="/images/instagram.svg" alt="instagram" />
            <img src="/images/twitter.svg" alt="twitter" />
            <img src="/images/facebook.svg" alt="facebook" />
            <img src="/images/tiktok.svg" alt="tiktok" />
            <img src="/images/youtube.svg" alt="youtube" />
          </div>
        </div>

        {/* Company List */}
        <div className="">
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
        <div className="">
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
        <div className="">
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
          <div className="flex gap-2 mb-5">
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

          <p className="text-sm text-[#5D5D5D] w-[300px] leading-7">
            Depending on your mobile device, download our awesome native app to
            start enjoying all the benefits of pay4Me.
          </p>
        </div>
      </div>
      {/*Year*/}
      <div className="border-[1px]  border-y-[#D8D8D8] flex justify-center py-10">
        <p className="text-sm text-[#7D7D7D]">© 2020 - 2025 Pay4Me, Inc.</p>
      </div>

      {/* footer description */}
      <div className="flex gap-3 pb-5">
        <img src="/images/last3D.svg" alt="last3d.svg" />
        <p className="text-[#666565] text-xs leading-6 pt-10">
          Pay4Me is a financial technology company making it easier for
          international students and immigrants to pay their tuition and fees in
          minutes. We offer our products and services in partnership with
          licensed transmitters and banking partners in their respective
          jurisdictions. All trademarks, logos, and brand names are the property
          of their respective owners. All company , product, and service names
          used on this website are for identification purposes only. Use of
          these names, trademarks and brands do not imply endorsement.
        </p>
      </div>
    </div>
  );
};

export default Footer;

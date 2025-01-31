import React from "react";

const BarcodeBanner = () => {
  return (
    <div className="h-[600px] w-full flex justify-center items-center">
      {/* Barner */}
      <div className="h-[500px] w-[1100px] bg-[#EDF5E2] rounded-3xl">
        {/* the 3d */}
        <div>
          <img
            src="/images/download3D.svg"
            alt=""
            className="h-[500px] absolute right-20"
          />
        </div>

        {/* main content */}
        <div className="flex justify-center items-center gap-48 mt-20 relative">
          <div>
            <div>
              <h1 className="font-semibold text-4xl mb-9">
                Download the Pay4Me <br /> App Today!
              </h1>
              <p className="text-sm text-[#7D7D7D] mb-7">
                Our custom QR code will take you to your app store <br />
                to download our awesome native apps
              </p>
            </div>

            {/* buttons */}
            <div className="flex gap-4">
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
          </div>

          <div>
            <img src="/images/qrcode.svg" alt="" className="h-[340px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarcodeBanner;

import React from "react";
import Button from "../component/Button";

const Whatweoffer = () => {
  return (
    <div className="bg-black h-[1000px] overflow-hidden">
      {/* the background content */}
      <div className="flex justify-center items-center gap-[600px] absolute">
        <img src="/images/back1.svg" alt="" />
        <img src="/images/back2.svg" alt="" />
      </div>

      {/* the main content */}
      <div className="pt-20 relative z-10">
        {/* header */}
        <div className="flex flex-col justify-center items-center mb-24 ">
          <img src="/images/offer-icon.svg" alt="" className="mb-7 " />
          <h1 className="text-white font-semibold text-3xl text-center">
            Simplified Payments for Your
            <br /> Relocation Dreams
          </h1>
        </div>

        {/* body + footer */}
        <div className="flex flex-col justify-center items-center  ">
            {/* body */}
            <div className="flex gap-14">

            <div className=" h-[420px] w-[340px] bg-[#FFFFFF] border-[1px] border-[#E0E0E0] rounded-3xl">
            <img src="/images/FrameC1.svg" alt="" />
              <div>
                <h3 className="font-semibold text-xl mb-5">
                  Global Accessiblity
                </h3>
                <p className="text-xs w-60 leading-5">
                  Effortlessly send tuition and other payments to educational
                  institutions worldwide, no matter where you are.
                </p>
              </div>
            </div>


          <div className=" h-[420px] w-[340px] bg-[#FFFFFF] border-[1px] border-[#E0E0E0] rounded-3xl">
            
          </div>

            </div>

            {/* footer */}
            <div className="pt-16">
                <Button/>
            </div>
        </div>


      </div>
    </div>
  );
};

export default Whatweoffer;

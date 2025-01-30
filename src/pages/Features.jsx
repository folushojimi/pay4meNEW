import React from "react";
import ScanButton from "../component/ScanButton";

const Features = () => {
  return (
    <div className="flex justify-center items-center  overflow-hidden">
      <div className="bg-[#E7FBCF] h-[670px] w-[1105px] rounded-3xl mb-10 flex justify-center items-center ">
        {/* main contents */}


        {/* 580px */}

        <div className="absolute z-10">

       <div className="mb-16">
        <img src="/images/Frame-Features.svg" alt="" className="mb-3"/>
        <h1 className="font-semibold text-[44px]">What Truly sets us apart</h1>
       </div>


        <div className="flex justify-center items-center gap-9">
          {/* the boxes */}
          <div className="bg-white h-[320px] w-[320px] rounded-3xl flex flex-col justify-center items-start gap-9 pl-8">
          <img src="/images/FrameC1.svg" alt="" />
            <div>
                 <h3 className="font-semibold text-xl mb-5">Global Accessiblity</h3>
                <p className="text-xs w-60 leading-5">Effortlessly send tuition and other 
                payments to educational institutions worldwide, no matter where you are.</p>
            </div>
            <ScanButton/>
          </div>
           {/* box2 */}
          <div className="bg-white h-[320px] w-[320px] rounded-3xl flex flex-col justify-center items-start gap-9 pl-8">
          <img src="/images/FrameC2.svg" alt="" />
            <div>
                 <h3 className="font-semibold text-xl mb-5">Fast & Reliable Transactions</h3>
                <p className="text-xs w-60 leading-5">Ensure your payments are processed quickly, helping 
                    you meet important deadlines without stress.</p>
            </div>
            <ScanButton/>
          </div>
             {/* box3 */}
          <div className="bg-white h-[320px] w-[320px] rounded-3xl flex flex-col justify-center items-start gap-9 pl-8">
          <img src="/images/FrameC3.svg" alt="" />
            <div>
                 <h3 className="font-semibold text-xl mb-5">Secure & Transparent</h3>
                <p className="text-xs w-60 leading-5">Enjoy peace of mind with secure payment processing and
                     complete transparency on fees and conversion rates.</p>
            </div>
            <ScanButton/>
          </div>
        </div>
        </div>

        <img
          src="/images/Group1369.svg"
          alt=""
          className="float-right  h-[505px]    ml-28 relative left-56"
        />
      </div>
    </div>
  );
};

export default Features;

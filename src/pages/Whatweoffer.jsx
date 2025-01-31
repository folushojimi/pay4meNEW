import React from "react";
import Button from "../component/Button";

const Whatweoffer = () => {
  return (
    <div className="bg-black h-[880px] overflow-hidden">
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

            <div className=" h-[420px] w-[350px] bg-[#FFFBE4] border-[1px] border-[#E0E0E0] rounded-2xl">
              <div className="pl-7 pt-7">
             <img src="/images/spark.svg" alt="" className="pl-2 pb-3 h-14"/>
              <div>
                <h3 className="font-semibold text-2xl mb-5">
                Super fast tuition and <br />
                school fees payments
                </h3>
                <p className="text-xs w-72 leading-5 text-[#7D7D7D]">
                Seamlessly pay local and international educational 
                expenses using our fast and convenient online payments 
                platform from the comfort of your home.
                </p>
              </div>

               {/* partners */}
               <div className="absolute z-10">
                <div className="flex mb-7 gap-8 mt-11">
                <img src="/images/stanford.svg" alt="" className="h-9"/>
                <img src="/images/unighana.svg" alt="" className="h-9"/>
              </div>
              <div className="flex gap-8">
                <img src="/images/byu.svg" alt="" className="h-14"/>
                <img src="/images/unilag.svg" alt="" className="h-14"/>
              </div>
               </div>
              
              <div className="relative float-right mt-[90px]">
                <img src="/images/brandscurve1.svg" alt="curve" className="h-24"/>
              </div>
              </div>
            </div>


            <div className=" h-[420px] w-[350px] bg-[#E7F8FF] border-[1px] border-[#E0E0E0] rounded-2xl">
              <div className="pl-7 pt-7">
             <img src="/images/dollar.svg" alt="" className="pl-2 pb-3 h-14"/>
              <div>
                <h3 className="font-semibold text-2xl mb-5">
                Pay for SEVIS, WES, Visa Applications & More
                </h3>
                <p className="text-xs w-72 leading-5 text-[#7D7D7D]">
                We help you get closer to your study abroad and
relocation goals faster by promptly completing
your payment orders for credential evaluation,
immigration, and visa purposes.
                </p>
              </div>

               {/* partners */}
               <div className="absolute z-10">
                <div className="flex mb-5 gap-8 mt-11">
                <img src="/images/sevisfee.svg" alt="" className="h-10"/>
                <img src="/images/visa.svg" alt="" className="h-10"/>
              </div>
              <div className="">
                <img src="/images/wes.svg" alt="" className="h-10"/>
              </div>
               </div>
              
              <div className="relative float-right mt-[75px]">
                <img src="/images/brandscurve2.svg" alt="curve" className="h-24"/>
              </div>
              </div>
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

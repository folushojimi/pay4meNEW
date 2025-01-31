import React from "react";
import Button from "../component/Button";

const Howitworks = () => {
  return (
    <div className="bg-[#FAFAFA] h-[1300px]  overflow-hidden">
      {/* w-[1105px] */}

      <div className="flex justify-center items-center pb-12 mt-20">
        <div className="flex flex-col justify-center items-center gap-5">
          <img src="/images/howit.svg" alt="" />
          <h1 className="font-semibold text-4xl text-center">
            4 Simple Steps to Get Started
          </h1>
        </div>
      </div>

      {/* the boxes */}
      <div>
        {/* first 2 boxes */}
        <div className="flex flex- justify-center gap-16 mb-16">
          <div className=" h-[420px] w-[340px] bg-[#FFFFFF] border-[1px] border-[#E0E0E0] rounded-3xl ">
            <div className="pl-10 ">
              <div className="mb-2 flex justify-center items-center gap-44 ">
                <h1 className="font-semibold">1.</h1>
                <img src="/images/Vector1.svg" alt="vector1" />
              </div>

              <h1 className="font-semibold mb-7">Download the Mobile App</h1>
            </div>
            <div className="flex">
              <img src="/images/Vector2.svg" alt="vector2" />
              <p className="text-xs max-w-64 leading-5 text-[#5D5D5D]">
                Get started by downloading our mobile app, available on iOS and
                Android.
              </p>
            </div>

            <div className="flex justify-center items-center">
              <img src="/images/Barcode.svg" alt="" className="h-40" />
            </div>
          </div>

          <div className=" h-[420px] w-[340px] bg-[#FFFFFF] border-[1px] border-[#E0E0E0] rounded-3xl">
            <div className="pl-7 mt-10">
              <h1 className="font-semibold mb-10">2.</h1>

              <h1 className="font-semibold mb-7">Sign up on the app.</h1>
              <p className="text-xs max-w-64 leading-5 text-[#5D5D5D]">
                Sign up with your details, verify your identity, and set up your
                payment preferences.
              </p>
            </div>

            <div className="flex justify-center items-center mt-10">
              <img src="/images/signup.svg" alt="" className="h-40" />
            </div>
          </div>
        </div>

        {/* second 2 boxes */}
        <div className="flex justify-center gap-16">
          <div className=" h-[420px] w-[340px] bg-[#FFFFFF] border-[1px] border-[#E0E0E0] rounded-3xl">
            <div className="pl-7 mt-10">
              <h1 className="font-semibold mb-10">3.</h1>

              <h1 className="font-semibold mb-7">Setup Payment Details</h1>
              <p className="text-xs max-w-64 leading-5 text-[#5D5D5D]">
                Securely link your local bank account or mobile wallet to the
                Pay4me app.
              </p> 
            </div>

            <div className="flex justify-center items-center mt-10">
              <img src="/images/paymet.svg" alt="" className="h-40" />
            </div>
          </div>

          <div className=" h-[420px] w-[340px] bg-[#FFFFFF] border-[1px] border-[#E0E0E0] rounded-3xl">
            <div className="pl-7 mt-10">
              <h1 className="font-semibold mb-10">4.</h1>

              <h1 className="font-semibold mb-7">Complete Your Payment</h1>
              <p className="text-xs max-w-72 leading-5 text-[#5D5D5D]">
                Choose your preferred payment method and finalize the
                transaction securely.
              </p>
            </div>

            <div className="flex justify-center items-center mt-10">
              <img src="/images/completepay.svg" alt="" className="h-40" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-12">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Howitworks;

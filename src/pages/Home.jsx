import React from "react";
import Navbar from "../component/Navbar";
import Button from "../component/Button";
import DemoButton from "../component/DemoButton";
 
const Home = () => {
  return (
    <div>
      <div className="bg-[url('/images/background.png')] bg-cover bg-center min-h-screen">
        <Navbar />

         {/*Home details */}
        <div className="mt-20">

          <div className="flex justify-center items-center flex-col">

              {/* frame */}
          <div><img src="/images/Frametop.svg" alt="" /></div>

            <h1 className="font-bold text-5xl text-center w-[700px] leading-tight mt-4">
              Reliable Payment Solutions for International Education
            </h1>

            <p className="text-center text-sm mt-6">
              The easiest and fastest way to pay tuition and fees to educational
              institutions, businesses,  <br /> and government agencies
              worldwide.
            </p>

            {/* buttons */}
            <div className="flex justify-center items-center gap-5 pt-10">
              <Button />
              <DemoButton />
            </div>

            {/* trusted student */}
            <div>
              <div className="flex items-center gap-3 pr-14 pt-5">
                <div className="flex">
                  <img
                    src="/images/Ellipse376.svg"
                    alt=""
                    className="relative left-8 h-8"
                  />
                  <img
                    src="/images/Ellipse377.svg"
                    alt=""
                    className="relative left-5 h-8"
                  />
                  <img
                    src="/images/Ellipse378.svg"
                    alt=""
                    className="relative left-3 h-8"
                  />
                  <img
                    src="/images/Ellipse379.svg"
                    alt=""
                    className="relative h-8"
                  />

                </div>
                <p className="text-xs">Trusted by 3k+ Students Globally</p>
              </div>
            </div>

          </div>
        </div>

        {/* Details with images */}
        <div className="flex justify-center items-center mt-14">
     <img src="/images/Component22.svg" alt=""  className="h-[580px]"/>
        </div>

        </div>
    </div>
  );
};

export default Home;

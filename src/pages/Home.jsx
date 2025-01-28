import React from "react";
import Navbar from "../component/Navbar";
import Button from "../component/Button";
import DemoButton from "../component/DemoButton";

const Home = () => {
  return (
    <div>
      <div className="bg-[url('/images/background.png')] bg-cover bg-center h-screen">
        <Navbar />

        {/*Home details */}
        <div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-bold text-5xl text-center w-[700px] leading-tight">
            Reliable Payment Solutions for International Education
          </h1>

          <p className="text-center text-base">The easiest and fastest way to pay tuition and fees
             to educational institutions, <br /> businesses, 
             and government agencies worldwide.
          </p>


           {/* buttons */}
           <div className="flex justify-center items-center gap-5">
            <Button/>
            <DemoButton/>
           </div>

         {/* trusted student */}
           <div>

           <div>
            <div>
                <img src="/images/" alt="" />
            </div>

            <p>Trusted by 3k+ Students Globally</p>
           </div>

           </div>

        </div>



        </div>
        

        {/* Details with images */}
        <div></div>
      </div>
    </div>
  );
};

export default Home;

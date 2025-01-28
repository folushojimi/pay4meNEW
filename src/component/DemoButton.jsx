import React from "react";

const DemoButton = () => {
  return (
    <div>
      <button className="bg-[#F4F8EF] py-3  px-8 flex justify-center gap-2 items-center text-black rounded-full border-[1px] border-[#AFE274]">
        <p>Watch Demo</p>
        <img src="/images/play-circle.svg" alt="apple" />
      </button>
    </div>
  );
};

export default DemoButton;

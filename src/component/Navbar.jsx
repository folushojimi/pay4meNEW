import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="bg-black h-[65px] w-[850px] mt-10 text-white flex items-center justify-between rounded-full px-2">
        {/* logo */}
        <div>
          <img src="/images/Component 1.svg" alt="" />
        </div>

        {/* links */}
        <ul className="flex items-center gap-8">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Support</li>
        </ul>

        {/* download button */}
        <Button />
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="bg-black h-[60px] w-[850px] mt-8 text-white flex items-center justify-between rounded-full px-1">
        {/* logo */}
        <div className="ml-2">
          <img src="/images/Component 1.svg" alt="" />
        </div>

        {/* links */}
        <ul className="flex items-center gap-8 text-sm">
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

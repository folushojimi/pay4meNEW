import React from "react";

const image1 = (
  <div className="bg-[url('/images/people1.svg')] bg-cover h-96 w-80 rounded-md cursor-pointer">
    <div className="pt-[320px] ml-2">
      <h3 className="text-white font-semibold text-sm mb-2">Jimmy adewale</h3>
      <p className="text-white text-xs">Entrepreneur</p>
    </div>
  </div>
);

const image2 = (
  <div className="bg-[url('/images/people2.svg')] bg-cover h-96 w-80 rounded-md cursor-pointer">
    <div className="pt-[320px] ml-2">
      <h3 className="text-white font-semibold text-sm mb-2">Palmer Nicole</h3>
      <p className="text-white text-xs">Phd Student</p>
    </div>
  </div>
);

const image3 = (
  <div className="bg-[url('/images/people3.svg')] bg-cover h-96 w-80 rounded-md cursor-pointer">
    <div className="pt-[320px] ml-2">
      <h3 className="text-white font-semibold text-sm mb-2">Hannah Adams</h3>
      <p className="text-white text-xs">Senior Therapist</p>
    </div>
  </div>
);

const image4 = (
  <div className="bg-[url('/images/9ja1.jpg')] bg-cover h-96 w-80 rounded-md cursor-pointer">
    <div className="pt-[320px] ml-2">
      <h3 className="text-white font-semibold text-sm mb-2">Jude Nwosu</h3>
      <p className="text-white text-xs">Accountant</p>
    </div>
  </div>
);

const image5 = (
  <div className="bg-[url('/images/9ja2.jpg')] bg-cover h-96 w-80 rounded-md cursor-pointer">
    <div className="pt-[320px] ml-2">
      <h3 className="text-white font-semibold text-sm mb-2">Kolade Ola</h3>
      <p className="text-white text-xs">phd Student</p>
    </div>
  </div>
);
const Carousel = () => {
  return (
    <div className="flex justify-center items-center gap-8">
      <div>{image1}</div>
      <div>{image2}</div>
      <div>{image3}</div>
    </div>
  );
};

export default Carousel;

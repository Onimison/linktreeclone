import React from 'react'
import zuri from '../../assets/zuri.jpg'
import i4g from '../../assets/I4G.jpg'
const footer = () => {
  return (
    <footer className="container mx-auto px-4 py-8 flex flex-col gap-4 justify-between md:items-center md:flex-row">
      <div className="w-32 md:w-36">
        <img src={zuri} className="w-full" />
      </div>
      <small className="text-[#667085]">HNG Internship 9 Frontend Task</small>
      <div className="w-28 md:w-32">
        <img src={i4g} className="w-full" />
      </div>
    </footer>
  );
};

export default footer
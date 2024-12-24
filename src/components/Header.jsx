import React from 'react';

function Header() {
  return (
    <div className="bg-[#FFF5E5] flex flex-col-reverse md:flex-row items-center justify-between  ">
      {/* Left Text Section */}
      <div className="box">
        <img
          src="bacground.png"
          alt="Interior"
          className="w-[1690px] h-[716px] "
        />
      </div>
      {/* <div className="max-w-md md:pr-8">
        <p className="text-sm text-gray-500 font-semibold">New Arrival</p>
        <h1 className="text-4xl font-bold text-[#B3842C] mt-2">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-gray-500 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="mt-6 bg-[#B3842C] text-white px-6 py-3 rounded">
          BUY NOW
        </button>
      </div> */}

      {/* Right Image Section */}
    </div>
  );
}

export default Header;

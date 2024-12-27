import { CiShare1 } from "react-icons/ci"

function Jasur() {
  return (
    <>
    <h1 className="text-[32px] text-center mt-[56px]">  Browse The Range</h1>
    <p className="text-[20px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className="flex gap-[40px] mt-[62px]">
      <img className="ml-[131px]" src="public/mask dab.png" alt="" />
      <img src="public/Image-living room (1).png" alt="" />
      <img src="/public/Image-living room (1).png " alt="" />
    </div>
    <br />
    <div className="flex">
  <h1 className="text-[24px] ml-[280px]">Dining</h1>
  <h1 className="text-[24px] ml-[360px]">Living</h1>
  <h1 className="text-[24px] ml-[360px]">Bedroom</h1>
    </div>

    <h1 className="text-[40px] leading-[40px] font-[700] text-center mt-[56px]">Our Products</h1>

   
{/* ALL cards div */}

    <div className="flex bg-white ml-[125px] gap-[32px] mt-[32px]">


       {/* 1- karta                                             karta */}


      {/* Karta */}
      <div className=" relative w-[285px] h-[420px] bg-gray-500 shadow-lg rounded-lg overflow-hidden group">
        {/* Oddiy holat */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 transition-all duration-300 group-hover:opacity-100">
          <img
            src="public/image 1.png"
            alt="Syltherine"
            className="max-w-max max-h-max mb-[px]"
          />
          <div className="ml-[-15px] mb-[30px]">
          <h3 className="text-lg font-semibold text-[24px]">Syltherine</h3>
          <p className="text-gray-500 text-[16px] ">Stylish cafe chair</p>
          <p className="mt-2">
            <span className="text-black font-bold text-[20px]">Rp 2.500.000</span>{" "}
            <span className="text-gray-400 line-through text-[16px]">Rp 3.500.000</span>
          </p>
          </div>
        </div>

        {/* Hover holati */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-white text-black px-4 py-2 font-semibold mb-4 hover:bg-white hover:text-orange-400 transition">
            Add to cart
          </button>
          <div className="flex space-x-6 text-gray-300">
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Ulashish</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Taqqoslash</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Yoqtirish</span>
            </div>
          </div>
        </div>
      </div>



       {/* 2- karta                                             karta */}


      {/* Karta */}
      <div className=" relative w-[285px] h-[420px] bg-gray-500 shadow-lg rounded-lg overflow-hidden group">
        {/* Oddiy holat */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 transition-all duration-300 group-hover:opacity-100">
          <img
            src="public/image 2.png"
            alt="Syltherine"
            className="max-w-max max-h-max mb-[px]"
          />
          <div className="ml-[-110px] mb-[30px]">
          <h3 className="text-lg font-semibold text-[24px]">Leviosa</h3>
          <p className="text-gray-500 text-[16px] ">Stylish cafe chair</p>
          <p className="mt-2">
            <span className="text-black font-bold text-[20px]">Rp 2.500.000</span>{" "}
          
          </p>
          </div>
        </div>

        {/* Hover holati */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-white text-black px-4 py-2 font-semibold mb-4 hover:bg-white hover:text-orange-400 transition">
            Add to cart
          </button>
          <div className="flex space-x-6 text-gray-300">
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Ulashish</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Taqqoslash</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Yoqtirish</span>
            </div>
          </div>
        </div>
      </div>



       {/* 3- karta                                             karta */}


      {/* Karta */}
      <div className=" relative w-[285px] h-[420px] bg-gray-500 shadow-lg rounded-lg overflow-hidden group">
        {/* Oddiy holat */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 transition-all duration-300 group-hover:opacity-100">
          <img
            src="public/Images.png"
            alt="Syltherine"
            className="max-w-max max-h-max mb-[px]"
          />
          <div className="ml-[-15px] mb-[30px]">
          <h3 className="text-lg font-semibold text-[24px]">Lolito</h3>
          <p className="text-gray-500 text-[16px] ">Luxury big sofa</p>
          <p className="mt-2">
            <span className="text-black font-bold text-[20px]">Rp 7.000.000</span>{" "}
            <span className="text-gray-400 line-through text-[16px]">Rp 14.000.000</span>
          </p>
          </div>
        </div>

        {/* Hover holati */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-white text-black px-4 py-2 font-semibold mb-4 hover:bg-white hover:text-orange-400 transition">
            Add to cart
          </button>
          <div className="flex space-x-6 text-gray-300">
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Ulashish</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Taqqoslash</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Yoqtirish</span>
            </div>
          </div>
        </div>
      </div>



       {/* 4- karta                                             karta */}


      {/* Karta */}
      <div className=" relative w-[285px] h-[420px] bg-gray-500 shadow-lg rounded-lg overflow-hidden group">
        {/* Oddiy holat */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 transition-all duration-300 group-hover:opacity-100">
          <img
            src="public/Images (1).png"
            alt="Syltherine"
            className="max-w-max max-h-max mb-[px]"
          />
          <div className="ml-[-35px] mb-[30px]">
          <h3 className="text-lg font-semibold text-[24px]">Respira</h3>
          <p className="text-gray-500 text-[16px] ">Outdoor bar table and stool</p>
          <p className="mt-2">
            <span className="text-black font-bold text-[20px]">Rp  500.000</span>{" "}
          </p>
          </div>
        </div>

        {/* Hover holati */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-white text-black px-4 py-2 font-semibold mb-4 hover:bg-white hover:text-orange-400 transition">
            Add to cart
          </button>
          <div className="flex space-x-6 text-gray-300">
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Ulashish</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Taqqoslash</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Yoqtirish</span>
            </div>
          </div>
        </div>
      </div>
    </div>






    {/* ALL cards div                2222222 */}

    <div className="flex bg-white ml-[125px] gap-[32px] mt-[32px]">


       {/* 1- karta                                             karta */}


      {/* Karta */}
      <div className=" relative w-[285px] h-[420px] bg-gray-500 shadow-lg rounded-lg overflow-hidden group">
        {/* Oddiy holat */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 transition-all duration-300 group-hover:opacity-100">
          <img
            src="public/Images (2).png"
            alt="Syltherine"
            className="max-w-max max-h-max mb-[px]"
          />
          <div className="ml-[-105px] mb-[30px]">
          <h3 className="text-lg font-semibold text-[24px]">Grifo</h3>
          <p className="text-gray-500 text-[16px] ">Night lamp</p>
          <p className="mt-2">
            <span className="text-black font-bold text-[20px]">Rp 1.500.000</span>{" "}
          
          </p>
          </div>
        </div>

        {/* Hover holati */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-white text-black px-4 py-2 font-semibold mb-4 hover:bg-white hover:text-orange-400 transition">
            Add to cart
          </button>
          <div className="flex space-x-6 text-gray-300">
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Ulashish</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Taqqoslash</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Yoqtirish</span>
            </div>
          </div>
        </div>
      </div>



       {/* 2- karta                                             karta */}


      {/* Karta */}
      <div className=" relative w-[285px] h-[420px] bg-gray-500 shadow-lg rounded-lg overflow-hidden group">
        {/* Oddiy holat */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 transition-all duration-300 group-hover:opacity-100">
          <img
            src="public/Images (3).png"
            alt="Syltherine"
            className="max-w-max max-h-max mb-[px]"
          />
          <div className="ml-[-120px] mb-[30px]">
          <h3 className="text-lg font-semibold text-[24px]">Muggo</h3>
          <p className="text-gray-500 text-[16px] ">Small mug</p>
          <p className="mt-2">
            <span className="text-black font-bold text-[20px]">Rp 150.000</span>{" "}
           
          </p>
          </div>
        </div>

        {/* Hover holati */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-white text-black px-4 py-2 font-semibold mb-4 hover:bg-white hover:text-orange-400 transition">
            Add to cart
          </button>
          <div className="flex space-x-6 text-gray-300">
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Ulashish</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Taqqoslash</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Yoqtirish</span>
            </div>
          </div>
        </div>
      </div>



       {/* 3- karta                                             karta */}


      {/* Karta */}
      <div className=" relative w-[285px] h-[420px] bg-gray-500 shadow-lg rounded-lg overflow-hidden group">
        {/* Oddiy holat */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 transition-all duration-300 group-hover:opacity-100">
          <img
            src="public/image 7.png"
            alt="Syltherine"
            className="max-w-max max-h-max mb-[px]"
          />
          <div className="ml-[-15px] mb-[30px]">
          <h3 className="text-lg font-semibold text-[24px]">Pingky</h3>
          <p className="text-gray-500 text-[16px] ">Cute bed set</p>
          <p className="mt-2">
            <span className="text-black font-bold text-[20px]">Rp 7.000.000</span>{" "}
            <span className="text-gray-400 line-through text-[16px]">Rp 14.000.000</span>
          </p>
          </div>
        </div>

        {/* Hover holati */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-white text-black px-4 py-2 font-semibold mb-4 hover:bg-white hover:text-orange-400 transition">
            Add to cart
          </button>
          <div className="flex space-x-6 text-gray-300">
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Ulashish</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Taqqoslash</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Yoqtirish</span>
            </div>
          </div>
        </div>
      </div>



       {/* 4- karta                                             karta */}


      {/* Karta */}
      <div className=" relative w-[285px] h-[420px] bg-gray-500 shadow-lg rounded-lg overflow-hidden group">
        {/* Oddiy holat */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 transition-all duration-300 group-hover:opacity-100">
          <img
            src="public/image 8.png"
            alt="Syltherine"
            className="max-w-max max-h-max mb-[px]"
          />
          <div className="ml-[-80px] mb-[30px]">
          <h3 className="text-lg font-semibold text-[24px]">Potty</h3>
          <p className="text-gray-500 text-[16px] ">Minimalist flower pot</p>
          <p className="mt-2">
            <span className="text-black font-bold text-[20px]">Rp 500.000</span>{" "}
         
          </p>
          </div>
        </div>

        {/* Hover holati */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-white text-black px-4 py-2 font-semibold mb-4 hover:bg-white hover:text-orange-400 transition">
            Add to cart
          </button>
          <div className="flex space-x-6 text-gray-300">
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Ulashish</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Taqqoslash</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <CiShare1 className="h-6 w-6" />
              <span className="text-sm mt-1">Yoqtirish</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    </>
  )
}

export default Jasur
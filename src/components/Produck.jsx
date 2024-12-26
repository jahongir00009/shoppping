
import { Link } from "react-router-dom";
import { FaUser, FaSearch, FaHeart, FaShoppingCart, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    setCount(count + 1);
  };
  

  return (
    <div className="flex items-center justify-between w-32 h-[50px] mt-[10px] border border-black rounded-md p-2">
      <button
        onClick={decrement}
        className="text-lg font-bold"
      >
        -
      </button>
      <span className="text-lg font-semibold">{count}</span>
      <button
        onClick={increment}
        className="text-lg font-bold"
      >
        +
      </button>
    </div>
  );
};

function Product() {
  const [mainImage, setMainImage] = useState("/group5.png"); // Katta rasm uchun yangi boshlang'ich qiymat
  const [thumbnails, setThumbnails] = useState([
    "/group1.png",
    "/group2.png",
    "/group3.png",
    "/group4.png",
  ]);

  const [activeSize, setActiveSize] = useState("L");
  const sizes = [
    { label: "L", width: 123, height: 63 },
    { label: "XL", width: 150, height: 75 },
    { label: "XS", width: 100, height: 50 },
  ];

  const [activeColor, setActiveColor] = useState("Purple");
  const colors = ["Purple", "Black", "Gold"];

  const handleImageClick = (clickedImage, index) => {
    const updatedThumbnails = [...thumbnails];
    updatedThumbnails[index] = mainImage;
    setMainImage(clickedImage);
    setThumbnails(updatedThumbnails);
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex items-center justify-between border-b-2 border-gray-200 p-4">
        <div className="flex items-center">
          <img className="ml-[54px]" src="/shop.png" alt="Logo" />
          <h1 className="text-[34px] ml-2 font-bold text-black">Furniro</h1>
        </div>

        <nav className="flex space-x-8">
          <Link to="/" className="text-[18px] text-black hover:underline">
            Home
          </Link>
          <Link to="/shop" className="text-[18px] text-black hover:underline">
            Shop
          </Link>
          <Link to="/about" className="text-[18px] text-black hover:underline">
            About
          </Link>
          <Link to="/contact" className="text-[18px] text-black hover:underline">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-6 mr-[54px]">
          <FaUser className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
          <FaSearch className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
          <FaHeart className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
          <FaShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-[#fdf5ee] py-4 px-8 h-[80px]">
        <div className="flex items-center text-gray-600 space-x-2">
          <Link to="/" className="hover:underline ml-[99px] text-[18px]">
            Home
          </Link>
          <span className="text-black text-[25px] mt-[-1px] ml-2">&gt;</span>
          <Link to="/shop" className="hover:underline text-[18px]">
            Shop
          </Link>
          <span className="text-black text-[25px] mt-[-1px] ml-2">&gt;</span>
          <span className="text-gray-400 text-[30px] mt-[-2]">|</span>
          <span className="text-black text-[18px] left-7 mt-1">Asgaard sofa</span>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex mt-8">
        <div className="flex flex-col space-y-4 ml-[115px]">
          {thumbnails.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-[100px] h-[80px] cursor-pointer hover:border-blue-500 object-contain"
              onClick={() => handleImageClick(img, index)}
            />
          ))}
        </div>

        <div className="ml-[-10px]">
          <img
            src={mainImage}
            alt="Main View"
            className="w-[500px] h-[500px]  border-gray-300 object-contain"
          />
        </div>
      </div>

      <div className="">
        <h3 className="text-[37px] ml-[720px] mt-[-450px]">Asgaard sofa</h3>
        <h3 className="text-[24px] ml-[722px] text-[#9F9F9F]">Rs. 250,000.00</h3>
        <img
          src="/image1.png"
          alt=""
          className="w-[124px] h-[20px] ml-[722px] mt-4"
        />
        <h3 className="text-[30px] ml-[856px] mt-[-36px] text-[#9F9F9F]">| </h3>
        <h3 className="text-[17px] ml-[895px] text-[#9F9F9F] mt-[-30px]">
          5 Customer Review
        </h3>
        <p className="text-[16px] text-[#000000] ml-[724px] mt-3">
          Setting the bar as one of the loudest speakers in its class, the
          <br /> Kilburn is a compact, stout-hearted hero with a well-balanced
          <br /> audio which boasts a clear midrange and extended highs for a
          <br /> sound.
        </p>

        {/* Size Selector */}
        <div className="mt-8 ml-[727px]">
          <h4 className="text-[18px] mb-2">Size:</h4>
          <div className="flex space-x-4">
            {sizes.map((size) => (
              <button
                key={size.label}
                onClick={() => setActiveSize(size.label)}
                className={`rounded border px-4 py-2 transition-all text-[16px] 
                  ${
                    activeSize === size.label
                      ? 'bg-yellow-600 text-white'
                      : 'bg-gray-200 text-black'
                  }`}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>

      
        <div className="mt-5 ml-[727px]">
          <h4 className="text-[18px] mb-2">Color</h4>
          <div className="flex space-x-4">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setActiveColor(color)}
                className={`rounded-full w-8 h-8 border-2 transition-all 
                  ${
                    activeColor === color
                      ? 'border-black'
                      : 'border-gray-300'
                  }`}
                style={{ backgroundColor: color.toLowerCase() }}
              ></button>
            ))}
          </div>
        </div>

        
        <div className="mt-8  ml-[727px]">
          
          <Counter />
        </div>

        
        <div className="mt-[-49px] ml-[870px] flex space-x-4">
        <button className="px-6 py-3 text-black border border-black rounded text-[16px]">
            Add To Cart
          </button>
          <button className="px-6 py-3 border border-black text-black rounded text-[16px]">
            + Compare
          </button>
        </div>
      </div>
      <hr className="border-t border-[#9F9F9F] my-4 w-[480px] ml-[730px] mt-[50px]" />
      <div className="ml-[727px] mt-[20px] text-[#9F9F9F]">
  <h3 className="text-[14px]">
    SKU <span className="ml-11">: <span className="ml-2 text-black">SS001</span></span>
  </h3>
  <h3 className="text-[14px] mt-2">
    CATEGORY <span className="ml-[2px]">: <span className="ml-2 text-black">SOFAS</span></span>
  </h3>
  <h3 className="text-[14px] mt-2">
    TAGS <span className="ml-9">: <span className="ml-2 text-black">Sofa, Chair, Home, Shop</span></span>
  </h3>
  <div className="flex items-center space-x-4 mt-2">
    <h3 className="text-[14px]">SHARE <span className="ml-7">:</span></h3>
    <FaFacebook className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-700" />
    <FaTwitter className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-400" />
    <FaInstagram className="w-6 h-6 text-gray-600 cursor-pointer hover:text-pink-500" />
    <FaLinkedin className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />
  </div>
</div>
<hr className="border-t border-[#9F9F9F] my-4 w-[100%]  mt-[100px]" />
<div>
   <h3 className="text-[#000000] text-[20px] flex justify-center mt-14">Description <span className="text-[#9F9F9F] ml-9">Additional Information</span> <span className="text-[#9F9F9F] ml-7">Reviews [5]</span></h3>
   <p className="text-[#9F9F9F] text-[18px] flex justify-center mt-[70px] ">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and <br /> sound of Marshall, unplugs the chords, and takes the show on the road.</p>
   <p className="text-[#9F9F9F] text-[18px] flex justify-center ml-9 mt-[35px]">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest <br /> speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange <br /> and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls <br /> to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
   <div className=" flex justify-center gap-4 mt-[40px]">
  <img src="/image.png" alt="" className="w-[520px] h-[348px]" />
  <img src="/image.png" alt="" className="w-[520px] h-[348px]" />
</div>




</div>
     



    </>
  );
}

export default Product;

import React from 'react'
import { FaUser, FaCalendarAlt, FaTag } from 'react-icons/fa';

function Blog() {
    const blogPosts = [
        {
          title: "Going all-in with millennial design",
          date: "03 Aug 2022",
          image: "/Blog/Rectangle 69.png", 
        },
        {
          title: "Exploring new ways of decorating",
          date: "03 Aug 2022",
          image: "/Blog/Rectangle 69 (1).png", 
        },
        {
          title: "Handmade pieces that took time to make",
          date: "03 Aug 2022",
          image: "/Blog/Rectangle 69 (2).png", 
        },
        {
          title: "Modern home in Milan",
          date: "03 Aug 2022",
          image: "/Blog/Rectangle 69 (3).png", 
        },
        {
          title: "Colorful office redesign",
          date: "03 Aug 2022",
          image: "/Blog/Rectangle 69 (4).png", 
        },
      ];
      
  return (
<>
<div className='grid gap-20 justify-center'>
  <div>
   <div className='grid  justify-center absolute  mt-20 ml-[690px]'> <img className='w-20 h-20 ml-2 ' src="/public/Blog/Rectangl.png" alt="" />
   <h1 className="text-[33px] grid  justify-center font-[600] ">Blog</h1>
   <p >Home⪢Blog</p></div>
    <img src="/public/Blog/Rectangle.png" alt="" className='bg-white w-[1500px] justify-center border rounded-lg shadow '/>
  </div>
  <div className='flex  gap-44 justify-center'>
    <div className='grid gap-6'>
    <h1 className='text-[20px]  font-[600]'>Read more</h1>
   <div className='grid gap-2'>  <img src="/public/Blog/Rectangle 68.png" alt="" className='bg-white w-[817px] justify-center border rounded-lg shadow'/> 
   <div className="flex items-center space-x-6 text-gray-500">
      {/* Admin */}
      <div className="flex items-center space-x-2">
        <FaUser />
        <span>Admin</span>
      </div>

      {/* Date */}
      <div className="flex items-center space-x-2">
        <FaCalendarAlt />
        <span>14 Oct 2022</span>
      </div>

      {/* Tag */}
      <div className="flex items-center space-x-2">
        <FaTag />
        <span>Wood</span>
      </div>
    </div>
   </div>
   <h1 className='text-[22px]  font-[600]' >Exploring new ways of decorating</h1>
   <p className='w-[800px] text-gray-400'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
    </div>
    <div className=''>
    <div
            className="p-4 mx-auto border rounded-md shadow-sm"
            style={{ width: "393px", height: "500px" }}
        >
            {/* Search bar */}
            <div className="flex items-center border rounded-md px-3 py-2 mb-6">
                <input
                    type="text"
                    placeholder="Search"
                    className="flex-grow outline-none"
                />
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35m2.35-7.65a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>

            {/* Categories */}
            <div>
                <h2 className="text-lg font-semibold mb-4">Categories</h2>
                <ul className="space-y-6 grid gap-6">
    <li className="flex justify-between gap-10">
        <span>Crafts</span>
        <span className="text-gray-500">2</span>
    </li>
    <li className="flex justify-between">
        <span>Design</span>
        <span className="text-gray-500">8</span>
    </li>
    <li className="flex justify-between">
        <span>Handmade</span>
        <span className="text-gray-500">7</span>
    </li>
    <li className="flex justify-between">
        <span>Interior</span>
        <span className="text-gray-500">1</span>
    </li>
    <li className="flex justify-between">
        <span>Wood</span>
        <span className="text-gray-500">6</span>
    </li>
</ul>

            </div>
        </div>
      
    </div>
  </div>
  <div className='flex gap-44 justify-center'>
    <div>
    <div className='grid gap-6'>
    <h2 className='text-[20px]  font-[600]'>Read more</h2>
   <div className='grid gap-2'> <img src="/public/Blog/Rectangle 6.png" alt="" className='bg-white w-[817px] justify-center border rounded-lg shadow'/> 
   <div className="flex items-center space-x-6 text-gray-500">
      {/* Admin */}
      <div className="flex items-center space-x-2">
        <FaUser />
        <span>Admin</span>
      </div>

      {/* Date */}
      <div className="flex items-center space-x-2">
        <FaCalendarAlt />
        <span>14 Oct 2022</span>
      </div>

      {/* Tag */}
      <div className="flex items-center space-x-2">
        <FaTag />
        <span>Wood</span>
      </div>
    </div>
   </div>
   <h1 className='text-[22px]  font-[600]' >Exploring new ways of decorating</h1>
   <p className='w-[800px]  text-gray-400'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
    </div>
    </div>
  <div className="">
      <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
      <div className="space-y-4">
        {blogPosts.map((post, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img
              src={post.image}
              alt={post.title}
              className="w-16 h-16 rounded-md object-cover"
            />
            <div>
              <h3 className="text-lg font-medium">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
 <div className='ml-10'>
 <div className='grid gap-8'>
 <h2 className='text-[20px]  font-[600]'>Read more</h2>
   <div className='grid gap-2'> <img src="/public/Blog/Rectangle 68 (1).png" alt="" className='bg-white w-[817px] justify-center border rounded-lg shadow'/> 
   <div className="flex items-center space-x-6 text-gray-500">
      {/* Admin */}
      <div className="flex items-center space-x-2">
        <FaUser />
        <span>Admin</span>
      </div>

      {/* Date */}
      <div className="flex items-center space-x-2">
        <FaCalendarAlt />
        <span>14 Oct 2022</span>
      </div>

      {/* Tag */}
      <div className="flex items-center space-x-2">
        <FaTag />
        <span>Wood</span>
      </div>
    </div>
   </div>
   <h1 className='text-[22px]  font-[600]' >Exploring new ways of decorating</h1>
   <p className='w-[800px]  text-gray-400'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
    </div>
   
 </div>
</div>
</>
  )
}

export default Blog
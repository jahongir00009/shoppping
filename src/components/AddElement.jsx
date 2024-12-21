import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { BsFillGridFill } from 'react-icons/bs';
import { TbLayoutList } from 'react-icons/tb';
import { CiShare2 } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FcLike } from "react-icons/fc";

const products = [
    {
        id: 1,
        name: 'Syltherine',
        description: 'Stylish cafe chair',
        price: 'Rp 2.500.000',
        oldPrice: 'Rp 3.500.000',
        image: './a1.png'
    },
    {
        id: 2,
        name: 'Leviosa',
        description: 'Stylish cafe chair',
        price: 'Rp 2.500.000',
        image: './a2.png'
    },
    {
        id: 3,
        name: 'Lolito',
        description: 'Luxury big sofa',
        price: 'Rp 7.000.000',
        oldPrice: 'Rp 14.000.000',
        image: './a3.png'
    },
    {
        id: 4,
        name: 'Respira',
        description: 'Outdoor bar table and stool',
        price: 'Rp 500.000',
        image: './a4.png'
    }
];

function AddElement() {
    return (
        <>
            <section className='px-[98px] py-7 flex items-center bg-[#F9F1E7]'>
                <div className="flex gap-72">
                    <div className="flex items-center gap-5">
                        <a href="#" className="flex gap-2 items-center text-[20px]">
                            <HiAdjustmentsHorizontal />
                            Filter
                        </a>
                        <a href="#" className="text-[20px]">
                            <BsFillGridFill />
                        </a>
                        <a href="#" className="text-[20px]">
                            <TbLayoutList />
                        </a>
                        <div className="h-8 border border-gray-600"></div>
                        <a href="#" className="text-[20px]">Showing 1–16 of 32 results</a>
                    </div>
                    <div className="flex items-center gap-5 text-[20px]">
                        <p className="font-semibold">Show</p>
                        <p className="bg-white text-gray-500 px-4 py-3">16</p>
                        <p className="font-semibold">Short by</p>
                        <p className="px-8 py-3 text-gray-500 bg-white">Default</p>
                    </div>
                </div>
            </section>
            <section className="px-[80px] py-7 grid grid-cols-4 gap-4">
                {products.map(product => (
                    <div key={product.id} className="relative group bg-gray-300 w-[285px] h-[446px] overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-[285px] object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
                            <button className="bg-white text-[#B88E2F] font-semibold px-4 py-2 rounded">Add to cart</button>
                            <div className="flex gap-4 mt-4 text-white">
                                <span className="cursor-pointer flex items-center gap-1"><CiShare2 /> Share</span>
                                <span className="cursor-pointer flex items-center gap-1"><MdOutlineCompareArrows /> Compare</span>
                                <span className="cursor-pointer flex items-center gap-1"><FcLike /> Like</span>
                            </div>
                        </div>
                        <div className="px-3 py-4">
                            <p className="font-semibold text-2xl">{product.name}</p>
                            <p className="text-[#898989] mt-1 mb-1">{product.description}</p>
                            <div className="flex items-center gap-5">
                                <p className="text-xl">{product.price}</p>
                                <p className="line-through text-[#898989]">{product.oldPrice}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {products.map(product => (
                    <div key={product.id} className="relative group bg-gray-300 w-[285px] h-[446px] overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-[285px] object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
                            <button className="bg-white text-[#B88E2F] font-semibold px-4 py-2 rounded">Add to cart</button>
                            <div className="flex gap-4 mt-4 text-white">
                                <span className="cursor-pointer flex items-center gap-1"><CiShare2 /> Share</span>
                                <span className="cursor-pointer flex items-center gap-1"><MdOutlineCompareArrows /> Compare</span>
                                <span className="cursor-pointer flex items-center gap-1"><FcLike /> Like</span>
                            </div>
                        </div>
                        <div className="px-3 py-4">
                            <p className="font-semibold text-2xl">{product.name}</p>
                            <p className="text-[#898989] mt-1 mb-1">{product.description}</p>
                            <div className="flex items-center gap-5">
                                <p className="text-xl">{product.price}</p>
                                <p className="line-through text-[#898989]">{product.oldPrice}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {products.map(product => (
                    <div key={product.id} className="relative group bg-gray-300 w-[285px] h-[446px] overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-[285px] object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
                            <button className="bg-white text-[#B88E2F] font-semibold px-4 py-2 rounded">Add to cart</button>
                            <div className="flex gap-4 mt-4 text-white">
                                <span className="cursor-pointer flex items-center gap-1"><CiShare2 /> Share</span>
                                <span className="cursor-pointer flex items-center gap-1"><MdOutlineCompareArrows /> Compare</span>
                                <span className="cursor-pointer flex items-center gap-1"><FcLike /> Like</span>
                            </div>
                        </div>
                        <div className="px-3 py-4">
                            <p className="font-semibold text-2xl">{product.name}</p>
                            <p className="text-[#898989] mt-1 mb-1">{product.description}</p>
                            <div className="flex items-center gap-5">
                                <p className="text-xl">{product.price}</p>
                                <p className="line-through text-[#898989]">{product.oldPrice}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {products.map(product => (
                    <div key={product.id} className="relative group bg-gray-300 w-[285px] h-[446px] overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-[285px] object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
                            <button className="bg-white text-[#B88E2F] font-semibold px-4 py-2 rounded">Add to cart</button>
                            <div className="flex gap-4 mt-4 text-white">
                                <span className="cursor-pointer flex items-center gap-1"><CiShare2 /> Share</span>
                                <span className="cursor-pointer flex items-center gap-1"><MdOutlineCompareArrows /> Compare</span>
                                <span className="cursor-pointer flex items-center gap-1"><FcLike /> Like</span>
                            </div>
                        </div>
                        <div className="px-3 py-4">
                            <p className="font-semibold text-2xl">{product.name}</p>
                            <p className="text-[#898989] mt-1 mb-1">{product.description}</p>
                            <div className="flex items-center gap-5">
                                <p className="text-xl">{product.price}</p>
                                <p className="line-through text-[#898989]">{product.oldPrice}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </section>

        </>
    );
}

export default AddElement;
import React, { useState } from 'react';
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { BsFillGridFill } from 'react-icons/bs';
import { TbLayoutList } from 'react-icons/tb';
import { CiShare2 } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import Filter from './ui/Filter';
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
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(4);

    // Calculate the current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Filter/>
            <br/>
            <section className="px-[80px] py-7 grid grid-cols-4 gap-4">
                {currentProducts.map(product => (
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
                {currentProducts.map(product => (
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
                {currentProducts.map(product => (
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
                {currentProducts.map(product => (
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
            <div className="flex justify-center mt-4">
                <ul className="flex list-none">
                    {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
                        <li key={index} className="mx-1">
                            {index < 4 && (
                                <button
                                    onClick={() => paginate(index + 1)}
                                    className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                >
                                    {index + 1}
                                </button>
                            )}
                        </li>
                    ))}
                    {currentPage < Math.ceil(products.length / productsPerPage) && (
                        <li className="mx-1">
                            <button
                                onClick={() => paginate(currentPage + 1)}
                                className="px-3 py-1 rounded bg-gray-200 text-gray-700"
                            >
                                Next
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
}

export default AddElement;
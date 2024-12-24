import React from 'react'
import { BsFillGridFill } from 'react-icons/bs'
import { HiAdjustmentsHorizontal } from 'react-icons/hi2'
import { TbLayoutList } from 'react-icons/tb'

function Filter() {
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
        </>
    )
}

export default Filter
import React from 'react'
import { CgProfile } from "react-icons/cg";
import { RiBellFill } from "react-icons/ri";

const Header = () => {
    return (
        <div className="flex justify-between  items-center">
            <div className="text-lg font-bold text-[#000C66]">Contests</div>
            <div className="space-x-2">
                <div className="bg-purple-200 align-middle border border-purple-800 font-bold py-1 px-2 inline-flex rounded-full">
                <span className="mr-3 text-sm text-purple-800">Development</span>
                <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#000C66]"></div>
                </label>
                <span className="ml-3 text-sm text-[#000C66]">Production</span>
                </div>
                <div className="bg-purple-200 text-[#000C66] align-middle border border-purple-800 font-bold py-2 px-2 inline-flex rounded-full">
                    <RiBellFill size={'20px'}/>
                </div>
                <div className=" border align-middle border-purple-800 font-bold py-1 text-[#000C66] px-2 inline-flex rounded-full">
                    <CgProfile size={'23px'}/>
                    <span className="mx-2">ROG-IO</span>
                </div>
            </div>
        </div>
    )
}

export default Header
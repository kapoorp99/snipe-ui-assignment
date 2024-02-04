import React from 'react'
import SidebarItem from './SidebarItem'
import { sidebarLinks } from '@/components/common/utils/sidebarLinks'
import { FiSettings } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { TiZoomOutline } from "react-icons/ti";

const Sidebar = () => {
  return (
    <div className="flex bg-gray-800 pl-4 flex-col h-screen">
      <header className=" text-[#40e0d0] p-4 flex gap-4 mt-8">
        <TiZoomOutline size={'24px'}/>
        <span className="">snipe<span className="text-[#B1D4E0]">.ai</span></span>
      </header>
      <nav className="flex-grow">
        <ul className="p-4 text-gray-400">
          {sidebarLinks.map((curr)=>{
            return (
            <li className="my-8 flex gap-4 hover:text-gray-200">
            <icon >
                 {curr.icon}
            </icon>
            <a href="#" className="">{curr.name}</a>
           </li>
            )
          })}

        </ul>
      </nav>
      <footer className="bg-gray-800 text-white p-4">
        <SidebarItem icon={<FiSettings size={'20px'}/>}
          text={"Settings"}
        />
        <SidebarItem icon = {<FaRegQuestionCircle size={'20px'}/>}
          text={"Support"}
        />
      </footer>
    </div>
  )
}

export default Sidebar
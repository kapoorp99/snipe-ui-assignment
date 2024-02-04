import React from 'react'
import TableItem from './Tabs/TabItem'
import TableContainer from './TableUi/TableContainer'
import { AiOutlineArrowRight, AiFillFunnelPlot, AiOutlineSearch } from 'react-icons/ai'
const ContentSection = () => {
  return (
    <div className='mt-6'>
      <TableItem />
      <h2 className='mb-2'>List of Contests</h2>
      <div className="bg-[#eef1f8] p-4 rounded overflow-x-hidden">

        <div className="mb-4 flex">
          <div className="flex align-middle text-gray-400 bg-purple-100 p-1 h-min self-center border border-purple-400 rounded">
            <AiOutlineSearch size={'20px'} />
            <input type="search" name="" id=""
              placeholder='- search in contest -' className="search__input px-1 bg-transparent ml-2 text-black" />
          </div>
          <div className='flex rounded-full bg-blue-200 p-1 self-center h-min pl-2 ml-2'>
            <select className="rounded-full bg-transparent mr-3" name="">
              <option value="">Yearly</option>
              <option value="">Quarterly</option>
              <option value="">Monthly</option>
            </select>
            <div className="rounded-full flex p-1 align-middle gap-4 bg-white text-center">
              20 Jan 2022 <AiOutlineArrowRight size={'20px'} /> 20 Jul 2023
            </div>
          </div>
          <div className="rounded-full ml-2 h-min self-center bg-blue-200 p-2">
            <AiFillFunnelPlot size={'18px'} />
          </div>
          <button className="absolute right-14 self-center font-sans font-semibold tracking-wide hover:bg-blue-700 text-white bg-blue-800 rounded-lg p-2 ">
            Add a new contest +
          </button>
        </div>
        <TableContainer />
      </div>
    </div>
  )
}

export default ContentSection
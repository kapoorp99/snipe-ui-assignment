import React from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

const TableFooter = () => {
  return (
    <div className='flex gap-6 justify-end mt-4'>
      <div className='flex rounded-full bg-blue-200 p-1 pl-2'>
        <span>
          Rows per page:
        </span>
        <select className='rounded-full ml-2'>
          <option>10</option>
          <option>20</option>
          <option>30</option>
        </select>
      </div>
      <div className='mt-1 flex justify-center align-middle gap-4'>
        <span>
          1-10 of 100
        </span>
        <div className="">
        <button>
          <FiArrowLeft />
        </button>
        <button>
          <FiArrowRight />
        </button>
        </div>
      </div>
    </div>
  )
}

export default TableFooter
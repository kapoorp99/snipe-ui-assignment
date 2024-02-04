import React from 'react'

const TableItem = () => {
    return (
        <div className='mb-4'>
            <div className="flex text-gray-400 font-bold border-b-2 border-purple-400">
                <div className=" py-2 mr-8 border-b-2 border-transparent hover:text-[#000C66] hover:border-[#050A30] cursor-pointer">View Analytics</div>
                <div className=" py-2 mr-8 border-b-2 border-transparent text-[#000C66] border-[#050A30] cursor-pointer ">Manage Contests</div>
                <div className=" py-2 mr-8 border-b-2 border-transparent hover:text-[#000C66] hover:border-[#050A30] cursor-pointer">Award Bonuses</div>
            </div>
        </div>
    )
}

export default TableItem
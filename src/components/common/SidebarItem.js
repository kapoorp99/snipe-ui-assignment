import React from 'react'
import { AiFillQuestionCircle } from 'react-icons/ai'

const SidebarItem = ({ icon, text }) => {
    return (
        <div className='hover:text-gray-200 hover:cursor-pointer flex gap-4 align-middle mb-2 text-gray-400'>
            <icon>
                {icon ? icon : <AiFillQuestionCircle size={'20px'}/>}
            </icon>
            <span>
                {text}
            </span>
        </div>
    )
}

export default SidebarItem
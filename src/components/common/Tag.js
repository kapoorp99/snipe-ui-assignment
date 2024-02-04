import React from 'react'

const Tag = ({ text }) => {
    return (
        <div className='rounded-xl
        bg-gray-200
        p-2
        flex
        items-center
        gap-2
        text-black
        font-semibold
        text-[10px]
        '>
            <span className='dot'></span>
            <span>
                {text || "Target 1"}
            </span>
        </div>
    )
}

export default Tag
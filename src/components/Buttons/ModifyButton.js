import React from 'react'
import { FiEdit } from 'react-icons/fi'

const ModifyButton = () => {
  return (
    <button className='flex items-center justify-center bg-green-500 text-white font-normal text-sm p-2 px-4 rounded gap-2'>
      <span>
        Modify
      </span>
      <FiEdit />
    </button>
  )
}

export default ModifyButton
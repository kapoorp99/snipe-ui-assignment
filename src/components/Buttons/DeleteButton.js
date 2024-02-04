import React from 'react'
import { FiDelete } from 'react-icons/fi'

const DeleteButton = ({ id, handleDelete }) => {
    return (
        <button
            onClick={() => {
                handleDelete(id)
            }}
            className='flex items-center justify-center bg-red-500 text-white font-normal text-sm p-2 px-4 rounded gap-2'>
            <span>
                Delete
            </span>
            <FiDelete />
        </button>
    )
}

export default DeleteButton
import React from 'react'
import { FiDownload } from 'react-icons/fi'

const DownloadButton = () => {
    return (
        <button className='download__btn w-max'>
            <span className='download__btn--text'>
                -DOWNLOAD CSV-
            </span>
            <span className='download__btn--icon'>
                <FiDownload />
            </span>
        </button>
    )
}

export default DownloadButton
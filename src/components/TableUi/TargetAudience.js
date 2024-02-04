import React from 'react'
import Tag from '../common/Tag'

const TargetAudience = () => {
    return (
        <div className='grid grid-cols-3 gap-2'>
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
                return (
                    <Tag className="w-max rounded-full"
                        text={`Target ${item}`}
                        key={index}
                    />
                )
            })}
        </div>
    )
}

export default TargetAudience
import React, { useState } from 'react'

const ToggleButton = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div>
            <label htmlFor="toggle" className="flex items-center cursor-pointer">
                <div className="relative">
                    <input
                        type="checkbox"
                        id="toggle"
                        className="sr-only"
                        checked={isChecked}
                        onChange={handleToggle}
                    />
                    <div className="w-10 h-4 bg-gray-300 rounded-full shadow-inner"></div>
                    <div className={`absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0 ${isChecked ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </div>
                <div className="ml-3 text-gray-700 font-medium">Toggle Button</div>
            </label>
        </div>
    )
}

export default ToggleButton
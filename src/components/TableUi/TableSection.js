"use client"
import React, { useEffect, useState } from 'react'
import ModifyButton from '../Buttons/ModifyButton'
import DeleteButton from '../Buttons/DeleteButton'
import DownloadButton from '../Buttons/DownloadButton'
import TargetAudience from './TargetAudience'

const TableSection = () => {
    const HEADER_DATA = [
        'Contest Name',
        'Active Status',
        'Validity',
        'Challenges',
        'Target Audience',
        'Options'
    ]
    const DUMMY_DATA = [
        {
            id: 1,
            contestName: 'Rule with a simple name',
            activeStatus: 'Active',
            validity: '2 days',
            challenges: '2',
            targetAudience: 'Beginner',
            options: 'Edit'
        },
        {
            id: 2,
            contestName: 'Codechef',
            activeStatus: 'Inactive',
            validity: '1 day',
            challenges: '3',
            targetAudience: 'Intermediate',
            options: 'Edit'
        },
        {
            id: 3,
            contestName: 'HackerRank',
            activeStatus: 'Active',
            validity: '3 days',
            challenges: '1',
            targetAudience: 'Advanced',
            options: 'Edit'
        }
    ]
    const [mainData, setMainData] = useState(DUMMY_DATA)
    const handleDelete = (id) => {
        try {
            // remove the data from the mainData
            const updatedData = mainData.filter((data) => data.id !== id)
            setMainData(updatedData)
        }
        catch (err) {
            console.error(err)
        }
    }
    const handleToggleActiveStatus = (e,id) => {
        try {
            // remove the data from the mainData
            const updatedData = mainData.map((data) => {
                if(data.id === id){
                    data.activeStatus = e.target.value === 'Active' ? 'Inactive' : 'Active'
                }
                return data
            })
            console.log(updatedData);
            setMainData(updatedData)
        }
        catch (err) {
            console.error(err)
        }
    }

    return (
        <table className='w-max border-separate border-spacing-x-4 border-spacing-y-4'>
            <thead>
                <tr>
                    <label className="pl-0.5 cursor-pointer inline">
                        <input type="checkbox" id="id" name="name" />
                    </label>
                    {HEADER_DATA.map((header, index) => {
                        return <th key={index}>{header}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {mainData.map((data, index) => {
                    return (
                        <tr key={index} className='text-[#000C66] font-bold '>
                            <td className="">
                                <label className="cursor-pointer">
                                    <input type="checkbox" id="id" name="name" />
                                </label>
                            </td>
                            <td>{data.contestName}</td>
                            <td>
                                <div className=" align-middle border font-bold py-1 px-2 inline-flex rounded-full">
                                    <span className={`mr-3 text-sm ${data.activeStatus === 'Active' ? 'text-[#000C66]' : 'text-purple-800'}`}>Active</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            // value={`${data.activeStatus}`}
                                            className="sr-only peer"
                                            onChange={(e) => handleToggleActiveStatus(e,data.id)}
                                            defaultChecked={data.activeStatus === 'Inactive'}
                                        //   defaultChecked={data.activeStatus === 'Inactive'} 
                                        //   onClick={(e) => {
                                        //     console.log(e.target.value);
                                        // }}
                                        />
                                        <div className="w-11 h-6 bg-[#000C66] rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-[#000C66] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#000C66]"></div>
                                    </label>
                                    <span className={`ml-3 text-sm ${data.activeStatus === 'Inactive' ? 'text-[#000C66]' : 'text-purple-800'}`}>Inactive</span>
                                </div>
                            </td>
                            <td>{data.validity}</td>
                            <td className=''>
                                <TargetAudience />
                            </td>
                            <td>
                                <DownloadButton />
                            </td>
                            <td >
                                <div className="flex gap-4">
                                    <ModifyButton />
                                    <DeleteButton
                                        id={data.id}
                                        handleDelete={handleDelete}
                                    />
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default TableSection
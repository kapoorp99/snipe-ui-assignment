import React from 'react'
import TableSection from './TableSection'
import TableFooter from './TableFooter'

const TableContainer = () => {
  return (
    <div className='border border-purple-400 p-2 rounded'>
      <div className="bg-blue-100 py-2 overflow-x-hidden">
        <TableSection />
      </div>
      <TableFooter />
    </div>
  )
}

export default TableContainer
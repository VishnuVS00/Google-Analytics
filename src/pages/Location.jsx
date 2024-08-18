import React, { useEffect } from 'react'

function Location() {
  useEffect(() => {

  }, [])

  return (
    <div className='flex flex-col border border-white h-[70vh] w-full rounded-md p-5'
     >
      <h2 className='font-bold'>Location</h2>
      <div className='flex justify-between p-2'>
        <div className='flex gap-3'>
          <p className='cursor-pointer' >US</p>
          <p className='cursor-pointer' >International</p>
        </div>
        <div className='flex gap-3'>
          <p className='cursor-pointer' >Map</p>
          <p className='cursor-pointer' >Data</p>
        </div>
      </div>
      <div className='flex border border-gray-500 rounded-lg justify-between p-4'>
        <h3 className='cursor-pointer'>Registration</h3>
        <h3 className='cursor-pointer'>Audience Score</h3>
        <h3 className='cursor-pointer'>Exhibitor</h3>
      </div>
    </div>
  )
}

export default Location
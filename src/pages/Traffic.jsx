import React from 'react'
import { useEffect } from 'react'

function Traffic() {
  useEffect(() => {

  }, [])

  return (
    <div className='flex  border border-white h-[70vh] w-full rounded-md p-5'>
      <div>
        <h2 className='font-bold'>Traffic Flow</h2>
        <div className='flex w-[60vw] justify-between'>
          <div className='flex justify-between gap-4'>
            <p>All Days</p>
            <p>Animate</p>
          </div>
          <p>Show all Event Days</p>
        </div>

        <div className='flex flex-col w-[60vw]'>
          <div className='flex justify-between'>
            <div className='flex gap-3'>
              <p className='border rounded-md p-1 py-[1px]'>WestHall</p>
              <p className='border rounded-md p-1 py-[1px]'>CentralHall</p>
            </div>
            <p className='border rounded-md p-1 py-[1px]'>Full Screen</p>
          </div>


          <div className='border h-[50vh] mt-3'>
            <div className='flex justify-end m-2 gap-6'>
              <div className='flex gap-8 items-center border px-2'>
                <p>+</p>
                <p>-</p>
                <p>++</p>
              </div>
              <p className='border rounded-md px-1'>Expand </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-end w-[40vw]'>
        <p>Search</p>
        <div className='flex gap-5'>
          <p>s1</p>
          <p>s2</p>
          <p>s3</p>
          <p>s4</p>
        </div>
      </div>

    </div>
  )
}

export default Traffic
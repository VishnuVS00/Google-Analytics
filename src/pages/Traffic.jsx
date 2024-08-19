import React from 'react'
import { useEffect } from 'react'
import ReactGA from 'react-ga4';
ReactGA.initialize('G-F3CL2V9TFD');

function Traffic() {
  useEffect(() => {

  }, [])

  const handleTrafficEvent=(e) => {
    ReactGA.event({
      category: "traffic--",
      action: "button Click",
      label: e, // optional
      value: e, // optional, must be a number
      nonInteraction: true, // optional, true/false
      transport: "xhr", // optional, beacon/xhr/image
    });
  }
  



  return (
    <div className='flex  border border-white h-[70vh] w-full rounded-md p-5'>
      <div>
        <h2 className='font-bold'>Traffic Flow</h2>
        <div className='flex w-[60vw] justify-between'>
          <div className='flex justify-between gap-4'>
            <p onClick={()=>handleTrafficEvent("allDays")}>All Days</p>
            <p onClick={()=>handleTrafficEvent("animate")}>Animate</p>
          </div>
          <p onClick={()=>handleTrafficEvent("showAllEventDays")}>Show all Event Days</p>
        </div>

        <div className='flex flex-col w-[60vw]'>
          <div className='flex justify-between'>
            <div className='flex gap-3'>
              <p onClick={()=>handleTrafficEvent("")} className='border rounded-md p-1 py-[1px]'>WestHall</p>
              <p onClick={()=>handleTrafficEvent("")} className='border rounded-md p-1 py-[1px]'>CentralHall</p>
            </div>
            <p onClick={()=>handleTrafficEvent("")} className='border rounded-md p-1 py-[1px]'>Full Screen</p>
          </div>


          <div className='border h-[50vh] mt-3'>
            <div className='flex justify-end m-2 gap-6'>
              <div className='flex gap-8 items-center border px-2'>
                <p onClick={() => handleTrafficEvent("zoomIn")}>+</p>
                <p onClick={() => handleTrafficEvent("zoomOut")}>-</p>
                <p onClick={() => handleTrafficEvent("resize")}>++</p>
              </div>
              <p onClick={() => handleTrafficEvent("expand")} className='border rounded-md px-1'>Expand </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-end w-[40vw]'>
        <p onClick={() => handleTrafficEvent("search")}>Search</p>
        <div className='flex gap-5'>
          <p onClick={() => handleTrafficEvent("s1")}>s1</p>
          <p onClick={() => handleTrafficEvent("s2")}>s2</p>
          <p onClick={() => handleTrafficEvent("s3")}>s3</p>
          <p onClick={() => handleTrafficEvent("s4")}>s4</p>
        </div>
      </div>

    </div>
  )
}

export default Traffic
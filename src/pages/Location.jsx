import React, { useEffect } from 'react'
import ReactGA from "react-ga4";

const TRACKING_ID = "G-F3CL2V9TFD"

function Location() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID)
    ReactGA.send({ hitType: "pageview", page: location.pathname, title: "Custom Title" });
  }, [])

  const handleLocationEvents=(e) => {
    ReactGA.event({
      category: "Location",
      action: "button Click",
      label: e, // optional
      value: e, // optional, must be a number
      nonInteraction: true, // optional, true/false
      transport: "xhr", // optional, beacon/xhr/image
    });
  }
  

  return (
    <div className='flex flex-col border border-white h-[70vh] w-full rounded-md p-5'
    >
      <h2 className='font-bold'>Location</h2>
      <div className='flex justify-between p-2'>
        <div className='flex gap-3'>
          <p onClick={()=>handleLocationEvents("us")} className='cursor-pointer' >US</p>
          <p onClick={()=>handleLocationEvents("international")} className='cursor-pointer' >International</p>
        </div>
        <div className='flex gap-3'>
          <p onClick={()=>handleLocationEvents("map")} className='cursor-pointer' >Map</p>
          <p onClick={()=>handleLocationEvents("data")} className='cursor-pointer' >Data</p>
        </div>
      </div>
      <div className='flex border border-gray-500 rounded-lg justify-between p-4'>
        <h3 onClick={()=>handleLocationEvents("Registration")} className='cursor-pointer'>Registration</h3>
        <h3 onClick={()=>handleLocationEvents("audienceScore")} className='cursor-pointer'>Audience Score</h3>
        <h3 onClick={()=>handleLocationEvents("exhibitor")} className='cursor-pointer'>Exhibitor</h3>
      </div>
    </div>
  )
}

export default Location
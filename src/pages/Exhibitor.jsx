import React, { useEffect } from 'react'
import ReactGA from 'react-ga4';
ReactGA.initialize('G-F3CL2V9TFD');

function Exhibitor() {
  useEffect(() => {

  }, [])

  const handleExhibitorEvents=(e) => {
    ReactGA.event({
      category: "exhibitorsssss",
      action: "button Click",
      label: e, // optional
      value: e, // optional, must be a number
      nonInteraction: true, // optional, true/false
      transport: "xhr", // optional, beacon/xhr/image
    });
  }
  

  return (
    <div className='flex flex-col border border-white h-[70vh] w-full rounded-md p-5'>
      <h2 className='font-bold'>Exhibitor</h2>
      <div className='flex justify-between'>
        <div>
          <p onClick={()=>handleExhibitorEvents("search")}>Search</p>

          <div className='flex gap-5'>
            <p onClick={()=>handleExhibitorEvents("s1")}>s1</p>
            <p onClick={()=>handleExhibitorEvents("s2")}>s2</p>
            <p onClick={()=>handleExhibitorEvents("s3")}>s3</p>
            <p onClick={()=>handleExhibitorEvents("s4")}>s4</p>
          </div>
        </div>



        <div className='flex flex-col w-[60vw]'>
          <p onClick={()=>handleExhibitorEvents("showAllEventDays")} className='flex self-end'>Show all Event Days</p>
          <div className='flex justify-between'>
            <div className='flex gap-3'>
              <p onClick={()=>handleExhibitorEvents("westHall")} className='border rounded-md p-1 py-[1px]'>WestHall</p>
              <p onClick={()=>handleExhibitorEvents("centralHall")} className='border rounded-md p-1 py-[1px]'>CentralHall</p>
            </div>
            <p onClick={()=>handleExhibitorEvents("fullScreen")} className='border rounded-md p-1 py-[1px]'>Full Screen</p>
          </div>


          <div className='border h-[50vh] mt-3'>
            <div className='flex justify-end m-2 gap-6'>
              <div className='flex gap-8 items-center border px-2'>
                <p onClick={()=>handleExhibitorEvents("zoomIn")}>+</p>
                <p onClick={()=>handleExhibitorEvents("zoomOut")}>-</p>
                <p onClick={()=>handleExhibitorEvents("resize")}>++</p>
              </div>
              <p onClick={()=>handleExhibitorEvents("expand")} className='border rounded-md px-1'>Expand </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exhibitor
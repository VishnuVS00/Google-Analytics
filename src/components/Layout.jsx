import React from 'react'
import ReactGA from "react-ga4";
ReactGA.initialize('G-F3CL2V9TFD');
function Layout() {

   const handleLayoutClick=(event) => {
    ReactGA.event({
      category: "your category",
      action: "your action",
      label: "your label", // optional
      value: 99, // optional, must be a number
      nonInteraction: true, // optional, true/false
      transport: "xhr", // optional, beacon/xhr/image
    });
   }
    
  return (
    <div style={{display:"flex",border:"1px solid white",borderRadius:'8px',color:'white',padding:"2vh",justifyContent:"space-evenly"}}>
        <p style={{cursor:"pointer"}} onClick={()=>handleLayoutClick("events")}>Events</p>
        <p style={{cursor:"pointer"}} onClick={()=>handleLayoutClick("clearCache")}>Clear Cache</p>
        <p style={{cursor:"pointer"}} onClick={()=>handleLayoutClick("logout")}>Logout</p>
        <p style={{cursor:"pointer"}} onClick={()=>handleLayoutClick("views")}>Views</p>
        <p style={{cursor:"pointer"}} onClick={()=>handleLayoutClick("filters")}>Filters</p>
        <p style={{cursor:"pointer"}} onClick={()=>handleLayoutClick("insights")}>Insights</p>
        <p style={{cursor:"pointer"}} onClick={()=>handleLayoutClick("exports")}>Exports</p>
        <p style={{cursor:"pointer"}} onClick={()=>handleLayoutClick("reload")}>♺</p>
    </div>
  )
}

export default Layout
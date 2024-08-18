import React from 'react'
import ReactGA from "react-ga";

function Layout() {

   const handleLayoutClick=(event) => {
     ReactGA.event({
      category:event,
      action:'clicked',
      label: 'layout label',
      value:event,
     })
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
import React from 'react'
import { Outlet } from 'react-router-dom'
import Switchs from './Switchs'
function LayoutForLogin() {
  return (
    <div style={{fontFamily:'Poppins'}}>
        <div className="mt-4 d-flex align-items-center justify-content-center">
        <Switchs></Switchs>
        </div>
        <div  className=' container p-0 border shadow' style={{width:'800px',height:"500px",marginTop:"100px",fontFamily:'Poppins'}}>
        <Outlet></Outlet>
        </div>
    </div>
  )
}

export default LayoutForLogin
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Switchs.css'
function Switchs() {
  return (
    <div className='d-inline-block border border-3 rounded-3 p-2 align-items-center' >
        <ul className="d-flex gap-3 list-unstyled align-items-center text-info fs-4 m-0">
                <li className="nav-item "><NavLink className="nav-link ab text-dark" to='login'>Login</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link ab text-dark" to='register'>Register</NavLink></li>
        </ul>
    </div>
  ) 
} 

export default Switchs
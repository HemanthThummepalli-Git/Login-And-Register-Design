import React from 'react'
import { useLocation } from 'react-router-dom'
function UserProfile() {

    let {state}=useLocation()

  return (
    <div className='h-100 bg-danger text-light p-5' style={{ backgroundImage: `linear-gradient(to top,rgba(255, 0, 0, 0.055),rgba(255, 11, 129, 0.87))`}} >
        <p className="fs-1 ">Welcome, {state.username}</p>
        <p className="fs-3 bg-light text-dark rounded-3 p-4 ">Personal Information:
        <div>
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" className='rounded-circle' width="100px"/>
        </div>
        <p className='fs-5 bg-light text-dark rounded-3 mt-3'>Email: {state.email}</p>
        <p className='fs-5 bg-light text-dark rounded-3 '>Date of Birth: {state.dob}</p>
        </p>
    </div>
  )
}

export default UserProfile
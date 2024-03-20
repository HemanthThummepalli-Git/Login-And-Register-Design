import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { compareSync } from 'bcryptjs'
function Login() {

    let {register,handleSubmit,formState:{errors}}=useForm()
    let navigate=useNavigate()
    
    function submit(userCred){
        fetch(`http://localhost:4001/users?username=${userCred.username}`,{
            method:'GET'})
        .then(res=>res.json())
        .then(userObjArray=>{
            if(userObjArray.length===0){
                alert("Invalid Username")
            }else{
                //compare the passwords
                let result=compareSync(userCred.password,userObjArray[0].password)
                if(result===true){
                    //navigate to userprofile
                    navigate(`/userprofile/${userCred.username}`,{state:userObjArray[0]})
                }else{
                    alert("Invalid Password")
                }
            }
        })
    }

  return (
    <div >
        <div className="row" style={{height:'500px'}}>

        <div className='col child2 text-light text-center bg-danger p-4 position-relative' style={{ backgroundImage: `linear-gradient(to left,rgba(255, 0, 0, 0.055),rgba(255, 11, 129, 0.87))`}}>
        <div className="position-absolute top-50 start-50 translate-middle w-100">
        <h1>Login Form</h1>
       
        <p>To see your Profile</p>
        </div>
        </div>
            <div className="col child1 p-4">    
            <h1 className='text-center m-4 mb-4'>Login</h1>
            <div className="d-flex gap-4 justify-content-center mb-4 ">
            <img src="data:image/png;base64,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" alt="" width="40px"/>
            <img src="data:image/png;base64,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" alt="" width="42px"/>
            </div>
            <form className='w-100 text-dark mx-auto  d-block  p-3 text-center ' onSubmit={handleSubmit(submit)}>
        <div className='mb-4 '>
            
            <input type="text" className='form-control' placeholder='Username' {...register('username',{required:true})}/>
            {errors.username?.type==='required' && <p className='text-danger mt-1'>Username Required</p>}
        </div>
        <div className='mb-4'>
            
            <input type="password" className='form-control' placeholder='Password' {...register('password',{required:true})}/>
            {errors.password?.type==='required' && <p className='text-danger mt-1'>Password Required</p>}

        </div>
        <button className='btn btn-danger'type='submit'>Login</button>
        </form>
        <p className='fs-6 px-3 text-center'>New User! 
            <Link to='/register' className='px-1 link-danger'>Register</Link>
            here
        </p>
        </div>
        </div>
    </div>
  )
}

export default Login
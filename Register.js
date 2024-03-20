import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { hashSync } from 'bcryptjs'
import { useNavigate } from 'react-router-dom'
function Register() {

    let {register,handleSubmit,formState:{errors}}=useForm()

    let navigate=useNavigate()

    function submit(newUser)
    {
        let hashedPassword=hashSync(newUser.password,5)
        newUser.password=hashedPassword

        fetch('http://localhost:4001/users',
        {method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newUser)
        })
        .then(res=>{
            if(res.status===201){
                //navigate to Login
                navigate('/login')
            }
        })
        .catch(err=>console.log("Error is ",err))
    }
    

  return (
    <div >
        <div className="row" style={{height:'500px'}}>
            <div className="col child1 p-3" style={{height:'500px'}}>    
            <h1 className='text-center mb-4 mt-2'>Register</h1>

            <form className=' w-100  text-dark px-4 text-center' onSubmit={handleSubmit(submit)}>

            <div className='mb-3'>
                
                <input type="text" className='form-control' placeholder='Username' {...register('username',{required:true})}/>
                {errors.username?.type==='required' && <p className='text-danger m-0'>Username Required</p>}

            </div>
            <div className='mb-3'>

                <input type="email" className='form-control' placeholder='Email' {...register('email',{required:true})} />
                {errors.username?.type==='required' && <p className='text-danger m-0'>Email Required</p>}            
            
            </div>
            <div className='mb-3'>
                
                <input type="date" className='form-control' placeholder='DD-MM--YYYY'{...register('dob',{required:true})}/>
                {errors.username?.type==='required' && <p className='text-danger  m-0'>Date of Birth Required</p>}

            </div>
            <div className='mb-3'>

                <input type="password" className='form-control' placeholder='Password'{...register('password',{required:true})}/>
                {errors.username?.type==='required' && <p className='text-danger  m-0'>Password Required</p>}

            </div>
            <button className='btn btn-danger' type="submit">Register</button>
        </form>
        <p className='fs-6 px-3 text-center mt-2'>Already Registered!
            <Link to='/login' className='px-1 link-danger'>Login</Link>
            here
        </p>
        </div>

        <div className='col child2 text-light text-center bg-danger p-4 position-relative' style={{ backgroundImage: `linear-gradient(to right,rgba(255, 0, 0, 0.055),rgba(255, 11, 129, 0.87))`}}>
        <div className="position-absolute top-50 start-50 translate-middle w-100">
        <h1>Registration Form</h1>
        <p>Then proceed with Login</p>
        </div>
        </div>
        </div>
        
    </div>
  )
}

export default Register
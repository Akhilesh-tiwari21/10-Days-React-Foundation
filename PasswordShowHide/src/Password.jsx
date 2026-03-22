import React,{useState} from 'react'
import 'remixicon/fonts/remixicon.css'

const Password = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='relative w-64 bg-gray-100'>
        <input className='py-2 w-full pr-10 pl-3 border rounded text-gray-800'placeholder='password' type={show ? 'text' : 'password'}/>

        <span className='absolute right-3 translate-y-1/2 cursor-pointer text-gray-600 tex-2xl'>
        {show ? (<i class="ri-eye-close-fill" onClick={()=> setShow(prev => !prev)}></i>) : (<i className="ri-eye-fill"onClick={()=> setShow(!show)}></i>)}
        </span>
    </div>
  )
}

export default Password

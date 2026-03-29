import {useState} from 'react'
import Button from './Button'

const Counter = () => {

    const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-50 w-90 flex flex-col items-center justify-center bg-gray-800 rounded-2xl'>
        <div className='h-30 w-60 text-6xl text-white flex justify-center items-center font-semibold'>{count}</div>
        <div className='bg-gray-600 h-20 w-80 flex gap-3 justify-center items-center   font-serif rounded-tl-2xl rounded-tr-2xl'>
            <Button setcount={setCount} count={count}/>
        </div>
    </div>
      
    </>
  )
}

export default Counter

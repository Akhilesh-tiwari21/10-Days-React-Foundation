
const Button = ({setcount, count}) => {

    const increase = () =>{
        setcount(count + 1)
    }

    const decrease = () =>{
        setcount(count - 1)
    }

    const resume = () =>{
        setcount(0)
    }
  return (
    <div className='flex gap-3'>
        <button onClick={increase} className='bg-gray-500 px-3 py-1 rounded'>
            Increase
        </button>

        <button onClick={decrease} className='bg-gray-500 px-3 py-1 rounded'>
            Decrease
        </button>

        <button onClick={resume} className='bg-gray-500 px-3 py-1 rounded'>
            Resume
        </button>
    </div>
    )
}

export default Button

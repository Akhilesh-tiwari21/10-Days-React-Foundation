import React,{useState} from 'react'

const InputPreview = () => {
    const [text, setText] = useState('');

    const textInput = (event) => {
      setText(event.target.value);
    }
  return (
    <>
      <div className='h-20 w-90 bg-gray-500 text-white rounded '>{text}</div>
      <input type='text' placeholder='enter text' className='h-10 w-79 bg-gray-400 text-white border border-gray-500 rounded' onChange={textInput}/>
    </>
  )
}

export default InputPreview

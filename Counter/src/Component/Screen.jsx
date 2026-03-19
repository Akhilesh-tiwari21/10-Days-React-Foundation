import React,{useState} from 'react'

import ButtonGroup from "./ButtonGroup"

const Screen = () => {
    const [value, setValue] = useState(0);

    const increaseValue = () => {
        setValue(value + 1);
    }

    const decreaseValue = () => {
        setValue(value - 1);
    }

    const increaseFiveValue = () => {
        setValue(value + 5);
    }

    const decreaseFiveValue = () => {
        setValue(value - 5);
    }

    const restValue = () => {
        setValue(0);
    }
  return (
    <div className="flex justify-center items-center min-h-screen ">
        <div className="w-full max-w-md bg-black rounded-2xl p-4 flex flex-col gap-4">
            <div className="h-24 bg-gray-500 text-white rounded-xl flex items-center justify-center text-5xl font-bold">
                {value}
            </div>

                < ButtonGroup
                    increase={increaseValue}
                    decrease={decreaseValue}
                    increaseFive={increaseFiveValue}
                    decreaseFive={decreaseFiveValue}
                    reset={restValue}
                />

        </div>

    </div>
    )
}

export default Screen

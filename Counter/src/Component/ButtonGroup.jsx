


const ButtonGroup = (props) => {
    return (
    <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-4'>
            <button className="bg-gray-400 hover:bg-gray-500 active:scale-95 transition text-black font-medium py-2 px-3 rounded-lg"
            onClick={props.increase}>
                Increase
            </button>

            <button className="bg-gray-400 hover:bg-gray-500 active:scale-95 transition text-black font-medium py-2 px-3 rounded-lg"
            onClick={props.reset}>
                Reset
            </button>

            <button className="bg-gray-400 hover:bg-gray-500 active:scale-95 transition text-black font-medium py-2 px-3 rounded-lg"
            onClick={props.decrease}>
                Decrease
            </button>
        </div>

        <div className='flex items-center justify-center gap-4'>
            <button className="bg-gray-400 hover:bg-gray-500 active:scale-95 transition text-black font-medium py-2 px-3 rounded-lg"
            onClick={props.increaseFive}>
                Increase + 5
            </button>

            <button className="bg-gray-400 hover:bg-gray-500 active:scale-95 transition text-black font-medium py-2 px-3 rounded-lg"
            onClick={props.decreaseFive}>
                decrease - 5
            </button>
        </div>
    </div>
    )
}

export default ButtonGroup
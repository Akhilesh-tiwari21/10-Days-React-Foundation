import Counter from './components/Counter'

const App = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-10'>
      <h2 className='text-3xl text-black font-serif font-bold'>COUNTER APP</h2>
      <Counter />
    </div>
  )
}

export default App

import Header from './Components/Header'
import TodoContainer from './Components/TodoContainer'

function App() {
  return (
    <div className='py-8'>
      <div className="container mx-auto bg-graay py-8 px-12 rounded-lg flex flex-col gap-10">
        <h1 className='text-center text-4xl text-bluey font-semibold underline'>My Todos</h1>
        <Header />
        <hr className='border border-gray-300'/>
        <TodoContainer />
      </div >
    </div>
  )
}

export default App
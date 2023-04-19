import Header from './Components/Header'
import TodoContainer from './Components/TodoContainer'

function App() {
  return (
    <div className='py-8'>
      <div className="container mx-auto bg-graay p-8 rounded-lg">
        <h1 className='text-center text-3xl font-semibold mb-8'>My Todos</h1>
        <Header />
        <TodoContainer />
      </div >
    </div>
  )
}

export default App
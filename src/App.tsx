import Header from './Components/Header'
import TodoContainer from './Components/TodoContainer'

function App() {
  return (
    <div className="bg-graay md:container mx-auto ">
      <h1>My Todos</h1>
      <Header />
      <TodoContainer />
    </div >
  )
}

export default App
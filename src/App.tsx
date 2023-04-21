import { useState } from 'react'
import Header from './Components/Header'
import TodoContainer from './Components/TodoContainer'
import TodoObj from './todoModel'

function App() {

  const [todo, setTodo] = useState<TodoObj[]>([])

  function removeTodo(id: number) {

  }

  function editTodo(id: number) {

  }

  return (
    <div className='py-8 px-2 md:px-20'>
      <div className="container mx-auto bg-graay py-8 px-4 sm:px-12 rounded-lg flex flex-col gap-10">
        <h1 className='text-center text-4xl text-bluey font-semibold underline'>My Todos</h1>
        <Header setTodo={setTodo} />
        <hr className='border border-gray-300' />
        <TodoContainer todo={todo} />
      </div >
    </div>
  )
}

export default App

// todo
// display message if input value is null
// add edit functionality
// add delete functionality
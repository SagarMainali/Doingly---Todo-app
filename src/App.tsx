import { useState } from 'react'
import Header from './Components/Header'
import TodoContainer from './Components/TodoContainer'
import TodoObj from './todoModel'

function App() {

  const test: TodoObj[] = [
    {
      id: 1,
      todo: 'hello',
      completed: true,
      dueDate: '123123'
    },
    {
      id: 1,
      todo: 'hello',
      completed: false,
      dueDate: '123123'
    }
  ]

  const [todo, setTodo] = useState<TodoObj[]>(test)

  return (
    <div className='py-8 px-2'>
      <div className="container mx-auto bg-graay py-8 px-4 sm:px-12 rounded-lg flex flex-col gap-10">
        <h1 className='text-center text-4xl text-bluey font-semibold underline'>My Todos</h1>
        <Header />
        <hr className='border border-gray-300' />
        <TodoContainer todo={ todo} />
      </div >
    </div>
  )
}

export default App
import { useState } from 'react'
import Header from './Components/Header'
import TodoContainer from './Components/TodoContainer'
import TodoObj from './todoModel'

function App() {

  const [todo, setTodo] = useState<TodoObj[]>([])

  function addTodo(): void {

    // let temp: TodoObj[] = [...todo]
    // temp.push(
    //   {
    //     id: Date.now(),
    //     todo: 'hello world',
    //     checked: false,
    //     dueDate: '20 Apr'
    //   }
    // )
    // setTodo(temp)

    setTodo((prevState: TodoObj[]) => (
      [
        ...prevState,
        {
          id: Date.now(),
          todo: 'hello world, this is a test',
          checked: false,
          dueDate: '20 Apr, 2023'
        }
      ]
    ))
  }

  function removeTodo(id: number) { 

  }

  function editTodo(id: number) { 

  }

  return (
    <div className='py-8 px-2'>
      <div className="container mx-auto bg-graay py-8 px-4 sm:px-12 rounded-lg flex flex-col gap-10">
        <h1 className='text-center text-4xl text-bluey font-semibold underline'>My Todos</h1>
        <Header addTodo={addTodo} />
        <hr className='border border-gray-300' />
        <TodoContainer todo={todo} />
      </div >
    </div>
  )
}

export default App
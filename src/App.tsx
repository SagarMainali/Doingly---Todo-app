import { useEffect, useState } from 'react'
import Header from './Components/Header'
import TodoContainer from './Components/TodoContainer'
import { TodoObj } from './types'
import { ShowMessage } from './types'
import FunctionContext from './Context/functionContext'

function App() {

  const [todos, setTodos] = useState<TodoObj[]>([])

  // delete todo from the list
  function removeTodo(id: number): void {
    // let temp: TodoObj[] = [...todo]
    // const matchedIndex: number = temp.findIndex((item: TodoObj) => item.id === id)
    // temp.splice(matchedIndex, 1)
    // setTodo(temp)
    setTodos(todos.filter((item: TodoObj) => id !== item.id))
    setShowMessage((prevState: ShowMessage) => (
      {
        ...prevState,
        showTodoDeleted: true
      }
    ))
  }

  // enter edit mode by changing the boolean property of the object
  function enterEditMode(id: number): void {
    setTodos(
      (prevState: TodoObj[]) => (
        prevState.map(
          (item: TodoObj) => (
            id === item.id

              ? {
                ...item,
                onEditMode: !item.onEditMode
              }

              : item
          )
        )
      )
    )
  }

  // save edited todo
  function saveEditedTodo(id: number, editedTodo: string): void {
    setTodos(
      (prevState: TodoObj[]) => (
        prevState.map(
          (item: TodoObj) => (
            id === item.id

              ? {
                ...item,
                onEditMode: !item.onEditMode,
                todo: editedTodo
              }

              : item
          )
        )
      )
    )
    setShowMessage((prevState: ShowMessage) => (
      {
        ...prevState,
        showTodoEdited: true
      }
    ))
  }

  // changed checked value
  function changeChecked(id: number): void {
    setTodos(
      (prevState: TodoObj[]) => (
        prevState.map(
          (item: TodoObj) => (
            id === item.id

              ? {
                ...item,
                checked: !item.checked
              }

              : item
          )
        )
      )
    )
  }

  const [showMessage, setShowMessage] = useState<ShowMessage>({
    showTodoAdded: false,
    showTodoDeleted: false,
    showTodoEdited: false,
    showOnEditMode: false
  })

  useEffect(() => {
    const delay: number = 1300
    if (showMessage.showTodoAdded || showMessage.showTodoDeleted || showMessage.showTodoEdited || showMessage.showOnEditMode) {
      if (showMessage.showTodoAdded) {
        let timer = setTimeout(() => {
          setShowMessage((prevState: ShowMessage) => (
            {
              ...prevState,
              showTodoAdded: false
            }
          ))
        }, delay)
        return () => clearTimeout(timer)
      }

      else if (showMessage.showTodoDeleted) {
        let timer = setTimeout(() => {
          setShowMessage((prevState: ShowMessage) => (
            {
              ...prevState,
              showTodoDeleted: false
            }
          ))
        }, delay)
        return () => clearTimeout(timer)
      }
      else if (showMessage.showTodoEdited) {
        let timer = setTimeout(() => {
          setShowMessage((prevState: ShowMessage) => (
            {
              ...prevState,
              showTodoEdited: false
            }
          ))
        }, delay)
        return () => clearTimeout(timer)
      }
      else {
        let timer = setTimeout(() => {
          setShowMessage((prevState: ShowMessage) => (
            {
              ...prevState,
              showOnEditMode: false
            }
          ))
        }, delay)
        return () => clearTimeout(timer)
      }
    }
  }, [showMessage])

  return (
    <FunctionContext.Provider value={{ removeTodo, enterEditMode, saveEditedTodo, changeChecked }} >
      <div className='py-8 px-2 md:px-20'>
        <div className="container mx-auto bg-graay py-8 px-4 sm:px-12 rounded-lg flex flex-col gap-10">
          <h1 className='text-center text-[2.2rem] text-bluey font-semibold underline'>My Todos</h1>
          <Header setTodos={setTodos} showMessage={showMessage} setShowMessage={setShowMessage} />
          <hr className='border border-gray-300' />
          <TodoContainer todos={todos} />
        </div >
        {showMessage.showTodoAdded && <div className="text-sm text-fwhite font-semibold bg-gray-600 px-3 py-1 rounded-md fixed left-2/4 bottom-8 -translate-x-2/4">"New todo added"</div>}
        {showMessage.showTodoDeleted && <div className="text-sm text-fwhite font-semibold bg-gray-600 px-3 py-1 rounded-md fixed left-2/4 bottom-5 -translate-x-2/4">"Todo deleted"</div>}
        {showMessage.showTodoEdited && <div className="text-sm text-fwhite font-semibold bg-gray-600 px-3 py-1 rounded-md fixed left-2/4 bottom-5 -translate-x-2/4">"Todo edited"</div>}
      </div>
    </FunctionContext.Provider>
  )
}

export default App


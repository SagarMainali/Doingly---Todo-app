import Todo from './Todo'
import { ShowMessage, TodoObj } from '../types'
import { useState } from 'react'

// type of expected argument
type Props = {
     todos: TodoObj[],
     setShowMessage: React.Dispatch<React.SetStateAction<ShowMessage>>
}

// TodoContainer Component
// alternative:
// function TodoContainer(props: Props) {
function TodoContainer({ todos, setShowMessage }: Props) {

     // store the selected option from user input
     const [selectedOption, setSelectedOption] = useState<string>('all')

     // get completed todos only - based on checked value
     const completedTodos = todos.filter(
          (item: TodoObj) => (
               item.checked && item
          )
     )

     // get incompleted todos - based on checked value
     const incompletedTodos = todos.filter(
          (item: TodoObj) => (
               !item.checked && item
          )
     )

     // for change in option selected
     function handleChange(event: React.ChangeEvent<HTMLSelectElement>): void {
          // verify if any of the todo is on editmode
          // if yes todoOnEditMode will be returned the index of it
          const todosOnEditMode: number = todos.findIndex((item: TodoObj) => (
               item.onEditMode
          ))
          // show message if any todo is on editmode
          if (todosOnEditMode >= 0) {
               setShowMessage((prevState: ShowMessage) => (
                    {
                         ...prevState,
                         showOnEditMode: true
                    }
               ))
          }
          // only accept change if no todo is on editmode
          else {
               setSelectedOption(event.target.value)
          }
     }

     return (
          <div className='flex flex-col gap-2'>
               <div className='flex justify-between mb-6 px-3'>
                    <fieldset>
                         <label>Filter:</label>
                         <select name="filter" className='ms-2 ps-1 pe-14 py-1 cursor-pointer rounded-md focus:outline-0' value={selectedOption} onChange={handleChange}>
                              <option value="all">All</option>
                              <option value="completed">Completed</option>
                              <option value="todos">Todos</option>
                         </select>
                    </fieldset>
                    <h2>Found "
                         {selectedOption === 'all'
                              ? todos.length
                              : selectedOption === 'completed'
                                   ? completedTodos.length
                                   : incompletedTodos.length
                         }
                         "
                    </h2>
               </div>
               {/* to display message or perform mapping to render todos based on selectedOption */}
               {selectedOption === 'all' && todos.length >= 1
                    ? todos.map((item: TodoObj) => <Todo key={item.id} item={item} />)
                    : selectedOption === 'all' && todos.length < 1
                         ? <h2 className='text-center py-6 text-lg'>There are no any <span className='text-bluey font-semibold '>todos</span> at the moment</h2>
                         : selectedOption === 'completed' && completedTodos.length >= 1
                              ? completedTodos.map((item: TodoObj) => <Todo key={item.id} item={item} />)
                              : selectedOption === 'completed' && completedTodos.length < 1
                                   ? <h2 className='text-center py-6 text-lg'>No completed <span className='text-bluey font-semibold '>todos</span> as of now</h2>
                                   : selectedOption === 'todos' && incompletedTodos.length >= 1
                                        ? incompletedTodos.map((item: TodoObj) => <Todo key={item.id} item={item} />)
                                        : <h2 className='text-center py-6 text-lg'>No remaining <span className='text-bluey font-semibold '>todos</span> as of now</h2>
               }
          </div>
     )
}

export default TodoContainer


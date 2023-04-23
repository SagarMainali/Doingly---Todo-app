import Todo from './Todo'
import TodoObj from '../todoModel'
import { useState } from 'react'

// type Props = {
//      todo: TodoObj[]
// }
// function TodoContainer(props: Props) {
function TodoContainer({ todos }: { todos: TodoObj[] }) {

     const [selectedOption, setSelectedOption] = useState<string>('all')

     // get completed todos only
     const completedTodos = todos.filter(
          (item: TodoObj) => (
               item.checked && item
          )
     )

     // get incompleted todos
     const incompletedTodos = todos.filter(
          (item: TodoObj) => (
               !item.checked && item
          )
     )

     return (
          <div className='flex flex-col gap-2'>
               <div className='flex justify-between px-2 mb-6'>
                    <fieldset>
                         <label>Filter:</label>
                         <select name="filter" className='ms-2 ps-1 pe-14 py-1 cursor-pointer rounded-md focus:outline-0' value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
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


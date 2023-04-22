import Todo from './Todo'
import TodoObj from '../todoModel'
import { useState } from 'react'

// type Props = {
//      todo: TodoObj[]
// }
// function TodoContainer(props: Props) {
function TodoContainer({ todos }: { todos: TodoObj[] }) {

     const [selectedOption, setSelectedOption] = useState<string>('all')

     function changeSelectedOption(value: string) {
          if (value === 'completed') { 
               const completedTodos = [...todos]
          }
          setSelectedOption(value)
     }

     return (
          <div className='flex flex-col gap-2'>
               <fieldset className='px-2 mb-4'>
                    <label>Filter:</label>
                    <select name="filter" className='ms-2 ps-1 pe-14 py-1 cursor-pointer rounded-md focus:outline-0' value={selectedOption} onChange={(e) => changeSelectedOption(e.target.value)}>
                         <option value="all">All</option>
                         <option value="completed">Completed</option>
                         <option value="todos">Todos</option>
                    </select>
               </fieldset>
               {todos.length >= 1
                    ? todos.map((item: TodoObj) => <Todo key={item.id} item={item} />)
                    : <h2 className='text-center py-6 text-lg'>There are no <span className='text-bluey font-semibold '>todos</span> at the moment</h2>
               }
          </div>
     )
}

export default TodoContainer
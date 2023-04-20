import Todo from './Todo'
import TodoObj from '../todoModel'

// type Props = {
//      todo: TodoObj[]
// }
// function TodoContainer(props: Props) {
function TodoContainer({ todo }: { todo: TodoObj[] }) {
     return (
          <div className='flex flex-col gap-2'>
               <fieldset className='px-2 mb-4'>
                    <label>Filter:</label>
                    <select name="filter" className='ms-2 ps-1 pe-14 py-1 cursor-pointer rounded-md focus:outline-0'>
                         <option value="all">All</option>
                         <option value="done">Completed</option>
                         <option value="todo">Todos</option>
                    </select>
               </fieldset>
               {todo.length >= 1
                    ? todo.map((item: TodoObj) => <Todo key={item.id} item={item} />)
                    : <h2 className='text-center py-6 text-lg'>There are no <span className='text-bluey font-semibold '>todos</span> at the moment</h2>
               }
          </div>
     )
}

export default TodoContainer
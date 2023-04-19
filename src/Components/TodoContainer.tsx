import React from 'react'
import Todo from './Todo'

function TodoContainer() {
     return (
          <div className='flex flex-col gap-2'>
               <fieldset className='px-2'>
                    <label>Filter
                         <select name="filter">
                              <option value="all">All</option>
                              <option value="done">Done</option>
                              <option value="todo">Todo</option>
                         </select>
                    </label>
               </fieldset>
               <Todo />
               <Todo />
          </div>
     )
}

export default TodoContainer
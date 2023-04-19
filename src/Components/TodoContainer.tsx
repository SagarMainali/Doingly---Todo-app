import React from 'react'
import Todo from './Todo'

function TodoContainer() {
     return (
          <div className='flex flex-col gap-2'>
               <fieldset className='px-2 mb-2'>
                    <label>Filter:
                         <select name="filter" className='ms-2 ps-1 pe-14 py-1 cursor-pointer rounded-md focus:outline-0'>
                              <option value="all">All</option>
                              <option value="done">Done</option>
                              <option value="todo">Todo</option>
                         </select>
                    </label>
               </fieldset>
               <Todo />
               <Todo />
               <Todo />
          </div>
     )
}

export default TodoContainer
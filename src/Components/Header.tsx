import React, { useState } from 'react'
import TodoObj from '../todoModel'

type FormDataObj = {
     todo: string,
     date: string
}

function Header({ setTodo }: { setTodo: React.Dispatch<React.SetStateAction<TodoObj[]>> }) {

     const [formData, setFormData] = useState<FormDataObj>({
          todo: '',
          date: currentDate(Date.now()) // can access this function before definition because of hoisting
     })

     // handle the change in inputs (both input and date)
     function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
          const { name, value } = event.target
          setFormData(
               (prevState: FormDataObj) => {
                    return {
                         ...prevState,
                         [name]: value
                    }
               }
          )
     }

     // get the current date from date.now() which is in ms
     function currentDate(dateInMs: number): string {
          const newDate = new Date(dateInMs)
          const year: number = newDate.getFullYear()
          let month: string | number = newDate.getMonth()
          month = month < 10 ? `0${month + 1}` : month + 1
          let date: string | number = newDate.getDate()
          date = date < 10 ? '0' + date : date
          return `${year}-${month}-${date}`
     }

     // store the current date
     const today: string = currentDate(Date.now());

     // add todos
     function addTodo(formData: FormDataObj): void {

          const todoTrim = formData.todo.trim()
          if (todoTrim.length > 0) {

               setTodo((prevState: TodoObj[]) => (
                    [
                         {
                              id: Date.now(),
                              todo: formData.todo,
                              checked: false,
                              dueDate: formData.date
                         },
                         ...prevState
                    ]
               ))

               clearInputField()
          }

          else {
               clearInputField()

          }
     }

     function clearInputField(): void {
          setFormData((prevState: FormDataObj) => {
               return {
                    ...prevState,
                    todo: ''
               }
          })
     }

     return (
          <div className='flex items-center gap-1 sm:gap-3 bg-fwhite px-5 sm:px-8 py-7 rounded-md shadow-md'>
               <input name='todo' className="flex-1 focus:outline-0 placeholder:text-greyy" type="text" placeholder="Add new todo..." onChange={handleChange} value={formData.todo} />
               <input name='date' type="date" className='w-[6.8rem] cursor-pointer text-sm focus:outline-0' value={formData.date} min={today} onChange={handleChange} />
               <button className="bg-bluey text-fwhite py-2 px-6 rounded-md text-xs font-semibold drop-shadow-xl duration-150 hover:scale-105" onClick={() => addTodo(formData)}>ADD</button>
          </div>
     )
}

export default Header
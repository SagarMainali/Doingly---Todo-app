import React, { useState, useRef } from 'react'
import { TodoObj } from '../types'
import { ShowMessage } from '../types'

// for todo and date set from user inputs
type FormDataObj = {
     todo: string,
     date: string
}

// type of expected argument
type Props = {
     todos: TodoObj[],
     setTodos: React.Dispatch<React.SetStateAction<TodoObj[]>>,
     setShowMessage: React.Dispatch<React.SetStateAction<ShowMessage>>
}

// Header Component
function Header({ todos, setTodos, setShowMessage }: Props) {

     // save user inputs
     const [formData, setFormData] = useState<FormDataObj>(
          {
               todo: '',
               date: currentDate(Date.now()) // can access this function before definition because of hoisting
          }
     )

     // handle the change in inputs (both input and date)
     function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
          // verify if any of the todo is on editmode
          // if yes todoOnEditMode will be returned the index of it
          const todoOnEditMode: number = todos.findIndex((item: TodoObj) => (
               item.onEditMode
          ))
          // show message if any todo is on editmode
          if (todoOnEditMode >= 0) {
               setShowMessage((prevState: ShowMessage) => (
                    {
                         ...prevState,
                         showOnEditMode: true
                    }
               ))
          }
          // only accept inputs if no todo is on editmode
          else {
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
          // remove space to avoid empty string submission
          const todoTrim = formData.todo.trim()
          if (todoTrim.length > 0) {

               setTodos((prevState: TodoObj[]) => (
                    [
                         {
                              id: Date.now(),
                              checked: false,
                              todo: formData.todo,
                              onEditMode: false,
                              dueDate: formData.date
                         },
                         ...prevState
                    ]
               ))
               clearInputField()
               setShowMessage((prevState: ShowMessage) => (
                    {
                         ...prevState,
                         showTodoAdded: true
                    }
               ))
               toggleClassName.current = 'hidden'
          }
          else {
               clearInputField()
               toggleClassName.current = ''
          }
     }

     // clear inputfield after user adds todo
     // this function is called on addTodo function
     function clearInputField(): void {
          setFormData((prevState: FormDataObj) => {
               return {
                    ...prevState,
                    todo: ''
               }
          })
     }

     // toggle classname hidden without rendering
     const toggleClassName: React.MutableRefObject<string> = useRef('hidden')

     return (
          <div className='relative'>
               <div className='flex items-center gap-1 sm:gap-3 bg-fwhite px-5 sm:px-8 py-7 rounded-md shadow-md'>
                    <input name='todo' className="flex-1 focus:outline-0 placeholder:text-greyy" type="text" placeholder='Add new todo...' onChange={handleChange} value={formData.todo} />
                    <input name='date' type="date" className='w-[6.5rem] cursor-pointer text-sm focus:outline-0' value={formData.date} min={today} onChange={handleChange} />
                    <button className="bg-bluey text-fwhite py-2 px-4 sm:px-6 rounded-md text-xs font-semibold drop-shadow-xl duration-150 hover:scale-105" onClick={() => addTodo(formData)}>ADD</button>
               </div>
               {/* show message only if user tries to submit empty input */}
               <p className={`${toggleClassName.current}` + ' absolute text-reddy py-1'}>Todo can't be empty*</p>
          </div >
     )
}

export default Header
import React, { useState, useRef, useEffect } from 'react'
import TodoObj from '../todoModel'

type FormDataObj = {
     todo: string,
     date: string
}

function Header({ setTodos }: { setTodos: React.Dispatch<React.SetStateAction<TodoObj[]>> }) {

     const [formData, setFormData] = useState<FormDataObj>(
          {
               todo: '',
               date: currentDate(Date.now()) // can access this function before definition because of hoisting
          }
     )

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

     const [showMessage, setShowMessage] = useState<boolean>(false)

     // add todos
     function addTodo(formData: FormDataObj): void {
          const todoTrim = formData.todo.trim()
          if (todoTrim.length > 0) {

               setTodos((prevState: TodoObj[]) => (
                    [
                         {
                              id: Date.now(),
                              checked: false,
                              todo: formData.todo,
                              editMode: false,
                              dueDate: formData.date
                         },
                         ...prevState
                    ]
               ))
               clearInputField()
               setShowMessage(true)
               toggleClassName.current = 'hidden'
          }
          else {
               clearInputField()
               toggleClassName.current = ''
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

     useEffect(() => {
          setTimeout(() => {
               setShowMessage(false)
          }, 1500)
     }, [showMessage])

     // toggle classname hidden without rendering
     const toggleClassName: React.MutableRefObject<string> = useRef('hidden')

     return (
          <div className='relative'>
               <div className='flex items-center gap-1 sm:gap-3 bg-fwhite px-5 sm:px-8 py-7 rounded-md shadow-md'>
                    <input name='todo' className="flex-1 focus:outline-0 placeholder:text-greyy" type="text" placeholder='Add new todo...' onChange={handleChange} value={formData.todo} />
                    <input name='date' type="date" className='w-[6.5rem] cursor-pointer text-sm focus:outline-0' value={formData.date} min={today} onChange={handleChange} />
                    <button className="bg-bluey text-fwhite py-2 px-4 sm:px-6 rounded-md text-xs font-semibold drop-shadow-xl duration-150 hover:scale-105" onClick={() => addTodo(formData)}>ADD</button>
               </div>
               <p className={`${toggleClassName.current}` + ' absolute text-reddy py-1'}>Todo can't be empty*</p>
               {showMessage && <div className="text-sm text-fwhite font-semibold bg-gray-600 px-3 py-1 rounded-md fixed left-2/4 bottom-5 -translate-x-2/4">"New todo added"</div>}
          </div >
     )
}

export default Header
import React, { useState } from 'react'


type FormDataObj = {
     todo: string,
     date: string
}

function Header({ addTodo }: { addTodo: () => void }) {

     const [formData, setFormData] = useState<FormDataObj>({
          todo: '',
          date: ''
     })

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

     function currentDate(dateInMs: number): string {
          const newDate = new Date(dateInMs)
          const year: number = newDate.getFullYear()
          let month: string | number = newDate.getMonth()
          month = month < 10 ? `0${month + 1}` : month + 1
          console.log(month)
          let date: string | number = newDate.getDate()
          date = date < 10 ? '0' + date : date
          return `${year}-${month}-${date}`
     }

     const today: string = currentDate(Date.now());

     return (
          <div className='flex items-center gap-1 sm:gap-3 bg-fwhite px-5 sm:px-8 py-7 rounded-md shadow-md'>
               <input name='todo' className="flex-1 focus:outline-0 placeholder:text-greyy" type="text" placeholder="Add new..." onChange={handleChange} />
               <input name='date' type="date" className='w-[6.8rem] cursor-pointer text-sm focus:outline-0' defaultValue={today} min={today} onChange={handleChange} />
               <button className="bg-bluey text-fwhite py-2 px-6 rounded-md text-xs font-semibold drop-shadow-xl duration-150 hover:scale-105" onClick={() => addTodo()}>ADD</button>
          </div>
     )
}

export default Header
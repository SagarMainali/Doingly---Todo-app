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

     return (
          <div className='flex items-center gap-1 sm:gap-3 bg-fwhite px-5 sm:px-8 py-7 rounded-md shadow-md'>
               <input name='todo' className="flex-1 focus:outline-0 placeholder:text-greyy" type="text" placeholder="Add new..." onChange={handleChange} />
               <input name='date' type="date" className='w-[7.5rem] cursor-pointer focus:outline-0' defaultValue={Date.now()} min='2023-04-19' onChange={handleChange} />
               <button className="bg-bluey text-fwhite py-2 px-6 rounded-md text-xs font-semibold drop-shadow-xl duration-150 hover:scale-105" onClick={() => addTodo()}>ADD</button>
          </div>
     )
}

export default Header
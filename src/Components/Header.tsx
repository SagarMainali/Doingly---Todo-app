
function Header() {
     return (
          <div className='flex gap-6 bg-fwhite p-8 rounded-md'>
               <input className="flex-1" type="text" placeholder="Add new..." />
               <button className="bg-bluey text-fwhite py-2 px-6 rounded-md">ADD</button>
          </div>
     )
}

export default Header
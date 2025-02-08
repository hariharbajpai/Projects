import React from 'react'

const Navbar = () => {
  return (
     <nav className='flex justify-between bg-emerald-500 text-white py-2'>
        <div className="logo">
            <span className='font-bold text-xl mx-8  '>Listify</span>
        </div>
        <ul className="flex gap-8 mx-8">
        <li className='cursor-pointer hover:font-bold transition-all duration-150'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all duration-150'>Your Tasks</li>
        </ul>
     </nav>
  )
}

export default Navbar

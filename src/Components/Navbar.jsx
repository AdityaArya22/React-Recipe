import React, { useRef, useState } from 'react'

const Navbar = ({handleChange, handleSubmit ,logoClick}) => {
 
  return (
    <nav className='flex items-center justify-between md:p-8  bg-blue-500'>
      <div className="logo md:text-2xl cursor-pointer font-bold" onClick={logoClick}>RecipeBooks</div>
      <div className="serach flex md:flex-row flex-col">
        <input type="text" onChange={handleChange} className='border-2 md:px-3 py-1' placeholder='Serach ID' />
        <button type="button" onClick={handleSubmit} className='md:px-4 py-2 bg-purple-300 rounded-full hover:bg-purple-400 transition-colors ml-4 font-bold'>Submit</button>
      </div>
    </nav>
  )
}

export default Navbar

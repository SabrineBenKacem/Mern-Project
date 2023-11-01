import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <div>
        <nav className='flex justify-between p-6 items-center px-3 border-b-2 sticky top-0 bg-white'>
            <Link to={'/'} className='text-xl ml-3 font-burtons '>DreamCatcher</Link>
            <ul className='flex gap-6 mr-4 text-xl'>
                {/* <li className='font-bebas'>Home</li> */}
                <li>
                    <a href="#" className='rounded font-bebas tracking-wide hover:underline underline-offset-4'>Sign In</a>
                </li>
                <li>
                    <a href="#" className='rounded font-bebas tracking-wide py-2 px-3 border border-black hover:bg-black hover:text-white'>Register</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar
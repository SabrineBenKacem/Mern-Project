import React from 'react'
import '../index.css'
import { CarouselWithContent } from '../components/photographer/CarouselWithContent'
import Background from '../../public/pexels-atc-comm-photo-952260.jpg'

const Example = (props) => {

  return (
    <div className='min-h-screen'>
        <nav className='flex justify-between p-6 items-center px-3 border-b-2 sticky top-0 bg-white'>
            <h1 className='text-xl ml-3 font-burtons '>DreamCatcher</h1>
            <ul className='flex gap-3'>
                <li className='font-bebas'>Home</li>
                <li>
                    <a href="#" className='rounded font-bebas tracking-wide py-2 px-3  bg-black text-white hover:bg-blue-gray-600'>Log In</a>
                </li>
                <li>
                    <a href="#" className='rounded font-bebas tracking-wide py-2 px-3 border-2 border-black hover:bg-black hover:text-white'>Register</a>

                </li>
            </ul>
        </nav>
        <div style={{backgroundImage: `url(${Background})`, height:400, backgroundSize:"coontain"}}>
            {/* <CarouselWithContent/> */}
            
        </div>
        <div style={{backgroundImage: `url(${Background})`, height:400, backgroundSize:"coontain"}}>
            {/* <CarouselWithContent/> */}
            
        </div><div style={{backgroundImage: `url(${Background})`, height:400, backgroundSize:"coontain"}}>
            {/* <CarouselWithContent/> */}
            
        </div><div style={{backgroundImage: `url(${Background})`, height:400, backgroundSize:"coontain"}}>
            {/* <CarouselWithContent/> */}
            
        </div>
    </div>
  )
}

export default Example
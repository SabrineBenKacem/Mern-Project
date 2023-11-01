import React from 'react'
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const SignUp = (props) => {
  return (
    <div className='font-poppins'>
        {/* <nav className='flex justify-between p-6 items-center px-3 border-b-2 sticky top-0 bg-white'>
            <h1 className='text-xl ml-3 font-burtons '>DreamCatcher</h1>
            <ul className='flex gap-6 mr-4 text-xl'>
                <li>
                    <a href="#" className='rounded font-bebas tracking-wide hover:underline underline-offset-4'>Sign In</a>
                </li>
                <li>
                    <a href="#" className='rounded font-bebas tracking-wide py-2 px-3 border border-black hover:bg-black hover:text-white'>Register</a>
                </li>
            </ul>
        </nav> */}


        <main>
            <h1 className='text-center text-3xl font-poppins font-bold my-20'>How would you like to Register</h1>

            <div className='flex items-center justify-evenly mx-48'>
                <div className='card flex flex-col gap-6 border-dashed border w-96 p-2 rounded-md border-gray-400 '>
                    <div className='card-header'>
                        <img src="https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=360&w=712" alt="" className='rounded' />
                    </div>
                    <div className='card-body h-8 w-80 mx-auto mt-3'>
                        <p className='text-md text-gray-900 text-center'>I'm here to book a photographer for my event.</p>

                    </div>
                    <div className='card-footer mt-8'>
                 
                        <Link to={'/register/client'}>
                            <Button fullWidth className='rounded-md' style={{backgroundColor:"#479e83"}}>
                                Register as Client
                            
                            </Button>
                            </Link>
                    </div>
                    
                </div>

                {/* second Card */}

                <div className='card flex flex-col gap-6 border-dashed border w-96 p-2 rounded-md border-gray-400 '>
                    <div className='card-header'>
                        <img src="https://images.pexels.com/photos/3584930/pexels-photo-3584930.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=360&w=712" alt="" className='rounded' />
                    </div>
                    <div className='card-body h-8 w-80 mx-auto mt-3'>
                        <p className='text-md text-gray-900 text-center'>I'm here for work and to share my photos with the world.</p>

                    </div>
                    <div className='card-footer mt-8'>
                        
                            <Link to={'/register/photographer'}>
                            <Button fullWidth className='rounded-md' style={{backgroundColor:"#479e83"}}>
                                Register as Photographer
                            
                            </Button>
                            </Link>
                    </div>
                    
                </div>

            </div>
        </main>




    </div>
  )
}

export default SignUp
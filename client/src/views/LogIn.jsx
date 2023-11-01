import React from 'react'
// npm install react-icons --save
// AiFillLock
import '../index.css'
import {AiOutlineLock} from "react-icons/ai"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
import NavBar from '../components/NavBar';

const LogIn = (props) => {
  return (
    <>  
        <NavBar/>
        <div className='flex '>
            <div className='flex-1'>
                <img src="../public/pexels-mengliu-di-3679525.jpg" alt="" className='h-screen'/>
            </div>
            <div className='flex-1 '>
                <div className='flex flex-col items-center justify-center my-10'>
                    <div className='border w-10 rounded-full h-10 p-1' style={{backgroundColor:"#312b57"}}>
                        <AiOutlineLock className='text-2xl text-center text-white ml-[3px] mt-[2px]'/>
                    </div>
                    <div className='text-2xl font-medium mt-2'>
                        Sign in
                    </div>
                    <div className='flex flex-col gap-5 mt-10'>
                        <Input label="Email" size="lg" color='blue' className='w-96' />
                        <Input label="Password" size="lg" />
                        <button className='rounded-full py-2 text-white font-semibold'  style={{backgroundColor:"#499d9f"}}>
                            Sign In
                        </button>

                    </div>

                </div>
            </div>

        </div>
    </>
  )
}

export default LogIn
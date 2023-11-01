import React, {useState} from 'react'
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
import '../index.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = ({baseUrl, setIsLogged}) => {
    
    const [user, setUser] = useState({email:"",password:""})
    const [errorLog, setErrorLog] = useState({ message: ""})
    const navigate = useNavigate()
    const login = (e, loginUser) => {
        e.preventDefault()
        console.log("login user");
        console.log(loginUser);
        axios.post(baseUrl+'login',loginUser, {withCredentials:true})
        .then(serverResponse => {
            console.log(serverResponse)
            if (serverResponse.data.user.role == "c"){
                navigate('/client')
                setIsLogged(true)
            } else if (serverResponse.data.user.role == "p"){
                navigate('/photographer')
                setIsLogged(true)
            }
        })
        .catch(error => {
            console.log(error)
            const errs = { message: "" }
            // for (let key of Object.keys(error.response.data)) {
            //   errs[key] = error.response.data.message
            // }
            // seErrorLog({ ...errorLog, ...errs })
            
            setErrorLog(error.response.data)

          })
    }
  return (
    <>
    {/* <NavBar/> */}
    <div className='flex pt-10 justify-center h-screen bg-blue-gray-200'>
        <div className='card h-[700px] rounded-lg border border-gray-400 flex bg-white'>
            <div className='right-card'>
                <img src="../public/pexels-mengliu-di-3679525.jpg" alt="" className='h-[700px] rounded-l-lg'/>
            </div>
            <div className='left-card p-10 w-[400px] pt-20'>
            <div className='flex flex-col items-center justify-center my-10'>
                    <div className='border w-10 rounded-full h-10 p-1' style={{backgroundColor:"#312b57"}}>
                        <AiOutlineLock className='text-2xl text-center text-white ml-[3px] mt-[2px]'/>
                    </div>
                    <div className='text-2xl font-medium mt-2'>
                        Sign in
                    </div>
                    <div className='flex flex-col gap-5 mt-10'>
                    <form onSubmit={e=>{
                        login(e,user)}}>

                            {errorLog.message && <span className='text-red-700 text-sm'> {errorLog.message}</span>}
                            <div className='my-4'>
                                <Input label="Email" size="lg" color='blue-gray' className='w-96'
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                value={user.email} />
                            </div>

                            <div className='mb-4'>
                                <Input label="Password" size="lg" color='blue-gray' type='password'
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                value={user.password}/>
                            </div>

                            <button className='rounded-full w-full py-2 text-white font-semibold'  style={{backgroundColor:"#499d9f"}}>
                                Sign In
                            </button>

                    </form>

                    </div>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signin
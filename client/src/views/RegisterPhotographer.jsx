import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { AiOutlineLock } from "react-icons/ai"
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
import { Select, Option } from "@material-tailwind/react";
import axios from 'axios';
import '../index.css'
import { useNavigate } from 'react-router-dom';

const RegisterPhotographer = ({ baseUrl, setLoggedUser, setIsLogged }) => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        address: { country: "", city: "" },
        description:"",
        email: "",
        password: "",
        confirmPassword: "",
        pricePerHour: "",
        role: "p",
        profilePhoto: "https://th.bing.com/th/id/OIP.EHKlS38MIH4Am9QLr5SoIgHaHa?pid=ImgDet&rs=1"
    })
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        address: { country: "", city: "" },
        email: "",
        password: "",
        confirmPassword: "",
    })
    const navigate = useNavigate()
    const register = (e, newUser) => {
        e.preventDefault();
        axios.post(baseUrl + 'register', newUser, { withCredentials: true })
            .then(serverResponse => {
                console.log(serverResponse)
                setLoggedUser(newUser)
                setIsLogged(true)
                navigate('/photographer')
            })
            .catch(error => {
                console.log(error)
                const errs = {
                    firstName: "",
                    lastName: "",
                    address: { country: "", city: "" },
                    email: "",
                    password: "",
                    confirmPassword: "",
                }
                for (let key of Object.keys(error.response.data.errors)) {
                    errs[key] = error.response.data.errors[key].message
                }
                setErrors({ ...errors, ...errs })
            })
        // setUser({userName:"",email:"",password:"", confirmPassword:""})
    }
  return (
    <div>
        {/* <NavBar/> */}
        <div className=' flex pt-10 justify-center h-[1200px] bg-blue-gray-200'>
                <div className='card h-[1100px] rounded-lg border border-gray-400 flex bg-white mb-5'>
                    <div className='left-card'>
                        <img src="../public/pexels-mengliu-di-3679525.jpg" alt="" className=' h-[1100px] rounded-lg' />
                    </div>
                    <div className='right-card p-5 w-[500px] h-auto pt-5'>
                        <div className='flex flex-col items-center justify-center my-10'>
                            {/* <div className='border w-10 rounded-full h-10 p-1' style={{backgroundColor:"#312b57"}}>
                        <AiOutlineLock className='text-2xl text-center text-white ml-[3px] mt-[2px]'/>
                    </div> */}
                            <div className='text-2xl font-medium mt-2'>
                                Register
                            </div>
                            <div className='flex flex-col gap-10 mt-10 w-80 h-auto'>
                                <form onSubmit={e=>register(e,user)}>
                                    <div  className='mb-5'>
                                        <Input variant='standard' label="First Name" size="lg" color='blue-gray'
                                        onChange={e=>setUser({...user,firstName:e.target.value})}
                                        value={user.firstName} />
                                        {errors.firstName && <span className='text-red-600 text-xs'> {errors.firstName}</span>}
                                    </div>
                                    <div className='mb-5'>
                                        <Input variant='standard' label="Last Name" size="lg" color='blue-gray' className='w-[300px]'
                                        onChange={e=>setUser({...user,lastName:e.target.value})}
                                        value={user.lastName} />
                                        {errors.lastName && <span className='text-red-600 text-xs'> {errors.lastName}</span>}
                                    </div>
                                    <div className='mb-5'>
                                        <Input variant='standard' label="Email" size="lg" color='blue-gray' className='w-[300px]'
                                        onChange={e=>setUser({...user,email:e.target.value})}
                                        value={user.email} />
                                        {errors.email && <span className='text-red-600 text-xs'> {errors.email}</span>}
                                    </div>
                                    <div class="relative w-full min-w-[200px] mb-5">
                                        <textarea
                                        className="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-blue-gray-200 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                        onChange={e=>setUser({...user,description:e.target.value})}
                                        >
                                            {user.description}
                                        </textarea>
                                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-gray-200 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-gray-300 peer-focus:after:scale-x-100 peer-focus:after:border-blue-gray-200 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Short Description
                                        </label>
                                    </div>
                                        {/* <Select variant="standard" label="Country" color='blue-gray'>
                                        <Option>Material Tailwind HTML</Option>
                                        <Option>Material Tailwind React</Option>
                                        <Option>Material Tailwind Vue</Option>
                                        <Option>Material Tailwind Angular</Option>
                                        <Option>Material Tailwind Svelte</Option>
                                        </Select>
                                        <Select variant="standard" label="City" color='blue-gray'>
                                            <Option>Material Tailwind HTML</Option>
                                            <Option>Material Tailwind React</Option>
                                            <Option>Material Tailwind Vue</Option>
                                            <Option>Material Tailwind Angular</Option>
                                            <Option>Material Tailwind Svelte</Option>
                                        </Select> */}
                                    <div className='mb-5'>
                                        <Input variant='standard' label="Country" size="lg" color='blue-gray' className='w-[300px]'
                                        onChange={e=>setUser({...user,address:{...user.address,country:e.target.value}})}
                                        value={user.address.country} />
                                        {errors.country && <span className='text-red-600 text-xs'> {errors.country}</span>}
                                    </div>
                                    <div className='mb-5'>
                                        <Input variant='standard' label="City" size="lg" color='blue-gray' className='w-[300px]'
                                        onChange={e=>setUser({...user,address:{...user.address,city:e.target.value}})}
                                        value={user.address.city} />
                                        {errors.city && <span className='text-red-600 text-xs'> {errors.city}</span>}
                                    </div>
                                    <div className='mb-5'>
                                        <Input variant='standard' label="Price Per Hour $" type='number' size="lg" color='blue-gray' className='w-[300px]'
                                        onChange={e=>setUser({...user,pricePerHour:e.target.value})}
                                        value={user.pricePerHour} />
                                        {errors.Price && <span className='text-red-600 text-xs'> {errors.Price}</span>}
                                    </div>
                                    <div className='mb-5'>
                                        <Input variant='standard' label="Password" type='password' size="lg" color='blue-gray' className='w-[300px]'
                                        onChange={e=>setUser({...user,password:e.target.value})}
                                        value={user.password} />
                                        {errors.password && <span className='text-red-600 text-xs'> {errors.password}</span>}
                                    </div>
                                    <div className='mb-5'>
                                        <Input variant='standard' label="Confirm Password" type='password' size="lg" color='blue-gray' className='w-[300px]'
                                        onChange={e=>setUser({...user,confirmPassword:e.target.value})}
                                        value={user.confirmPassword} />
                                        {errors.confirmPassword && <span className='text-red-600 text-xs'> {errors.confirmPassword}</span>}
                                    </div>
                                    
                                    <button className='rounded-full w-full py-2 mt-14 text-white font-semibold' style={{ backgroundColor: "#499d9f" }}>
                                        Register
                                    </button>

                                </form>
                                {/* <p>{JSON.stringify(user)}</p> */}

                            </div>

                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default RegisterPhotographer
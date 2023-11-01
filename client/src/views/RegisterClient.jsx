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

const RegisterPhotographer = ({ baseUrl, setIsLogged }) => {

    const [client, setClient] = useState({
        firstName: "",
        lastName: "",
        address: { country: "", city: "" },
        email: "",
        password: "",
        confirmPassword: "",
        role: "c",
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
                setIsLogged(true)
                navigate('/client')
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
            {/* <NavBar /> */}
            <div className='flex pt-10 justify-center h-[900px] bg-blue-gray-200'>
                <div className='card h-[800px] rounded-lg border border-gray-400 flex bg-white mb-5'>
                    <div className='left-card'>
                        <img src="../public/pexels-mengliu-di-3679525.jpg" alt="" className='h-[800px] rounded-lg' />
                    </div>
                    <div className='right-card p-5 w-[500px] pt-5'>
                        <div className='flex flex-col items-center justify-center my-10'>
                            {/* <div className='border w-10 rounded-full h-10 p-1' style={{backgroundColor:"#312b57"}}>
                        <AiOutlineLock className='text-2xl text-center text-white ml-[3px] mt-[2px]'/>
                    </div> */}
                            <div className='text-2xl font-medium mt-2'>
                                Register
                            </div>
                            <div className='flex flex-col gap-10 mt-10 w-80'>
                                <form onSubmit={e=>register(e,client)}>
                                    <div  className='mb-5'>
                                        <Input variant='standard' label="First Name" size="lg" color='blue-gray'
                                        onChange={e=>setClient({...client,firstName:e.target.value})}
                                        value={client.firstName} />
                                        {errors.firstName && <span className='text-red-600 text-xs'> {errors.firstName}</span>}
                                    </div>
                                    <div className='mb-5'>
                                        <Input variant='standard' label="Last Name" size="lg" color='blue-gray' className='w-[300px]'
                                        onChange={e=>setClient({...client,lastName:e.target.value})}
                                        value={client.lastName} />
                                        {errors.lastName && <span className='text-red-600 text-xs'> {errors.lastName}</span>}
                                    </div>
                                    <div className='mb-5'>
                                        <Input variant='standard' label="Email" size="lg" color='blue-gray' className='w-[300px]'
                                        onChange={e=>setClient({...client,email:e.target.value})}
                                        value={client.email} />
                                        {errors.email && <span className='text-red-600 text-xs'> {errors.email}</span>}
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
                                        onChange={e=>setClient({...client,address:{...client.address,country:e.target.value}})}
                                        value={client.address.country} />
                                        {errors.country && <span className='text-red-600 text-xs'> {errors.country}</span>}
                                    </div>
                                    <div className='mb-5'>
                                        <Input variant='standard' label="City" size="lg" color='blue-gray' className='w-[300px]'
                                        onChange={e=>setClient({...client,address:{...client.address,city:e.target.value}})}
                                        value={client.address.city} />
                                        {errors.city && <span className='text-red-600 text-xs'> {errors.city}</span>}
                                    </div>
                                    <div className='mb-5'>
                                        <Input variant='standard' label="Password" type='password' size="lg" color='blue-gray' className='w-[300px]'
                                        onChange={e=>setClient({...client,password:e.target.value})}
                                        value={client.password} />
                                        {errors.password && <span className='text-red-600 text-xs'> {errors.password}</span>}
                                    </div>
                                    <div className='mb-5'>
                                        <Input variant='standard' label="Confirm Password" type='password' size="lg" color='blue-gray' className='w-[300px]'
                                        onChange={e=>setClient({...client,confirmPassword:e.target.value})}
                                        value={client.confirmPassword} />
                                        {errors.confirmPassword && <span className='text-red-600 text-xs'> {errors.confirmPassword}</span>}
                                    </div>
                                    
                                    <button className='rounded-full w-full py-2 mt-7 text-white font-semibold' style={{ backgroundColor: "#499d9f" }}>
                                        Register
                                    </button>

                                </form>
                                {/* <p>{JSON.stringify(client)}</p> */}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPhotographer
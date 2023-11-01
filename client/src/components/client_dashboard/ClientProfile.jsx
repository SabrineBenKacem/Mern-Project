import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'
import {
  Card,
 
  Button,
  CardFooter,
  
} from "@material-tailwind/react";

const ClientProfile = (props) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    address: {
      country: '',
      city: '',
    },
    email: '',
 
  });

  useEffect(() => {
    // Fetch logged-in user's profile
    axios
      .get('http://localhost:8000/api/loggedUser', { withCredentials: true })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  }, []);

  return (
    <Card className=" w-2/3 m-auto mt-10">
    <div className="container mx-auto pt-10">
    {/* <DefaultSidebar/> */}
      <h1 className="text-2xl font-semibold mb-12 ml-4 ">Your Profile Information</h1>
      <div className="space-y-4">
      
          <div className=' flex justify-between px-6'>
                <div>
                <p className=' font-semibold mt-4 '>First Name :</p>
                </div>
                <div className='w-[600px]'>
                <p className='flex-start text-lg   mt-4'>{user.firstName}</p>
                </div>
          </div>
      
        <div className=' flex justify-between px-6'>
                <div>
                <p className=' font-semibold  mt-4 '>Last Name :</p>
                </div>
                <div className='w-[600px]'>
                <p className='flex-start text-lg   mt-4'>{user.lastName}</p>
                </div>
               
            </div>
       
        <div className=' flex justify-between px-6'>
                <div>
                <p className=' font-semibold  mt-4 '>Country:</p>
                </div>
                <div className='w-[600px]'>
                <p className='flex-start text-lg   mt-4'>{user.address.country}</p>
                </div>
               
            </div>
      
        <div className=' flex justify-between px-6'>
                <div>
                <p className=' font-semibold  mt-4 '>City :</p>
                </div>
                <div className='w-[600px]'>
                <p className='flex-start text-lg   mt-4'>{user.address.city}</p>
                </div>
               
            </div>
       
        <div className=' flex justify-between px-6'>
                <div>
                <p className=' font-semibold  mt-4 '>Email :</p>
                </div>
                <div className='w-[600px]'>
                <p className='flex-start text-lg   mt-6'>{user.email}</p>
                </div>
               
            </div>
     
        

      </div>
    </div>
    <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        
    <Link to={'/client'}>
          <Button className='"inline-flex  w-40 items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-gray-300 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150'>
           Back
          </Button>
          </Link> 
          <Link to={'/client/edit/${user._id}'}>
          <Button className='"inline-flex  w-40 items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150'>
            Edit
          </Button>
          </Link>
      </CardFooter>
    </Card>
  );
};

export default ClientProfile;
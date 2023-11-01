import React from 'react'

import { BackgroundBlogCardPhotoLiked_I } from './likedPhotos/LikedPhoto_I';
import HandelLikedImg from './likedPhotos/HandelLikedImg';
import ClientBook from './ClientBook'
// import { IconButton } from "@material-tailwind/react";
const DashboardMain = ({user, baseUrl}) => {
    
       
  
    const [openedPhoto, setOpenedPhoto] = React.useState({open:false});
    const handleOpen = (name, avatarImg, bgImg) => setOpenedPhoto({open:!openedPhoto.open, phg:name, avatar:avatarImg, bg:bgImg});
    console.log(openedPhoto);
    const closeDialog = ()=>{
        setOpenedPhoto({...openedPhoto, open:!openedPhoto.open})
    }
    return (
        <>
        <div className=' grid  m-auto mb-20 grid-cols-4 xl:grid-cols-1 sm:grid-cols-2  gap-5 lg:gap-10 w-[1000px]'>
        <p className='font-bold text-3xl font-mono  text-gray-800 text-'>
        My Booking
        </p>
        </div>
        <div className=' grid mb-20  mt-7 '>
        <ClientBook user={user} baseUrl={baseUrl}/>
        </div>
        
        </>
    )
}

export default DashboardMain


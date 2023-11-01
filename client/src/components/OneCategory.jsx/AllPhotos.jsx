import React, { useEffect, useState } from 'react'
import { BackgroundBlogCardPhoto_I } from './photos/Photo_I'

import TestImg from './photos/TestImg';
import axios from 'axios';

// import { IconButton } from "@material-tailwind/react";
const AllPhotos = ({ category }) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/posts/categories/' + category)
            .then(serverResponse => {
                console.log(serverResponse.data, '😎😎😎😎')
                setPosts(serverResponse.data)
            }

            )
            .catch(error => {
                console.log(error)
            })
    }, [])

    console.log(posts, "🗒️🗒️🗒️🗒️🗒️🗒️🗒️🗒️🗒️🗒️🗒️")

    // Extract image path and first name and create a new object
    const categories = posts.map((item) => {
        return {
            bg: item.images[0].path, // Using optional chaining in case images is empty
            photographer: item.postedBy.firstName + ' ' + item.postedBy.lastName || "",
            avatar: item.postedBy.profilePhoto || "",
            id: item.postedBy._id
        };
    });

    console.log(categories, '🦭🦭🦭');

    



    const [openedPhoto, setOpenedPhoto] = React.useState({ open: false });
    const handleOpen = (name, avatarImg, bgImg) => setOpenedPhoto({ open: !openedPhoto.open, phg: name, avatar: avatarImg, bg: bgImg });
    console.log(openedPhoto);
    const closeDialog = () => {
        setOpenedPhoto({ ...openedPhoto, open: !openedPhoto.open })
    }
    return (
        <>
            <div className='   grid  m-auto mb-20 items-center grid-cols-3 xl:grid-cols-1 sm:grid-cols-2 justify-items-center gap-10 lg:gap-10 mt-28 w-[1000px]'>
                <p className='font-bold text-6xl font-mono  text-gray-800'>
                    All Photos
                </p>
            </div>
            <div className=' grid m-auto mb-20 items-center grid-cols-3 xl:grid-cols-3 sm:grid-cols-2 justify-items-center gap-7 lg:gap-2 mt-7 w-[1300px]'>
                {/* {categories.map((category,i)=>(
                        <>
                            <BackgroundBlogCardPhoto_I key={i} handleOpen={()=>handleOpen(category.photographer,category.avatar,category.bg )} avatar={category.avatar} bg={category.bg} phg={category.photographer} id={category.id}/>
                        </>
                    ))} */}

                {categories.map((category, i) => (
                    <BackgroundBlogCardPhoto_I
                    key={i}
                    handleOpen={() => handleOpen(category.photographer, category.avatar, category.bg)}
                    avatar={category.avatar}
                    bg={category.bg}
                    phg={category.photographer}
                    id={category.id}
                />
                
                ))}
            </div>
            <TestImg open={openedPhoto.open} close={closeDialog} avatar={openedPhoto.avatar} name={openedPhoto.phg} image={openedPhoto.bg} />
        </>
    )
}

export default AllPhotos





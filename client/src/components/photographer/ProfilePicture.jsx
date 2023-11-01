import React from 'react'
import { Avatar } from "@material-tailwind/react";

const ProfilePicture = (props) => {
  return (
    <div className='flex flex-row gap-5 items-center'>
      <Avatar src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" alt="avatar" size="xxl" />
      <h1 className='text-xl'>Ahmed Mohsen</h1>

    </div>
  )
}

export default ProfilePicture
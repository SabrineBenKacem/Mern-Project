import { Avatar } from "@material-tailwind/react";
 
import React from 'react'

const Header = () => {
  return (
    <div className="flex w-max items-end gap-4">

        <Avatar src="/img/face-2.jpg" alt="avatar" size="xxl" />
    </div>
  )
}

export default Header
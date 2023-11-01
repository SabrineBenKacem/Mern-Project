import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    CollapseProps,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function StickyNavbar({ baseUrl, isLogged, logout, role }) {
    console.log(role, 'ROLELELELELE')

    // const [isLogged, setIsLogged] = useState(false)

    // useEffect(() => {
    //     axios.get(baseUrl + 'loggedUser', { withCredentials: true })
    //       .then((res) => {
    //         console.log(res.data,'++++');
    //         setLoggedUser(res.data)
    //         setIsLogged(true)
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //         setIsLogged(false)
    //       });
    //   }, []);

    console.log(isLogged, '😡😡😡😡');
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className=" mb-2 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                {/* <a href="#" className="flex items-center">
                    
                </a> */}
            </Typography>

        </ul>
    );

    return (
        <div className=" max-h-[768px] w-full ">
            <Navbar className="sticky top-5 z-10 h-100 max-w-full rounded-none py-4 px-4 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-black">
                    <Typography
                        // as="a"
                        href="#"
                        className="mr-4 cursor-pointer text-xl ml-3 font-burtons"
                        variant="h4"
                    >
                        <Link to={'/'}>DreamCatcher</Link>
                    </Typography>
                    <div className="flex items-center gap-4">
                        {/* <div className="mr-6 hidden lg:block">{navList}</div> */}
                        {isLogged ?
                            <>
                                {role === 'c' && <Link to="/client" className="hover:underline">My Profile</Link>}
                                {role === 'p' && <Link to="/photographer" className="hover:underline">My Profile</Link>}
                                <Button
                                    variant="gradient"
                                    size="sm"
                                    className="hidden lg:inline-block" onClick={logout}>
                                    Log out
                                </Button></>
                            :

                            <ul  className='flex gap-6 mr-4 text-xl items-center'>
                                <li>
                                    <Link to={'/signin'}>
                                        <div
                                            // variant="gradient"
                                            // size="sm"
                                            className="rounded font-bebas tracking-wide hover:underline underline-offset-4"
                                        >
                                            Sign In
                                        </div>
                                    </Link>

                                </li>
                                <li>
                                    <Link to={'/register'}>
                                        <div
                                        
                                            className="rounded font-bebas tracking-wide py-2 px-3 border border-black hover:bg-black hover:text-white"
                                        >
                                            Register
                                        </div>
                                    </Link>

                                </li>
                            </ul>



                        }
                        {/* <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton> */}
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <Button variant="gradient" size="sm" fullWidth className="mb-2 ">
                        <Link to={'/signin'}>Login</Link>
                    </Button>
                    <Button variant="gradient" size="sm" fullWidth className="mb-2 ">
                        <Link to={'/register'}>Sign Up</Link>
                    </Button>
                </MobileNav>
            </Navbar>
        </div>
    );
}
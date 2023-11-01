import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios';
// import { Card, Typography } from "@material-tailwind/react";
import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip
} from "@material-tailwind/react";

const TABLE_HEAD = ["Photographer", "Category", "Status", "Created At"];


const BookingsClient = ({ baseUrl }) => {
    const [bookings, setBookings] = useState([]);
    const [pendingBookings, setPendingBookings] = useState([]);
    const [acceptedBookings, setAcceptedBookings] = useState([]);
    const [rejectedBookings, setRejectedBookings] = useState([]);
    // const [currentTabValue, setCurrentTabValue] = useState("pending");

    useEffect(() => {
        axios.get(baseUrl + 'bookings/client', { withCredentials: true })
            .then(response => {
                setBookings(response.data); // Update the bookings state with the response data
                filterBookings(response.data);
            })
            .catch(error => {
                console.log(error);
                console.log('Error');
            });
    }, []);

    const classes = "font-sm"

    // Function to filter bookings based on the selected tab value
    const filterBookings = (allBookings) => {
        const all = bookings;
        const pending = allBookings.filter(booking => booking.status === "pending");
        const accepted = allBookings.filter(booking => booking.status === "accepted");
        const rejected = allBookings.filter(booking => booking.status === "rejected");

        setPendingBookings(pending);
        setAcceptedBookings(accepted);
        setRejectedBookings(rejected);
    };
    // console.log(acceptedBookings, '😫😫😫😫😫😫')
    return (
        <div className='w-3/4 mt-5'>
           
            <Card className="h-full w-auto overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(({ photographer, category, status, createdAt, _id }, index) =>
                            // const isLast = index === bookings.length - 1;
                            // const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            <tr key={index}>
                                <td className={classes}>
                                    <div className="flex items-center gap-3">
                                        {/* <Avatar src={client.profilePhoto} alt={client.firstName} size="sm" /> */}
                                        <div className="flex flex-col">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {photographer.firstName} {photographer.lastName}
                                            </Typography>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal opacity-70"
                                            >
                                                {photographer.email}
                                            </Typography>
                                        </div>
                                    </div>
                                    {/* <div className="font-light">{photographer.firstName} {photographer.lastName}</div> */}
                                </td>
                                <td className={classes}>
                                    <div>{category}</div>
                                </td>
                                <td className={classes}>
                                    <div>
                                        <Chip
                                            variant="ghost"
                                            className='w-20'
                                            size="sm"
                                            value={status}
                                            color={
                                                status === "pending"
                                                    ? "yellow"
                                                    : status === "accepted"
                                                        ? "green"
                                                        : status === "declined"
                                                            ? "red"
                                                            : "purple" // Provide a default color if none of the conditions match
                                            }
                                        />
                                    </div>
                                </td>
                                <td className={classes}>
                                    <div>{new Date(createdAt).toLocaleDateString()}</div>
                                </td>
                                {/* <td className={classes}>
                                    {bookings.status === "pending" &&
                                        <div className='flex'>
                                            <Button color='green' onClick={() => accept(_id)}>Accept</Button>
                                            <Button color='red' onClick={() => decline(_id)}>Decline</Button>
                                        </div>
                                    }

                                </td> */}
                            </tr>

                        )}
                    </tbody>
                </table>
            </Card>



            <Link to={'/client'}>
          <button className='"inline-flex mt-4 w-40 items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-gray-300 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150'>
           Back
          </button>
          </Link> 
        </div>
    )
}

export default BookingsClient
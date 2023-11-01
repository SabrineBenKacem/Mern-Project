import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

import {
    Card,
    Select,
    Option,
    Input,
    Checkbox,
    Typography,
} from "@material-tailwind/react";

const AddBookingTwo = ({photographer_id}) => {
    const [open, setOpen] = React.useState(false);
    console.log(':::::::::😢',photographer_id)
  const handleOpen = () => setOpen(!open);

    const currentDate = new Date().toISOString().slice(0, 16);
    // console.log(currentDate, '⏰⏰');

    const [user, setLoggedUser] = useState({})
    // get logged user
    useEffect(() => {
        axios.get('http://localhost:8000/api/loggedUser', { withCredentials: true })
            .then(serverResponse => {
                console.log("USER",serverResponse.data);
                // console.log('helloooo??', serverResponse.data._id);
                setLoggedUser(serverResponse.data)
                // console.log("logggged",user)
                // setJobs(serverResponse.data)
                // setDeleted(false)
            })
            .catch(error => {
                console.log(error)
                // console.log("teststtstesttestetstets");
            })
    }, [])

    const [booking, setBooking] = useState({
        client: user._id,
        photographer: photographer_id,
        category: "",
        address: {
            country: "",
            city: ""
        },
        dateTime: "",
        duration: 1
    })

    

    const createBooking = (e) => {
        e.preventDefault()
        console.log(booking,'😡😡😡');
        axios.post('http://localhost:8000/api/bookings', booking, { withCredentials: true })
            .then(serverResponse => {
                console.log('data',serverResponse.data);
                // setBooking({...booking, client:user_copie._id})
                // setBooking(booking)
              
                handleOpen(false);
            })
            .catch(error => {
                console.log(error)
            })
    }
  return (
    <div>

<Button className="w-[110px]" onClick={handleOpen}>
        Book
      </Button>
      <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Book Your Photographer</DialogHeader>
      <DialogBody divider>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={e => createBooking(e)}>

                        <div className="mb-4 flex flex-col gap-6">
                           
                            {/* <Input size="lg" label="photographer id" onChange={e => setBooking({ ...booking, photographer: e.target.value })} */}
                                {/* value={booking.photographer} /> */}
                           
                            <select
                                className="block w-full px-4 py-2 border border-gray-400 rounded-lg bg-white focus:outline-none focus:border-gray-500"
                                // variant="outlined"
                                label="Type of Event"
                                onChange={(e) => setBooking({ ...booking, category: e.target.value })}
                                value={booking.category}
                            >   
                           
                                <option value="">Choose a category for your event</option>
                                <option value="Party">Party</option>
                                <option value="Portrait">Portrait</option>
                                <option value="Wedding">Wedding</option>
                                <option value="Food">Food</option>
                                <option value="Product">Product</option>
                                <option value="Conference">Conference</option>
                                <option value="Sports">Sports</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Family">Family</option>
                            </select>
                            <Input size="lg" label="country"
                                onChange={e => setBooking({ ...booking, client:user._id, photographer:photographer_id, address: { ...booking.address, country: e.target.value } })}
                                value={booking.address.country} />
                            <Input size="lg" label="city" onChange={e => setBooking({ ...booking, address: { ...booking.address, city: e.target.value } })}
                                value={booking.address.city} />
                            <label for="birthdaytime" class="block text-gray-700 font-bold mb-2">When (date and time):</label>
                            <input type="datetime-local" id="birthdaytime" name="birthdaytime" class="border border-gray-400 rounded-lg py-2 px-3 w-full focus:outline-none  focus:border-black"
                                min={currentDate} placeholder="datetime"
                                onChange={e => setBooking({ ...booking, dateTime: e.target.value })}
                                value={booking.dateTime} />
                           
                            <Input size="lg" label="Duration (in hours)" type="number" min={1} max={5}
                                onChange={e => setBooking({ ...booking, duration: e.target.value })}
                                value={booking.duration} />


                                {/* <div className="flex justify-end">
                                    
                                    <Button variant="gradient" color="green">
                                        <span>Confirm</span>
                                    </Button>

                                </div> */}

                                <button>Sumbit</button>

                        </div>


                    </form>
                    </DialogBody>
                    {/* <DialogFooter>
          
        </DialogFooter> */}
                    </Dialog>
    </div>
  )
}

export default AddBookingTwo
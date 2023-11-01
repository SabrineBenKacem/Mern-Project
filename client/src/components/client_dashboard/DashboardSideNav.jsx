import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { CalendarIcon, HomeIcon } from "@heroicons/react/24/outline";

const DashboardSideNav = (props) => {
    // const navigate = useNavigate()
    return (
        <Card className=" sticky top-0  h-[calc(60vh-0rem)] w-full max-w-[20rem] p-4 mt-16 shadow-none ">
            <List>
                <ListItem>
                    <ListItemPrefix>
                        <HomeIcon className="h-5 w-5" />
                    </ListItemPrefix>
                  <Link to={'/'}>Home</Link>
                </ListItem>

                <ListItem>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                  
                    <Link to={'/client/profile'}>Profile</Link>
                </ListItem>


                <ListItem>
                    <ListItemPrefix>
                        <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Inbox
                    <ListItemSuffix>
                        <Chip value="0" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                </ListItem>

                <ListItem>
                    <ListItemPrefix>
                        <CalendarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                   
                    <Link to={'/bookings/client'}> Book</Link>
                </ListItem>

                <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    
          
                    <Link to={'/client/edit/${user._id}'}>Settings</Link>
                    
                </ListItem>

                <ListItem>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Link to={'/logout'}>Logout</Link>
                   
                </ListItem>
            </List>
        </Card>
    );
}
export default DashboardSideNav;
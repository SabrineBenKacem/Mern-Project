import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
import {BsCamera} from 'react-icons/bs';

export function BlogCardII() {
    return (
        <Card className="max-w-[24rem] overflow-hidden shadow-none">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none h-[300px] w-[300px] flex  justify-center"
            >
<div className="border border-blue-gray-500  p-3 w-56 h-56 bg-blue-gray-500 rounded-full flex justify-center items-center">                    <BsCamera size={150} color="white"/>
                </div>

            </CardHeader>
            <CardBody>
                <Typography className="text-center" variant="h4" color="blue-gray">
                    Enjoy Your Photoshoot
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                    You plan with your photographer, receive tips and reminders, and show up the day of your photoshoot for a unique, fun, hassle-free session!             
                </Typography>
            </CardBody>

        </Card>
    );
}
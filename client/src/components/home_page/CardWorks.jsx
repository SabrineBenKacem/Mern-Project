import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
import { IoCalendarOutline } from 'react-icons/io5';

export function BlogCard() {
    return (
        <Card className="max-w-[24rem] overflow-hidden shadow-none">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none h-[300px] w-[300px] flex  justify-center"
            >
                <div className="border border-blue-gray-500  p-3 w-56 h-56 bg-blue-gray-500 rounded-full flex justify-center items-center">
                    <IoCalendarOutline size={150} color="white" />
                </div>
            </CardHeader>
            <CardBody>
                <Typography className="text-center" variant="h4" color="blue-gray">
                Book a Photographer
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                Using our online platform, choose a photographer based on portfolio, location and availability. Then book your photoshoot and start chatting with your personal photographer.
                </Typography>
            </CardBody>

        </Card>
    );
}
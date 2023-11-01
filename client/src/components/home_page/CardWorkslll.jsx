import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
import { FaPhotoVideo } from 'react-icons/fa';


export function BlogCardIII() {
    return (
        <Card className="max-w-[24rem] overflow-hidden shadow-none">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none h-[300px] w-[300px] flex  justify-center"
            >
<div className="border border-blue-gray-500  p-3 w-56 h-56 bg-blue-gray-500 rounded-full flex justify-center items-center">                    <FaPhotoVideo size={150} color="white" />
                </div>

            </CardHeader>
            <CardBody>
                <Typography className="text-center" variant="h4" color="blue-gray">
                Receive Photos
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                Within 24-48 hours of your photoshoot, you’ll be able to access your private online photo gallery to start downloading high-res images, sharing pics and buying personalized products.
                </Typography>
            </CardBody>

        </Card>
    );
}
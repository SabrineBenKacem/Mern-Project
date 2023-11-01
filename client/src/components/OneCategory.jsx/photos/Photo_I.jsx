import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const cardStyle = {}
export function BackgroundBlogCardPhoto_I({ avatar, phg, bg, handleOpen, id }) {
    
    const naviagte = useNavigate()
    console.log(bg, '😡💲')
    // const bg_class = `group-hover:scale-110 ease-out duration-300 absolute inset-0 m-0 h-full w-full bg-[url('${bg}')] bg-cover bg-center`

    // const bgImageUrl = "http://localhost:8000/images/1695847882095pexels-artem-balashevsky-18394309.jpg";

    // const bg_class = `group-hover:scale-110 ease-out duration-300 absolute inset-0 m-0 h-full w-full bg-cover bg-center`;
    //const bg_class="group-hover:scale-110 ease-out duration-300 absolute inset-0 m-0 h-full w-full bg-[url('"+bg+"')] bg-cover bg-center"



    // Now, you can apply the background image using inline CSS
    // useEffect(() => {
    //     const elementWithBackground = document.getElementById("your-element-id");
    //     if (elementWithBackground) {
    //       elementWithBackground.style.backgroundImage = `url('${bgImageUrl}')`;
    //     }
    //   }, []); 

    //console.log(bg_class);

    return (
        <Card onClick={handleOpen}
            shadow={false}
            className="cursor-pointer relative grid h-[30rem] w-full max-w-[28rem] items-end justify-start overflow-hidden text-center group  "
        >
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                style={{backgroundImage: `url('${bg}')`}}
                className={`group-hover:scale-110 ease-out duration-300 absolute inset-0 m-0 h-full w-full bg-[url('${bg}')] bg-cover bg-center`}
            >
                <div className="absolute inset-0 h-full w-full bg  group-hover:bg-gradient-to-t from-black/30 via-black/30 " />
            </CardHeader>
            
            {/*  */}
            <CardBody className="py-14 px-6 md:px-12 group-hover overflow-hidden aspect-video cursor-pointer relative group">
                <div className="gap-2 group-hover:opacity-100 group-hover:translate-y-8 translate-y-20 pb-10 transform transition duration-200 ease-in-out flex items-center">

                    <Avatar
                        size="sm"
                        variant="circular"
                        alt="tania andrew"
                        className="border-2 border-white"
                        src={avatar}
                    />
                    <Typography className="text-white-400 font-light text-s text-white text-center" >
                        <Link to={`/photographer/${id}`}>{phg}</Link>
                    </Typography>
                </div>
            </CardBody>

        </Card>
    );
}
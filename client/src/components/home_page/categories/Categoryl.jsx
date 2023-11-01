import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";

export function BackgroundBlogCard_I({categoryName, bg}) {
    return (
        <Card
            shadow={false}
            className="cursor-pointer relative grid h-[30rem] w-96 max-w-[28rem] items-end justify-center overflow-hidden text-center group"
        >
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                style={{backgroundImage: `url('${bg}')`}}
                className={`group-hover:scale-110 ease-out duration-300 absolute inset-0 m-0 h-full w-full bg-[url('${bg}')] bg-cover bg-center`}
                // className="group-hover:scale-110 ease-out duration-300 absolute inset-0 m-0 h-full w-full rounded-none bg-[url('../../public/categories/Party/Bg_Img/pexels-photo-1540406.jpeg')] bg-cover bg-center"
            >
                <div className=" absolute inset-0 h-full w-full bg  group-hover:bg-gradient-to-t from-black/30 via-black/30 " />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12 group-hover ">

                <Typography className=" mb-4 text-white-400 font-bold text-3xl  text-white" >
                    {categoryName}
                </Typography>

                
            </CardBody>
        </Card>
    );
}
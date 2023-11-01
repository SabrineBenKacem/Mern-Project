import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";


export function BackgroundBlogCardPhotoLiked_I({avatar, phg, bg, handleOpen}) {
    const bg_class=`group-hover:scale-110 ease-out duration-300 absolute inset-0 m-0 h-full w-full bg-[url('${bg}')] bg-cover bg-center`
    
    return (
        <Card onClick={handleOpen}
            shadow={false}
            className="cursor-pointer relative grid h-[30rem] w-full max-w-[28rem] items-end justify-start overflow-hidden text-center group  "
        >
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className={bg_class}
            >
                <div className="absolute inset-0 h-full w-full bg  group-hover:bg-gradient-to-t from-black/30 via-black/30 " />
            </CardHeader>
            <CardBody className="py-14 px-6 md:px-12 group-hover overflow-hidden aspect-video cursor-pointer relative group">
    <div className="gap-2 group-hover:opacity-100 group-hover:translate-y-8 translate-y-20 pb-10 transform transition duration-200 ease-in-out flex items-center">
        
        <Avatar
            size="sm"
            variant="circular"
            alt="tania andrew"
            className="border-2 border-white"
            src={avatar}
        />
        <Typography className="text-white-400 font-light text-s text-white text-center">
            {phg}
        </Typography>
    </div>
</CardBody>

        </Card>
    );
}
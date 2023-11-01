import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";

export function BackgroundBlogCard_II() {
    return (
        <Card
            shadow={false}
            className="cursor-pointer relative grid h-[30rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="hover:scale-110 ease-out duration-300 absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
            >
                <div className=" absolute inset-0 h-full w-full bg  hover:bg-gradient-to-t from-black/30 via-black/30 " />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">

                <Typography className=" mb-4 text-white-400 font-bold text-3xl  text-white" >
                    Parties
                </Typography>

                
            </CardBody>
        </Card>
    );
}
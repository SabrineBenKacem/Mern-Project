import {
    Card,
    CardHeader,
    CardBody,
} from "@material-tailwind/react";

export function PhotoPhg({bg, handleOpen}) {
    console.log(bg,'🦆🦆')
    // const bg_class=`group-hover:scale-110 ease-out duration-300 absolute inset-0 m-0 h-full w-full bg-[url('${bg}')] bg-cover bg-center`
    // const bg_class="group-hover:scale-110 ease-out duration-300 absolute inset-0 m-0 h-full w-full bg-[url('http://localhost:8000/images/1695888112546pexels-artem-balashevsky-18394309.jpg')] bg-cover bg-center"
    // const bg_class = `group-hover:scale-110 ease-out duration-300 absolute inset-0 m-0 h-full w-full bg-url('${bg}') bg-cover bg-center`;

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
            <CardBody className="py-14 px-6 md:px-12 group-hover overflow-hidden aspect-video cursor-pointer relative group">
</CardBody>

        </Card>
    );
}
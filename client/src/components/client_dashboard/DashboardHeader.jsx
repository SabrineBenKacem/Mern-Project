import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

export function CardDefault({user}) {
    // console.log(user,'😶‍🌫️😶‍🌫️')
    return (
        <Card className="   grid ms-5  grid-cols-5 xl:grid-cols-1  justify-items-start ap-10 lg:gap-10 mt-28 shadow-none ">          
            <CardHeader className="mt-6 mb-10 object-cover object-center shadow-none " >
                <div className="flex items-center">
                <img
                    // src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    src={user.profilePhoto}
                    alt="card-image"
                    className="h-[150px] w-[150px] rounded-full border-4 border-gray-300 p-0.5 object-cover object-center  "
                    
                />
                <Typography variant="h3" color="blue-gray" className="ms-8 ">
                    {user.firstName} {user.lastName}
                </Typography>
                </div>
            </CardHeader>

            {/* <CardBody>
                <button>

                </button>
            </CardBody> */}
        </Card>
    );
}
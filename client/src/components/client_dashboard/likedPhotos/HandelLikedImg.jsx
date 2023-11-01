import React from 'react'
import {
    Dialog,
    DialogHeader,
    DialogBody,
    Avatar,
    IconButton,
    Typography,
} from "@material-tailwind/react";

const HandelLikedImg = ({open, close, name, avatar, image}) => {
    return (
        <>
            <Dialog size="m" open={open} handler={close}>
                <DialogHeader className="justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar
                            size="sm"
                            variant="circular"
                            alt={name}
                            src={avatar}
                        />
                        <div className="-mt-px flex flex-col">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-medium cursor-pointer"
                            >
                                {name}
                            </Typography>
                            <Typography
                                variant="small"
                                color="gray"
                                className="text-xs font-normal"
                            >
                            </Typography>
                        </div>
                    </div>

                </DialogHeader>
                <DialogBody divider={true} className="p-0">
                    <img
                        alt="nature"
                        className="h-[40rem] w-full object-cover object-center"
                        src={image}
                    />
                </DialogBody>

            </Dialog>
        </>
    )
}

export default HandelLikedImg
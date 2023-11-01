import { Typography } from "@material-tailwind/react";

export function ImgWithBlurredCaption({category, cover}) {
    
    return (
        <figure className="relative h-[500px] w-full">
            <img
                className="h-[500px] w-full object-cover object-center"
                src={cover}
                alt="nature image"
            />
            <figcaption className="absolute top-64  w-full  ">
                <div className="flex justify-center items-center">
                    <div className="text-center text-7xl text-white font-extrabold tracking-wide ">
                        {category}
                    </div>
                </div>
            </figcaption>
        </figure>
    );
}






import React from 'react'
import { StickyNavbar } from '../components/home_page/Nav'
import { FooterWithSocialLinks } from '../components/home_page/Footer'
import AllPhotos from '../components/OneCategory.jsx/AllPhotos'
import { ImgWithBlurredCaption } from '../components/OneCategory.jsx/Cover'
import { useParams } from 'react-router-dom'
// import ExampleComponent from '../components/OneCategory.jsx/TestOnHover'




const OneCategory = () => {
    const categories = [
        {
          name:"Party",
          bg: "../../public/categories/Party/Bg_Img/pexels-photo-1540406.jpeg",
          cover: "../../public/categories/Party/Cover/pexels-photo-1587927.jpeg"
        },
        {
          name:"Portrait",
          bg: "../../public/categories/Portrait/Bg_Img/pexels-photo-3748399.webp",
          cover: "../../public/categories/Portrait/Cover/pexels-photo-91227.webp"
        },
        {
          name:"Wedding",
          bg: "../../public/categories/Wedding/Bg_Img/pexels-photo-1244627.jpeg",
          cover: "../../public/categories/Wedding/Cover/pexels-photo.jpg"
        },
        {
          name:"Food",
          bg: "../../public/categories/Food/Bg_Img/pexels-photo-1373915.webp",
          cover: "../../public/categories/Food/Cover/pexels-photo-1435904.jpeg"
        },
        {
          name:"Product",
          bg: "../../public/categories/Product/Bg_Img/pexels-photo-4202325.webp",
          cover: "../../public/categories/Product/Cover/pexels-photo-8450212.webp"
        },
        {
          name:"Conference",
          bg: "../../public/categories/Conference/Bg_Img/pexels-photo-3321796.jpeg",
          cover: "../../public/categories/Conference/Cover/pexels-photo-2833037.webp"
        },
        {
          name:"Sports",
          bg: "../../public/categories/Sport/Bg_Img/pexels-photo-6551174.webp",
          cover: "../../public/categories/Sport/Cover/pexels-photo-273786.webp"
        },
        {
          name:"Fashion",
          bg: "../../public/categories/Fashion/Bg_Img/pexels-sk-1477437.jpg",
          cover: "../../public/categories/Fashion/Cover/pexels-pixabay-262039.jpg"
        },
        {
          name:"Family",
          bg: "../../public/categories/Family/Bg_Img/pexels-photo-9705763.jpeg",
          cover: "../../public/categories/Family/Cover/pexels-photo-5637704.jpeg"
        }
        
      ]


    const {category} = useParams()

    const getBgAndCoverByName = (nameToFind) => {
        // Iterate through the categories array to find the entry with the matching name
        for (const category of categories) {
          if (category.name === nameToFind) {
            // Return an object with the 'bg' and 'cover' paths
            return {
              bg: category.bg,
              cover: category.cover
            };
          }
        }
        // If no matching name is found, return null or handle the error as needed
        return null;
      }

    const nameToFind = category; // Replace with the name you want to search for
    const result = getBgAndCoverByName(nameToFind);
    console.log("reultccc",result)
    return (
        <>
            {/* <StickyNavbar/> */}
            <ImgWithBlurredCaption category={category} cover={result.cover}/>
            {/* <CoverImage/> */}
            {/* <ExampleComponent/> */}
            <AllPhotos category={category}/>
            <FooterWithSocialLinks/>
        </>
    )
}

export default OneCategory
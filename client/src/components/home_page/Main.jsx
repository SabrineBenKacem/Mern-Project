import React from 'react'
import { BackgroundBlogCard_I } from './categories/Categoryl'
import { BackgroundBlogCard_II } from './categories/Categoryll'
import { BackgroundBlogCard_III } from './categories/Categorylll'
import { BackgroundBlogCard_IV } from './categories/CategorylV'
import { BackgroundBlogCard_V } from './categories/CategoryV'
import { BackgroundBlogCard_VI } from './categories/CategoryVl'
import { Link } from 'react-router-dom'


const Main = () => {

  // const categories = ["Party","Portrait","Wedding","Food","Product","Conference","Sports","Fashion","Family"]
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
  return (
    <>
          <div className='   grid  m-auto mb-20 items-center grid-cols-5 xl:grid-cols-1 sm:grid-cols-2 justify-items-center gap-10 lg:gap-10 mt-28 w-[1000px]'>
          <p className='font-bold text-6xl font-mono  text-gray-800'>
              All Categories</p>
          </div>
        <div className=' grid m-auto mb-20 items-center grid-cols-3 xl:grid-cols-3 sm:grid-cols-2 justify-items-center gap-7 lg:gap-5 mt-7 w-[1300px]'>
            {/* <BackgroundBlogCard_I/>
            <BackgroundBlogCard_II/>
            <BackgroundBlogCard_III/>
            <BackgroundBlogCard_IV/>
            <BackgroundBlogCard_V/>
            <BackgroundBlogCard_VI/> */}
            
            {categories.map(category=><Link to={`/categories/${category.name}`}>
                      <BackgroundBlogCard_I categoryName={category.name} bg={category.bg}/>
                  </Link>)}
        </div>

    </>
  )
}

export default Main
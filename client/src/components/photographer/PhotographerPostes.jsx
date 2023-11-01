import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom'
import {TbTrashOff} from 'react-icons/tb'
const PhotographerPosts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    // Fetch photographer's posts
    axios.get('http://localhost:8000/api/posts/photographer',{withCredentials: true}) // Adjust the URL to match your server endpoint
      .then((response) => {
        setPosts(response.data)
        console.log(response.data);;
      })
      
      .catch((error) => {
        console.error('Error fetching photographer posts:', error);
      });
  }, []);
  const deletePic= (id) => 
  {
    axios.delete(`http://localhost:8000/api/posts/${id}`,{withCredentials: true})
    .then(response=> {
      console.log(response)
      const filteredPhotos = posts.filter(post => post._id != id)
      setPosts(filteredPhotos)
    })
    .catch(error => console.log(error))
  }
  return (
    <div className="container mx-auto py-8">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {posts.map((post) => (
          <>
          <div key={post._id} className="bg-white shadow-md rounded-lg overflow-hidden text-center">
            
            <img
              src={post.images[0].path} // Assuming images are stored as an array in the post object
              alt="Post"
              className="w-full h-[400px] object-cover"
            />
            <div className='p-7 flex justify-center cursor-pointer'>
            <TbTrashOff onClick={()=>{
                deletePic(post._id);
                navigate('/photographer')}}/>  
            {/* <TbTrashOff onClick={()=>deletePic(post._id)} navigate('/photographer')}}/> */}
          </div>
          </div>
          
          </>
        ))}
      </div>
    </div>
  );
};

export default PhotographerPosts;

import axios from 'axios';
import React, { useState } from 'react'
import PostForm from '../components/photographer/PostForm';


const PostFormView = (props) => {
    const [uploadedImage, setUploadedImage] = useState(null);

//  const handleImageUpload = async (formData) => {
//   try {
//     const response = await axios.post('http://localhost:8000/api/posts', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     console.log('Server Response:', response); // Log the entire response object

//     if (response.status === 200) {
//       alert('Image uploaded successfully.');
//       const responseData = response.data;
//       const imageUrl = responseData.images[0];
//       setUploadedImage(imageUrl);
//     } else {
//       alert(`Error uploading image. Server response: ${response.status}`);
//       console.error(response.data);
//     }
//   } catch (error) {
//     alert('Error uploading image. Check the console for details.');
//     console.error('Error uploading image:', error);
//   }
// };


const handleImageUpload = async (formData) => {
  try {
    const response = await axios.post('http://localhost:8000/api/posts/',  formData, {withCredentials: true}
    );
    // try {
    //   const response = await axios.post('http://localhost:8000/api/posts/',  formData,  {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   },{ withCredentials: true });

    console.log('Server Response:', response); // Log the entire response object

    if (response.status === 201) {
      alert('Image uploaded successfully.');
      const responseData = response.data;
      const imageUrl = responseData.images[0];
      setUploadedImage(imageUrl);
      props.close()
    } else {
      alert(`Error uploading image. Server response: ${response.status}`);
      console.error(response.data);
    }
  } catch (error) {
    alert('Error uploading image. Check the console for details.');
    console.error('Error uploading image:', error);
  }
};

    
  return (
    <>
    
    <PostForm onSubmit={handleImageUpload}/>
    <button type="button" className="text-sm font-semibold text-gray-900 mr-2" onClick={props.close}>
      Cancel
    </button>
      {/* <div>
        Display the uploaded image
        {uploadedImage && <img src={uploadedImage} alt="Uploaded" />}
      </div> */}
    
    </>
  )
}

export default PostFormView
import React, { useState } from 'react';
import axios from 'axios';
import { PhotoIcon } from '@heroicons/react/24/solid';

const PostForm = ({ onSubmit }) => {
  const [images, setImages] = useState(null);
  const [category, setCategory] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const categories = ["Party","Portrait","Wedding","Food","Product","Conference","Sports","Fashion","Family"];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImages(file);

    const previewURL = URL.createObjectURL(file);
    setImagePreview(previewURL);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!images || !category) {
      alert('Please select an image and category before uploading.');
      return;
    }

    const formData = new FormData();
    formData.append('images', images);
    formData.append('category', category);

    try {
      await onSubmit(formData);
      // setImages(null);
      // setCategory('');
      // setImagePreview(null);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="py-4 px-6 overflow-y-auto"> {/* Add overflow-y-auto here */}
        
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="mb-4">
                <label htmlFor="category" className="block text-xl font-medium leading-5  text-gray-900 mb-5">
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={handleCategoryChange}
                  className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="images" className="block text-xl font-medium leading-5 text-gray-900">
                  Add an Image
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-400/25 px-6 py-10">
                  <div className="text-center">
                    {/* <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="images"
                        className="text-center relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        {/* <span>Upload an image</span> */}
                        <span><input type="file" id="image" accept="image/*" onChange={handleImageChange} /></span>
                        
                      </label>
                      
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    
                  </div>
                </div>
              </div>
              {/* {imagePreview && <img src={imagePreview} alt="Preview" className="mt-4 mx-auto" />} */}
            </div>
            <div className="mt-6 flex justify-end">
              <button type="submit" className="text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 py-2 px-4 rounded-md">
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostForm;

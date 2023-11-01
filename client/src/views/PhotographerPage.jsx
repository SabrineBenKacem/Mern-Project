import React, { useEffect, useState } from 'react'
import { StickyNavbar } from '../components/home_page/Nav'
import { PhotographerPage_Header } from '../components/photographer/PhotographerPage_Header'
import PhotographerPage_Main from '../components/photographer/PhotographerPage_Main'
import { FooterWithSocialLinks } from '../components/home_page/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PhotographerPage = () => {
  const {id} = useParams()
  const [photographer, setPhotographer] = useState([])
  const [posts, setPosts] = useState([])
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")

  // get photographer
  useEffect(()=>{
    axios.get('http://localhost:8000/api/users/'+id)
    .then(response=>{
      // console.log(response.data,'😢😢😢')
      // console.log(response.data.address.country,'😢😢😢')
      setPhotographer(response.data)
      setCountry(response.data.address.country)
      setCity(response.data.address.city)
      // console.log(photographer._id,'🆔🆔🆔')
    })
    .catch(error => {
      console.error(error);
    })
  },[id])

    // get posts by photographer id
  useEffect(() => {
    // This useEffect will run whenever 'photographer' state changes
    // console.log(photographer._id, '🆔🆔🆔');
    axios.get('http://localhost:8000/api/posts/photographer/'+id)
    .then(response=>{
      // console.log(response.data, 'hello')
      setPosts(response.data)
    })
    .catch(error => {
      console.error(error);
    })
  }, [photographer]); // Add 'photographer' as a dependency


  console.log(id,'iddd')
  return (
    <div>
        {/* <StickyNavbar/> */}
        <div>
                <PhotographerPage_Header photographer={photographer} country={country} city={city} />
                <PhotographerPage_Main posts={posts}/>
        </div>
        <FooterWithSocialLinks/>
    </div>
  )
}

export default PhotographerPage
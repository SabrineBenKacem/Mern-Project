import { useState, useEffect } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import axios from 'axios'
import PhotographerDashboard from './views/PhotographerDashboard'
// import { DefaultSidebar } from './components/photographer/DefaultSidebar'

import SignUp from './views/SignUp'

import './App.css'
import Signin from './views/Signin'
import Home from './views/Home'
import RegisterPhotographer from './views/RegisterPhotographer'
import RegisterClient from './views/RegisterClient'

import { UserContext } from "./context/UserContext";
import OneCategory from './views/OneCategory'
import { StickyNavbar } from './components/home_page/Nav'
import { AddBooking } from './components/client_components/AddBooking'
import AddBookingTwo from './components/client_components/AddBookingTwo'
import PhotographerPage from './views/PhotographerPage'


import ProfilePhotographer from './components/photographer/ProfilePhotographer'
import ClientProfile from './components/client_dashboard/ClientProfile'
import ClientEditProfile from './components/client_dashboard/ClientEditProfile'

import EditProfile from './components/photographer/EditProfile'
import DashboardClient from './views/DashboardClient'
import Bookings from './components/photographer/Bookings'
import ClientBook from './components/client_dashboard/ClientBook'


function App() {
  const navigate = useNavigate()
  const baseUrl = 'http://localhost:8000/api/'
  const [loggedUser, setLoggedUser] = useState()
  const [isLogged, setIsLogged] = useState(false)
  const [role, setRole] = useState("")


  const logout = () => {
    console.log("logout");
    axios.post(baseUrl+'logout',{},{withCredentials:true})
    .then(serverResponse=>{

        console.log(serverResponse);
        setIsLogged(false)
        navigate('/')
    })
    .catch(error=>console.log(error))
}

  useEffect(() => {
    axios.get(baseUrl + 'loggedUser', { withCredentials: true })
      .then((res) => {
        // console.log(res.data,'++++');
        setLoggedUser(res.data)
        setRole(res.data.role)
        setIsLogged(true)
      })
      .catch((err) => {
        console.log(err);
        //setIsLogged(false)
      });
  }, [isLogged]);
  // console.log("IS LOGGED", isLogged)
  return (
    <>
     <UserContext.Provider value={loggedUser}>
        <StickyNavbar baseUrl={baseUrl} isLogged={isLogged} logout={logout} role={role}/>
        <Routes>

          <Route path='/' element={<Home baseUrl={baseUrl} />} />
          <Route path='/signin' element={<Signin baseUrl={baseUrl} setLoggedUser={setLoggedUser} setIsLogged={(v)=>setIsLogged(v)}/>}/>
          <Route path='/register' element={<SignUp baseUrl={baseUrl}/>}/>
          <Route path='/register/photographer' element={<RegisterPhotographer baseUrl={baseUrl} setLoggedUser={setLoggedUser} setIsLogged={(v)=>setIsLogged(v)}/>}/>
          <Route path='/register/client' element={<RegisterClient baseUrl={baseUrl} setLoggedUser={setLoggedUser} setIsLogged={(v)=>setIsLogged(v)}/>}/>
          <Route path='/photographer' element={<PhotographerDashboard baseUrl={baseUrl}/>}/>
          <Route path='/photographer/:id' element={<PhotographerPage baseUrl={baseUrl}/>}/>
          <Route path='/client' element={<DashboardClient baseUrl={baseUrl}/>}/>
          <Route path='/categories/:category' element={<OneCategory baseUrl={baseUrl}/>}/>

          <Route path ='/photographer/profile' element ={<ProfilePhotographer baseUrl={baseUrl} setLoggedUser={setLoggedUser} setIsLogged={(v)=>setIsLogged(v)} />}/>
          <Route path ='/photographer/edit/:id' element ={<EditProfile baseUrl={baseUrl} setLoggedUser={setLoggedUser} setIsLogged={(v)=>setIsLogged(v)} />}/>
          <Route path = '/bookings/photographer' element = {<Bookings baseUrl={baseUrl} setLoggedUser={setLoggedUser} setIsLogged={(v)=>setIsLogged(v)} />}/>
          <Route path ='/client/edit/:id' element ={<ClientEditProfile baseUrl={baseUrl} setLoggedUser={setLoggedUser} setIsLogged={(v)=>setIsLogged(v)} />}/>
          <Route path ='/client/profile' element ={<ClientProfile baseUrl={baseUrl} setLoggedUser={setLoggedUser} setIsLogged={(v)=>setIsLogged(v)} />}/>
          <Route path = '/bookings/client' element = {<ClientBook baseUrl={baseUrl} setLoggedUser={setLoggedUser} setIsLogged={(v)=>setIsLogged(v)} />}/>

        </Routes>

          
      </UserContext.Provider>
    </>
  )
}

export default App

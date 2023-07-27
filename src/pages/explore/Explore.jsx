import React from 'react'
import UserSection from '../../components/section/UserSection'
import Nav from '../../components/navber/Nav'
import { useLocation} from "react-router-dom"
import Videop from "./Videop"


const Explore = () => {
    let location = useLocation();
    console.log(location.pathname);
    
  return (
    <>
      <Nav/>
      <UserSection/>
      <Videop/>
      
    </>
  )
}

export default Explore
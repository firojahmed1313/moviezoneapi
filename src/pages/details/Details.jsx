import React from 'react'
import Nav from "../../components/navber/Nav";
import Section from "../../components/section/Section";
import Cardsection from "../../components/section/Cardsection";
import Footer from "../../components/footer/Footer";
import UserSection from '../../components/section/UserSection';
import { useAuth0 } from "@auth0/auth0-react";

const Details = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  /*return (

    (<>
      <Nav/>
      <UserSection/>
      <Cardsection/>
      <Footer/>
    </>)  
  )*/
  
  if(isAuthenticated){
    return (

      (<>
        <Nav/>
        <UserSection/>
        <Cardsection/>
        <Footer/>
      </>)  
    )
  }
  else{
    alert("plz login")
    window.open('/', '_self');
  }
}

export default Details
/*isAuthenticated && */
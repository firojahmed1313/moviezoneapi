import React from 'react'
import "./home.css"
import Navber from "../../components/navber/Navber";
import Footer from "../../components/footer/Footer";
import Section from "../../components/section/Section";
import Main from "../../components/main/Main";
import Herosection from "./Herosection/Hero"
import UserSection from '../../components/section/UserSection';
const Home = () => {
  return (
    <>
      <Navber/>
      <UserSection/>
      <Main/>
      <Footer/>
    </>
  )
}

export default Home
import React from 'react'
import { Toaster } from "react-hot-toast";
import Navbar from './Navbar';
import Footer from './Footer';
const Layout = (props) => {
  return (

        <>
        <Navbar/>
          {props.children}
          
          <Toaster position="top-center" />
          <Footer/>
        </>
      );
  
}

export default Layout;

import React from 'react'
import { Toaster } from "react-hot-toast";
import Navbar from './Navbar';
import Footer from './Footer';
const Layout = (props) => {
  return (
<div className="flex flex-col h-screen">
      <div className="w-screen">
        <Navbar />
      </div>
      <Toaster position="top-center"/>
      <div className="flex-grow">{props.children}</div>

      <div className="w-screen">
        <Footer />
      </div>
    </div>
      );
  
}

export default Layout;

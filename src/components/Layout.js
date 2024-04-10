import React from 'react'
import Navbar from './Navbar'
import { Route, Head } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className='layout'>
      <head >
        {/* <title>JS Master Store</title> */}
      </head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        EMPTY
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
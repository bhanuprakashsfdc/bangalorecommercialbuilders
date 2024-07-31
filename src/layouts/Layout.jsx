import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrolltoTop from '../components/ScrolltoTop';
const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main" id="top">
        <Outlet />
      </main>
      <ScrolltoTop />
      <Footer />
    </div>
  )
}

export default Layout
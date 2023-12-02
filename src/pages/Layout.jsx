import React from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
       <div id="wrapper">
        <Sidebar />


  {/* Content Wrapper */}
  <div id="content-wrapper" className="d-flex flex-column">
    {/* Main Content */}
    <div id="content">

      {/* Topbar */}
      <Topbar />
      {/* End of Topbar */}


      {/* Begin Page Content */}
      <Outlet />
      {/* /.container-fluid */}

    </div>
    {/* End of Main Content */}
    <Footer />
  </div>
  {/* End of Content Wrapper */}
</div>

    </>
  )
}

export default Layout
import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div>
        <Header/>
        <main className=''>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainLayout
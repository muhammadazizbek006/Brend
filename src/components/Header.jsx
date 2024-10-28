import React from 'react'
import { Link } from 'react-router-dom'

// imgs
import logo from '../imgs/logo.svg'
import menue from '../imgs/menu.svg'
import search from '../imgs/search.svg'
const Header = () => {
  return (
   <header className='py-4'>
    <div className="containerb flex">
      {/* left  */}
      <div className='flex items-center'>
        {/* logo */}
        <Link className='mr-10' to='/'>
           <img src={logo} alt="" />
       </Link>
       {/* katalog btn */}
       <button className='bg-katalog flex items-center  p-2 rounded mr-4'>
          <img className='mr-2' src={menue} alt="katalog" />
          <p className='text-base text-white'>Каталог</p>
       </button>
       {/* input */}
       <div className='relative'>
        <input className='border border-katalog w-[375px] h-10 rounded pl-4' placeholder='Найти товар' type="search" />
        <img className='absolute top-2 right-2' src={search} alt="" />
       </div>
      </div>
    </div>
   </header>
  )
}

export default Header
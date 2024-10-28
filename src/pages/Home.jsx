import React from 'react'
import Hero from '../components/Hero'
import { products } from '../data'
import { Link } from 'react-router-dom'

// imgs
import like from '../imgs/like.svg'
const Home = () => {
  
  
  return (
    <div >
      <Hero/>
      {/* product */}
      <ul className='containerb grid grid-cols-4  gap-x-10 gap-y-20 py-20'>
        {
          products.map((e)=>{
            return(
              <li className='shadow-md relative p-2 rounded  h-[349px]' key={e.id}>

                <button className='absolute right-2 top-2'>
                  <img src={like} alt="" />
                </button>

                <Link className='flex flex-col justify-between h-full'>
                {/* img */}
                  <div>
                    <img src={e.img} alt="" />
                  </div>
                  {/* information */}
                  <div className='mb-2 '>
                    {/* price */}
                    <div className='flex justify-between mb-2'>
                      {/* left */}
                      <span className='text-lg font-bold text-price'>{e.asli}₽</span>
                      {/* right */}
                      <span className='text-base font-medium text-dastavka'>{e.dastavka}₽</span>
                    </div>
                    {/* title and information */}
                    <h3 className='text-base font-normal text-price mb-2'> {e.title}</h3>
                    <p>{e.yulduz}</p>
                  </div>
                  <button className='text-base flex flex-col items-center w-full text-katalog border-2 border-katalog p-2 rounded'>В корзину</button>
                </Link>
              </li>

            )
          })
        }
      </ul>
    </div>
  )
}

export default Home
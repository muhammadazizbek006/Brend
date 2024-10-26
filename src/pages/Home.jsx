import React from 'react'
import { products } from '../data'

const Home = () => {
  return (
      <ul>
        {
          products.map((e)=>{
            <li>
             
              <h3>{e.name}</h3>
            </li>
          })
        }
      </ul>
  )
}

export default Home
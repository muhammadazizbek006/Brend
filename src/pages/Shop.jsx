import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../store/store';

// imgs
import minus  from '../imgs/minus.svg'
import pilus  from '../imgs/plus.svg'

const Shop = () => {
    const dispatch = useDispatch();
    const tanlanganMahsulotlar = useSelector(
        (store) => store.tanlanganMahsulotlar.data
    );
  return (
    <div>
        <h2>shop</h2>
        {/* maxsulotlar va xisob kitob */}
        <div className='flex justify-between  containerb'>
             {/* tanlangan maxsulotlar */}
            <ul className='  space-y-6 '>
                {
                    tanlanganMahsulotlar.map((e)=>{
                        return(
                            <li className='shadow-md flex justify-between  py-3  px-2 rounded '>
                                {/* left */}
                                <div className='flex'>
                                    {/* img */}
                                    <div className='w-20 h-16 mr-2'>
                                        <img src={e.img} alt="" />
                                    </div>
                                    {/* title and pirce */}
                                    <div>
                                        <h4 className='text-base   text-price mb-3'>{e.title}</h4>
                                        <div className='flex '>
                                            <p className='text-xs font-bold text-price  mr-2'>{e.asli} ₽</p>
                                            <p className='text-xs'>за шт.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* right */}
                                <div className='flex  items-center'>
                                    {/* btn pilus minus */}
                                    <div className='bg-katalog py-2 px-3 flex  items-center text-white space-x-2 rounded mr-4'>
                                        <button><img src={minus} alt="minus" /></button>
                                        <span className='text-base '>1</span>
                                        <button><img src={pilus} alt="pilus" /></button>
                                    </div>

                                    {/* dastavka narx */}
                                    <p>{e.dastavka}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            {/* xisob kitob */}
            <div className='sticky'>
                {/* tovarlar soni va puli */}
                <div className='flex justify-between items-center mb-4'>
                    <p className='text-shop text-base'>3 товара</p>
                    <p className='text-price text-base'>258,10  ₽ </p>
                </div>
                {/* skidka */}
                <div className='flex justify-between items-center mb-4'>
                    <p className='text-shop text-base'>Скидка</p>
                    <p className='text-aksiya text-bold'>-8,01  ₽ </p>
                </div>
                {/* jami */}
                <div className='flex justify-between items-center mb-4'>
                    <p className='text-shop text-base'>Итог</p>
                    <p className='text-2xl font-bold text-price'>250,09 ₽ </p>
                </div>
                <p className='text-white  bg-red-700 py-1 px-2 rounded mb-4'>Минимальная сумма заказа 1000р</p>
                <button className='text-2xl w-full  text-aksiya py-4 px-5 bg-[#FCD5BA] rounded'>Оформить заказ</button>
            </div>
        </div>
    </div>
  )
}

export default Shop
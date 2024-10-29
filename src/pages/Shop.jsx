import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../store/store';
import { deleteUserOfferLinkData } from "../store/slice/productsWishlistDataSlice";
// imgs
import minus  from '../imgs/minus.svg'
import pilus  from '../imgs/plus.svg'
import delet from '../imgs/delete.svg'
const Shop = () => {
    const dispatch = useDispatch();
    const tanlanganMahsulotlar = useSelector(
        (store) => store.tanlanganMahsulotlar.data
    );

    const initialCounts = tanlanganMahsulotlar.reduce((acc, product) => {
        acc[product.id] = 1; // Har bir mahsulot uchun boshlang'ich sanash qiymati
        return acc;
      }, {});
      const [counts, setCounts] = useState(initialCounts);
    // const decrement = () => {
    //     if (count > 1) setCount(count - 1);
    // };

    // const increment = ()=>{
        
    //     setCount(prev => prev + 1);
    // }

    const increment = (id) => {
        setCounts((prevCounts) => ({
          ...prevCounts,
          [id]: prevCounts[id] + 1,
        }));
      };
    
      const decrement = (id) => {
        setCounts((prevCounts) => ({
          ...prevCounts,
          [id]: prevCounts[id] > 1 ? prevCounts[id] - 1 : 1,
        }));
      };
    
      const handleDelete = (id) => {
        dispatch(deleteUserOfferLinkData(id));
        setCounts((prevCounts) => {
          const newCounts = { ...prevCounts };
          delete newCounts[id];
          return newCounts;
        });
      };
    
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
                            <li key={e.id} className='shadow-md flex justify-between  py-3  px-2 rounded '>
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
                                        <button onClick={() => decrement(e.id)}><img src={minus} alt="minus" /></button>
                                        <span className='text-base '>{counts[e.id]}</span>
                                        <button onClick={() => increment(e.id)}><img src={pilus} alt="pilus" /></button>
                                    </div>

                                    {/* dastavka narx */}
                                    <p className='mr-4'>{e.dastavka}</p>
                                    <button onClick={() => handleDelete(e.id)}><img className='h-5' src={delet} alt="" /></button>
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
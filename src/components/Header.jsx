import React from "react";
import { Link, NavLink } from "react-router-dom";

// imgs
import logo from "../imgs/logo.svg";
import menue from "../imgs/menu.svg";
import search from "../imgs/search.svg";
import like from "../imgs/like.svg";
import shop from "../imgs/shop.svg";
import zakaz from "../imgs/zakaz.svg";
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../store/store';
import { deleteUserOfferLinkData } from "../store/slice/productsWishlistDataSlice";
const Header = () => {
  const dispatch = useDispatch();
  const tanlanganMahsulotlar = useSelector(
    (store) => store.tanlanganMahsulotlar.data
  );

  return (
    <header className="py-4">
      <div className="containerb flex justify-between">
        {/* left  */}
        <div className="flex items-center">
          {/* logo */}
          <Link className="mr-10" to="/">
            <img src={logo} alt="" />
          </Link>
          {/* katalog btn */}
          <button className="bg-katalog flex items-center  p-2 rounded mr-4">
            <img className="mr-2" src={menue} alt="katalog" />
            <p className="text-base text-white">Каталог</p>
          </button>
          {/* input */}
          <div className="relative">
            <input
              className="border border-katalog w-[375px] h-10 rounded pl-4"
              placeholder="Найти товар"
              type="search"
            />
            <img className="absolute top-2 right-2" src={search} alt="" />
          </div>
        </div>

        {/* right */}
        <ul className="flex items-center space-x-6">
          {/* like */}
          <li>
            <NavLink className='flex flex-col items-center'>
              <img src={like} alt="like" />
              <span>Избранное</span>
            </NavLink>
          </li>
          {/* zakaz */}
          <li>
            <NavLink className='flex flex-col items-center' >
              <img src={zakaz} alt="zakaz" />
              <span>Заказы</span>
            </NavLink>
          </li>
          {/* shop */}
          <li>
            <NavLink to='/shop' className='flex flex-col items-center'>
              <img src={shop} alt="shop" />
              <span>Корзина {tanlanganMahsulotlar.length}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

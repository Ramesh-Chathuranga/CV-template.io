import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full items-center z-20 py-5 fixed top-0 bg-primary`}>
      <div className={"w-full justify-between items-center max-w-7xl mx-auto flex"}>
        <Link
          to={"/"}
          onClick={() => {
            setActive("");
            window.scroll(0, 0)
          }}
          className={"flex items-center gap-2"}>
          <img alt='logo' className={"w-9 h-9 object-contain"} src={logo} />
          <p className='text-white font-bold cursor-pointer text-[18px] flex'>Ramesh &nbsp; <span className={"sm:block hidden"}>Chathuranga</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((item) => {
            return (
              <li
                onClick={() => {
                  setActive(item.title);
                }}
                className={`${active == item.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
                key={item.title}>
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            )
          })}
        </ul>
        <div
          className={"sm:hidden flex flex-1 justify-end items-center"}>
          <img
            onClick={() => {
              setToggle(!toggle)
            }}
            src={toggle ? close : menu}
            alt={"menu"}
            className='w-[28px] h-[28px] object-contain cursor-pointer' />
          <div className={`${!toggle ? "hidden" : "flex"} black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-40 rounded-xl p-6`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((item) => {
                return (
                  <li
                    onClick={() => {
                      setActive(item.title);
                      setToggle(!toggle)
                    }}
                    className={`${active == item.title ? 'text-white' : 'text-secondary'} hover:text-white text-[16px] font-medium cursor-pointer`}
                    key={item.title}>
                    <a href={`#${item.id}`}>{item.title}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
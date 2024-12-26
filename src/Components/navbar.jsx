import { NavLink } from "react-router-dom";
import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'
import { useRef } from "react";

export default function NavBar(){
    const mobNavRef = useRef()

    function handleOpenMobileNav(){
        mobNavRef.current.style.right = '0%'
    }
    function handleCloseMobileNav(){
        mobNavRef.current.style.right = '-100%'
    }
    return(
        <>
            <div className="nav justify-between flex items-center">
                <div className="min-[768px]:flex-1 max-[768px]:m-6 min-[768px]:pl-20">
                    <img src={logo} />
                </div>
                <ul className="ul min-[540px]:flex hidden  flex-1 justify-end w-fit pl-5 min-[768px]:pl-7 min-[768px]:pr-7 ">
                    <NavLink to='/'><li className="text-white pt-10 pb-10 mr-5 text-preset-8 font-light"><span className="max-[768px]:hidden font-bold mr-2">00</span>HOME</li></NavLink>
                    <NavLink to='/destination'><li className="text-white pt-10 pb-10 mr-5 text-preset-8 font-light"><span className="font-bold mr-2">01</span>DESTINATION</li></NavLink>
                    <NavLink to='/crew'><li className="text-white pt-10 pb-10 mr-5 text-preset-8 font-light"><span className="font-bold mr-2">02</span>CREW</li></NavLink>
                    <NavLink to='/technology'><li className="text-white pt-10 pb-10 mr-5 text-preset-8 font-light"><span className="font-bold mr-2">03</span>TECHNOLOGY</li></NavLink>
                </ul>
                <div className="max-[540px]:block hidden mr-6">
                    <img onClick={() => handleOpenMobileNav()} src={hamburger} />
                    <ul ref={mobNavRef} className="mob-ul z-30 absolute top-0 -right-full flex flex-col w-3/5 h-full">
                        <div  onClick={() => handleCloseMobileNav()} className="flex justify-end p-7">
                            <img src={close} />
                        </div>
                        <NavLink to='/'><li className="text-white p-5 text-preset-8 font-light"><span className="font-bold mr-2">00</span>HOME</li></NavLink>
                        <NavLink to='/destination'><li className="text-white p-5 text-preset-8 font-light"><span className="font-bold mr-2">01</span>DESTINATION</li></NavLink>
                        <NavLink to='/crew'><li className="text-white p-5 text-preset-8 font-light"><span className="font-bold mr-2">02</span>CREW</li></NavLink>
                        <NavLink to='/technology'><li className="text-white p-5  text-preset-8 font-light"><span className="font-bold mr-2">03</span>TECHNOLOGY</li></NavLink>
                    </ul>
                </div>
            </div>
        
        </>
    )
}
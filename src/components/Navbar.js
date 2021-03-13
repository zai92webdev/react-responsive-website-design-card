import React, { useState } from 'react'
import '../styles/Navbar.css'
import {
    Link
} from "react-router-dom";
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineFacebook,AiOutlineSlack } from 'react-icons/ai'


function Navbar() {
    const[click, setClick] = useState(false)

    return (
        
        <div className='navbar'>

            <div className='navbar__container'>
                <div className='navbar__logo'>
                        <Link className ='link__tag' to="/" onClick={() => setClick(false)}>
                            CARD Design Exp
                        </Link>
                    
                </div>

        
                <ul className={click ? 'navbar__menuIcon active' : 'navbar__menuIcon'} onClick={() => setClick(!click)}>
                    <li className='bar1'></li>
                    <li className='bar2'></li>
                    <li className='bar3'></li>
                
                </ul>
            
                
                    <ul className={click ? 'navbar__menu active' : 'navbar__menu'}> 
                        <li>
                            <Link className ='link__tag' to="/">Designs</Link>
                        </li>
                        <li>
                            <Link className ='link__tag' to="/about">About</Link>
                        </li>
                        <li>
                            <Link className ='link__tag' to="contact">Contact</Link>
                        </li>
                    </ul>
                


                <div className={click ? 'mobile__menu__container' : 'mobile__menu__container inactive'}>
                    <ul className='mobile__menu__navigation'>
                        <li>
                            <Link className ='link__tag' to="/" onClick={() => setClick(false)}>Designs</Link>
                        </li>
                        <li>
                            <Link className ='link__tag' to="/about" onClick={() => setClick(false)}>About</Link>
                        </li>
                
                        <li>
                            <Link className ='link__tag' to="/contact" onClick={() => setClick(false)}>Contact</Link>
                        </li>
                        <li>
                            <Link className ='link__tag' to="/terms" onClick={() => setClick(false)}>Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link className ='link__tag' to="/privacy" onClick={() => setClick(false)}>Privacy policy</Link>
                        </li>
                    </ul>

                    <div className='mobile__menu__footer'>
                        <p className='mobile__menu__footerTradeMark'>
                            &#169;UI Design 2021
                        </p>
                        
                        <ul className='mobile__menu__footerIcon'>
                            <li className='mobile__menu__iconItem'>
                                <AiOutlineTwitter />
                            </li>
                            <li className='mobile__menu__iconItem'>
                                <AiOutlineInstagram />
                            </li>
                            <li className='mobile__menu__iconItem'>
                                <AiOutlineFacebook />
                            </li>
                            <li className='mobile__menu__iconItem'>
                                <AiOutlineSlack />
                            </li>
                        </ul>
                    </div>

                </div>
                


            </div>
        </div>
    
    )
}

export default Navbar

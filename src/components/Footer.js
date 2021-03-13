import React from 'react'
import '../styles/Footer.css'
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineFacebook,AiOutlineSlack } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <ul className='footer__links'>
                    <li>
                        <Link to="/terms" className="footer__link__tag">Terms & Conditions</Link>
                    </li>
                    <li>
                        <Link to="/privacy" className="footer__link__tag">Privacy Policy</Link>
                    </li>
                </ul>

                <>
                <p className='footer__middle'>
                &#169;Card Design 2021
                </p>
                </>

                <ul className='footer__icons'>
                    <li className='footer__iconItem'>
                        <AiOutlineTwitter />
                    </li>
                    <li className='footer__iconItem'>
                        <AiOutlineInstagram />
                    </li>
                    <li className='footer__iconItem'>
                        <AiOutlineFacebook />
                    </li>
                    <li className='footer__iconItem'>
                        <AiOutlineSlack />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer

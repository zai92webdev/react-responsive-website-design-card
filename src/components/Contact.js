import React from 'react'
import '../styles/Contact.css'

function Contact() {
    return (
        <div className='contact'>
            <header>
                <h1>
                    Send Us Message 
                </h1>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto error unde placeat porro minima repellendus? ipsum dolor sit amet consectetur, adipisicing </p>
            </header>

            <form className='contact__form'>
                <input placeholder='Name' type="text"/>
                <input placeholder='Email' type="text"/>
                <input placeholder='Subject' type="text"/>

                <textarea placeholder='Message' id="" cols="30" rows="4"></textarea>

                <button>
                    Send
                </button>
            </form>
        </div>
    )
}

export default Contact

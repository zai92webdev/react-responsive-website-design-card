import React from 'react'
import '../styles/Home.css'
import CardUi from './CardUi'
import { AiOutlineSearch} from 'react-icons/ai'
import Data from './Data'

function Home() {


    return (
        <div className='home'>

            <div className='home__banner'>
                <h3>
                    Lorem ipsum dolor sit amet.
                </h3>

                <h1>
                    Lorem ipsum dolor sit amet consectetur elit.
                </h1>

                <div className='home__banner__address'>
                    <input type="email" placeholder='Email Address'/>
                    <button>Stay Tuned</button>
                </div>

                <p>
                    Lorem, ipsum? sit amet consectetur.
                </p>
            </div>

            <div className='home__search'>
                <AiOutlineSearch className='home__searchIcon'/>
                <input type="text" placeholder='Search' />

            </div>

            <div className='home__card'>

                { Data && Data.map(data =>(
                    <CardUi img={data.img} name={data.name} date={data.date} />
                ))}


            </div>
            
        </div>
    )
}

export default Home

import React from 'react'
import HeroSvg from '../assets/Hero.svg'

const Home = () => {
    return (
        <>
            <div className='mt-20 ml-24 text-white font-semibold text-5xl'>Transforming Vision with Digital Kira</div>
            <section>            
                <div>                
                    <img src={HeroSvg} alt="" className='-mt-36 relative z-[-10]' /> 
                </div>
            </section>
        </>
    )
}

export default Home
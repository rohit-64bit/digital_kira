import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo-main.png'
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

const Header = () => {

    const [navOpen, setNavOpen] = useState(false);

    const [scrollPositionTop, setScrollPositionTop] = useState(0)

    const navRoutes = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '#about' },
        { name: 'Services', path: '#services' },
        { name: 'Contact', path: '#contact' },
        { name: 'Testimonials', path: '#testimonials' }
    ]

    useEffect(() => {

        window.addEventListener('scroll', () => {
            setScrollPositionTop(window.scrollY)
        })

        return () => {
            window.removeEventListener('scroll', () => {
                setScrollPositionTop(window.scrollY)
            })
        }

    }, [])

    return (
        <header className='z-[50]'>

            <div className='bg-[#FDF2DF] text-center p-2'>
                <h1 className=" font-bold bg-gradient-to-r from-[#D2AB68] to-[#6C5835] bg-clip-text text-transparent">
                    Get Flat 10% On All Services On Your First Order
                </h1>
            </div>

            <motion.div
                animate={{ y: scrollPositionTop > 80 ? 0 : 40, background: scrollPositionTop > 80 ? 'rgba(6, 33, 69, 1)' : 'rgba(6, 33, 69, 0)' }}
                transition={{ duration: 0.5 }}
                className='px-24 py-3 flex justify-between items-center top-0 fixed w-full mx-auto'
            >

                <img src={Logo} alt="Logo" className='h-12' />
                <nav>
                    <ul className='flex space-x-5'>

                        {
                            navRoutes.map((route, index) => (
                                <li key={index}>
                                    <HashLink smooth to={route.path} className='text-white'>
                                        {route.name}
                                    </HashLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <HashLink
                    smooth
                    to='#contact'
                    className='bg-[#D2AB68] text-white px-5 py-2 rounded-lg'
                >
                    Contact Us
                </HashLink>

            </motion.div>

        </header >
    )
}

export default Header
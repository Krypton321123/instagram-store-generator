'use client'

import React, { useEffect, useState } from 'react'

function AppbarForMain() {

    const [show, setShow] = useState(true); 
    const [lastScrollY, setLastScrollY] = useState(0); 

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY; 

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShow(false)
            } else {
                setShow(true); 
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

  return (
    <div className={`fixed bg-white top-0 right-0 left-0 w-full py-5 border-b-1 duration-300 z-50 border-gray-300 flex items-center transition-transform justify-between ${show ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className='logo pl-8 flex items-center gap-5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#F06225" d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z"></path><path fill="#F06225" d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path></svg>
            <p className='text-xl font-semibold tracking-tighter leading-none'>StoreGen</p>
        </div>
        <div className='flex items-center'>
            <div className='flex mr-10 gap-10 text-lg'>
                {['Home', 'Pricing', 'Help'].map((item, index) => <p className='cursor-pointer hover:opacity-50 transition-opacity duration-100' key={index}>{item}</p>)}
            </div>
            <div className='btn mr-10'>
                <button className='text-white cursor-pointer hover:opacity-80 transition-opacity duration-150 bg-blue-600 rounded-lg py-2 px-7'>Create</button>
            </div>
        </div>
    </div>
  )
}

export default AppbarForMain
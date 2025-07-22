'use client'
import React, { useEffect, useState } from 'react'

function Appbar() {

    const [show, setShow] = useState(true); 
    const [lastScrollY, setLastScrollY] = useState<number>(0); 

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

        window.addEventListener('scroll', handleScroll); 

        return () => window.removeEventListener('scroll', handleScroll); 

    }, [lastScrollY])

  return (
    <div className={`fixed top-0 left-0 right-0 w-full flex bg-black justify-between transition-transform dution-300 z-50 items-center p-4 h-20 ${show ? 'translate-y-0' : '-translate-y-full'}`}>ra
        <div className=''>logo</div>
        <div className=''>links</div>
        <div className=''>quick action</div>
    </div>
  )
}

export default Appbar
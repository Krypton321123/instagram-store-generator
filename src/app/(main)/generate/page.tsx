'use client'
import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function page() {

    const [activeStore, setActiveStore] = useState("")

    const storeChoices = [
        {name: "Facebook", icon: <FaFacebook />, primary: "text-blue-600"}, 
        {name: "Instagram", icon: <FaInstagram />, primary: "text-pink-600"}
    ]

    const handleActive = (name: string) => {
        setActiveStore(name)
    }

  return (
    <div className='w-full h-screen flex flex-col items-center pt-30'>
        <div className='px-10 flex flex-col gap-2'>
            <p className='font-bold text-5xl tracking-tight'>Create your store</p>
            <p className='text-gray-500'>Generate a store using the already provided templates and connecting your store from social media</p>
        </div>
        <div className='inputs mt-10 gap-5 w-1/2 ml-35 flex '>
            <div className='flex flex-col gap-2'>
                <p className='capitalize'>store name</p>
                <input type='text' placeholder='Enter your store name' className='active:outline-none text-gray-500 focus:outline-none w-48 bg-gray-300/50 rounded-lg p-4'/>
            </div>
            <div className='flex flex-col gap-2'>
                Where is your store currently:
                <div className='flex gap-4 items-center'>
                    {storeChoices.map((item, index) => {
                        return <div key={index} onClick={() => handleActive(item.name)} className='cursor-pointer'>
                            <p className={`text-4xl ${activeStore === item.name ? item.primary : ""}`}>{item.icon}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
        <div className='storetype ml-35 w-1/2 mt-8'>
            <p className='capitalize text-2xl tracking-tight font-bold'>Select a product category</p>
        </div>
    </div>
  )
}

export default page
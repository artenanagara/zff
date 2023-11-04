import React from 'react'
import './menu-animation.css'
import {AiOutlineMenu} from 'react-icons/ai'
import  {useState, useEffect} from 'react'

function Menu() {
    const [isExpand, setIsExpand] = useState(false)


    const toggleExpand = () => {
        const elMenuItems = document.querySelector('#menuItems')
        if(isExpand){
            elMenuItems?.classList.add('shrink')
        }else{
            elMenuItems?.classList.remove('shrink')
        }
        console.log('click')
        setIsExpand(!isExpand)
    }

    const menuItems = [
        {
            text: 'Home',
            target: '#'
        },
        {
            text: 'Work',
            target: '#'
        },
        {
            text: 'Services',
            target: '#'
        },
        {
            text: 'About',
            target: '#'
        },
    ]
    return(
        <div className="relative w-3/4 md:w-1/3 flex justify-end">
            <div id="menuItems" className="shrink block absolute t-0 r-0 -z-10 w-full flex gap-8 px-8 py-5 rounded-full shadow-xl">
                {menuItems.map((item, key) => {
                    return(
                        <a key={key} href={item.target}>{item.text}</a>
                    )
                })}
            </div>
            <div onClick={toggleExpand} id="menuIcon" className="flex justify-center items-center w-16 h-16 rounded-full bg-primary"><AiOutlineMenu /></div>
        </div>
    )
}

export default function Navbar() {
    return(
        <>
            <div className="flex justify-between items-center px-[100px] py-8">
                <a href="/" className='text-4xl font-bold'>Team</a>
                <Menu />
            </div>
        </>
    )
}
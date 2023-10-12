import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsCart3 } from 'react-icons/bs'
import { IoIosContact } from 'react-icons/io'
export const Header = () => {
    return (
        <>
            <nav className='nav-bar'>
                <a href="/"><img src="/Images/elogo.png" alt="" className='elogo' /></a>
                <ul className='d-flex pt-3'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/cetagory">Product Catagory <IoMdArrowDropdown /></a>
                        <ul className='p-cata'>
                            <li><a href="/cetagory">Garments</a></li>
                            <li><a href="/cetagory">Beauty Product</a></li>
                            <li><a href="/cetagory">Jewllery</a></li>
                        </ul>
                    </li>
                    <li><a href="/">Toys <IoMdArrowDropdown /></a>
                        <ul>
                            <li><a href="/plastic">Plastic</a></li>
                            <li><a href="/wood">Wooden</a></li>
                        </ul>
                    </li>
                    <li><a href="/soffer">Special Offer</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
                <div className="h-icon">
                    {/* <i><a href="/login" ><AiOutlineSearch /></a></i> */}
                    <i><a href="/login"><IoIosContact /></a></i>
                    <i><a href="/soffer"><BsCart3 /></a></i>
                </div>
            </nav>
        </>
    )
}

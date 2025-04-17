import React, { useState } from 'react';
import Link from './link';
import { CiMenuBurger } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';

const navigationLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Dashboard", path: "/dashboard" }
];

const links = navigationLinks.map(route => <Link key={route.id} route={route} ></Link>)

const Navbar = () => {

    const [open, setOpen] = useState(false)
    return (
        <nav className='flex justify-between mx-10 my-4'>
            <span className='flex' onClick={() => setOpen(!open)}>
                {
                    !open ? <IoClose className='md:hidden' size={15} /> : <CiMenuBurger className='md:hidden' size={15} />
                }
                <ul className={`md:hidden absolute duration-1000 ${!open? 'top-10':'-top-30'}`}>
                    {
                        links
                    }
                </ul>
                <h3 className='ml-4'>My nav</h3>
            </span>
            <ul className="md:flex hidden">
                {
                    links
                }
            </ul>


            {/* <ul className='flex'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}

            {/* <ul>
                {
                    navigationLinks.map(route => 
                    <li className='mr-10'><a href={route.path}>{route.name}</a>
                    </li>)
                }
            </ul> */}
            <button className='btn'>Sign In</button>
        </nav>
    );
};

export default Navbar;
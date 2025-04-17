import React from 'react';
import Link from './link';

const navigationLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Dashboard", path: "/dashboard" }
];


const Navbar = () => {
    return (
        <nav>
            {
                navigationLinks.map(route => <Link key={route.id} route = {route} ></Link>)
            }
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
        </nav>
    );
};

export default Navbar;
import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className='mr-10 hover:bg-slate-200 px-1 rounded-sm'><a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;
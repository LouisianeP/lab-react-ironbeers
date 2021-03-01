import React from 'react'
import header from '../assets/header.png'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
               <Link to="/">
                <img src={header}/>
               </Link> 
        </div>
    )
}


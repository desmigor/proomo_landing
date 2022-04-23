import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg'

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#wproomo">What is PROOMO?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </>
)

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='proomo__navbar'>
            <div className='proomo__navbar-links'>
                <div className='proomo__navbar-links-logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='proomo__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='proomo__navbar-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
            <div className='proomo__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='proomo__navbar-menu_container scale-up-center'>
                        <div className='proomo__navbar-menu_container-links'>
                            <Menu />
                            <div className='proomo__navbar-menu_container-links-sign'>
                                <p>Sign in</p>
                                <button type='button'>Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
import React from 'react';
import SocialsBtn from './utils/SocialsBtn';
import navButton from '../assets/nav-button.svg';
import ellipse from '../assets/ellipse.svg';

export default function Header() {
    return (
        <header className="section-container">
            <div className='header'>
                <span className='logo'>vinícius costa</span>
                <div className='photo-container'>
                    <ul className='icons-container'>
                        <li><SocialsBtn social='linkedin'/></li>
                        <li><SocialsBtn social='github'/></li>
                    </ul>
                    <div>
                        <img id='ellipse' src={ellipse} alt='ellipse'/>
                        <img className='photo' src={require('../assets/Foto-pb.png')} alt='my pic'/>
                    </div>
                </div>
            </div>
            <img src={navButton} alt='nav button' />
        </header>
    )
}
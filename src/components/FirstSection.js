import React from 'react';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import navButton from '../assets/nav-button.svg';
import rings from '../assets/rings.svg';
import ellipse from '../assets/ellipse.svg';

export default function Section() {

    return (
        <>
            <div class="section-container">
                <header>
                    <span class='logo'>vinícius costa</span>
                    <div className='photo-container'>
                        <ul className='icons-container'>
                            <li><img src={linkedinIcon} alt='linkedin'/></li>
                            <li><img src={githubIcon} alt='github'/></li>
                        </ul>
                        <div>
                            <img className='ellipse' src={ellipse} />
                            <img className='photo' src={require('../assets/Foto-pb.png')}/>
                        </div>
                    </div>
                </header>
                <img src={navButton} alt='nav button' />
            </div>
            <div class="section-container">
                <img src={rings} id='rings' />
                <div id='first-section'>
                    <h1>
                        Prazer em te conhecer!<br/>
                        Sou o <span>Vinícius Costa</span>.
                    </h1>
                    <p>
                        De SBC - SP, sou um desenvolvedor web front-end apaixonado por construir
                        aplicações bonitas e responsivas.
                    </p>
                </div>
            </div>
        </>
    )
}
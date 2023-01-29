import React from 'react';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';

export default function Footer() {
    return(
        <div className='section-container footer'>
            <div>
                <hr/>
                <div>
                    <span className='logo'>vinícius costa</span>
                    <ul className='icons-container'>
                        <li><img src={linkedinIcon} alt='linkedin'/></li>
                        <li><img src={githubIcon} alt='github'/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
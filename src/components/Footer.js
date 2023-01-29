import React from 'react';
import SocialsBtn from './utils/SocialsBtn'

export default function Footer() {
    return(
        <div className='section-container footer'>
            <div>
                <hr/>
                <div>
                    <span className='logo'>vinícius costa</span>
                    <ul className='icons-container'>
                        <li><SocialsBtn social='linkedin'/></li>
                        <li><SocialsBtn social='github'/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
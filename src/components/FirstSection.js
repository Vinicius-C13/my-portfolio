import React from 'react';
import rings from '../assets/rings.svg';
import ContactBtn from './utils/TextBtn'

export default function Section() {

    return (
        <>
            <div className="section-container">
                <img src={rings} id='rings' alt='a lot of ellipses'/>
                <div id='first-section'>
                    <h1>
                        Prazer em te conhecer!<br/>
                        Sou o <span>Vinícius Costa</span>.
                    </h1>
                    <p>
                        De SBC - SP, sou um desenvolvedor web front-end apaixonado por construir
                        aplicações bonitas e responsivas.
                    </p>
                    <ContactBtn link='#contact'/>
                </div>
            </div>
            <hr className='section-divider'/>
        </>
    )
}
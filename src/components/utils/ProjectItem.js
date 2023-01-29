import React from 'react';
import Button from './TextBtn';

export default function Item(props) {
    
    const nameStyle = {
        fontSize: '18px',
        textTransform: 'uppercase'
}

    const techStyle = {
            fontSize: '14px',
            color: '#C3C1C1'
    }

    const image = require('../../assets/'+props.img);

    return (
        <div className='project-item'>
            <img src={image} alt={props.alt}/>
            <h4 style={nameStyle}>{props.title || 'Nome do Projeto'}</h4>
            <div style={techStyle}>{props.tech || 'Tecnologias usadas'}</div>
            <div className='overlay'>
                <Button link={props.site} text='VER PROJETO'/>
                <Button link={props.repos} text='VER CÓDIGO'/>
            </div>
        </div>
    )
}
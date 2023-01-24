import React from 'react';

export default function Item(props) {
    
    const nameStyle = {
        textTransform: 'uppercase'
}

    const techStyle = {
            fontSize: '14px',
            color: '#C3C1C1'
    }

    const image = require('../../assets/'+props.img);

    return (
        <div>
            <img src={image} alt='project'/>
            <h4 style={nameStyle}>{props.project || 'Nome do Projeto'}</h4>
            <div style={techStyle}>{props.tech || 'Tecnologias usadas'}</div>
        </div>
    )
}
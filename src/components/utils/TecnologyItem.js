import React from 'react';

export default function Item(props) {

    const techStyle = {
        fontSize: '40px'
    }

    const descStyle = {
        fontSize: '16px'
    }

    return (
        <div>
            <h3 style={techStyle}>{props.tech}</h3>
            <div style={descStyle}>{props.desc}</div>
        </div>
    )
} 
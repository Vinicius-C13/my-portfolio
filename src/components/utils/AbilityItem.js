import React from 'react';

export default function Item(props) {

    const nameStyle = {
        fontSize: '32px'
    }

    const descStyle = {
        fontSize: '16px'
    }

    return (
        <div>
            <h3 style={nameStyle}>{props.name}</h3>
            <div style={descStyle}>{props.desc}</div>
        </div>
    )
} 
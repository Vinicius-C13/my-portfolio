import React from 'react';



export default function Button(props) {

    const style = {
        backgroundColor: 'transparent',
        borderBottom: '3px solid #4AD295',
        borderInline: 'none',
        borderTop: 'none',
        padding: '0 0 10px 0',
        textTransform: 'uppercase',
        width: 'fit-content',
        height: 'fit-content',
        color: 'white',
        fontSize: 'clamp(12px,1.5vw, 14px)',
        letterSpacing: '2px'
    }

    return (
        <a href={props.link}><button style={style}>{props.text || 'Entre em contato'}</button></a>
    )

}   
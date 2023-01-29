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
        fontSize: '14px',
        letterSpacing: '2px'
    }

    return (
        <button onClick={props.handleClick} style={style}>Enviar</button>
    )

}   
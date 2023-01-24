import React from 'react';



export default function Button(props) {

    const style = {
        backgroundColor: 'transparent',
        borderBottom: '4px solid #4AD295',
        borderInline: 'none',
        borderTop: 'none',
        padding: ' 3px 0',
        textTransform: 'uppercase' 
    }

    return (
        <button style={style}>{props.content || 'Clique'}</button>
    )

}   
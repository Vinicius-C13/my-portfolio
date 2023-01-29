import React from 'react';
import Ability from './utils/AbilityItem';

export default function Abilities() {

    const abilities = [
        {
            name: 'HTML',
            desc: 'Nível avançado'
        },
        {
            name: 'CSS',
            desc: 'Nível avançado'
        },
        {
            name: 'JavaScript',
            desc: 'Nível avançado'
        },
        {
            name: 'React',
            desc: 'Nível intermediário'
        },
        {
            name: 'Acessibilidade',
            desc: 'Nível básico'
        }
    ]

    return (
        <div className="section-container abilities">
            <div className='items-container'>
                {abilities.map((item) => {
                    return (
                        <Ability key={item.name} name={item.name} desc={item.desc}/>
                    )
                })}
            </div>
        </div>
    )
}
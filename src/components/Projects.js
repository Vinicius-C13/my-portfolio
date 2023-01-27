import React from 'react';
import Project from './utils/ProjectItem';
import ContactBtn from './utils/ContactBtn'

export default function Projects() {

    const projects = [
        {
            img: 'lp-easybank.png',
            alt: 'projeto de landing page easybank',
            title: 'EasyBank Landing Page',
            tech: 'HTML CSS JS'
        },
        {
            img: 'pagina-ecommerce.png',
            alt: 'projeto de pagina de produto de ecommerce',
            title: 'Pagina de Produto de Ecommerce',
            tech: 'HTML CSS JS'
        },
        {
            img: 'site-espacial.png',
            alt: 'projeto de site de turismo espacial',
            title: 'Site de Turismo Espacial',
            tech: 'HTML CSS JS'
        },
        {
            img: 'calculadora.png',
            alt: 'projeto de calculadora',
            title: 'Calculadora',
            tech: 'HTML CSS JS'
        },
        {
            img: 'one-decodificador.png',
            alt: 'projeto de decodificador',
            title: 'Decodificador',
            tech: 'HTML CSS JS'
        }
    ]

    return (
        <div className='section-container projects'>
            <div>
                <h2>Projetos</h2>
                <ContactBtn />
            </div>
            <div className='items-container'>
                {projects.map((item) => {
                    return (
                        <Project key={item.title} img={item.img} alt={item.alt} title={item.title} tech={item.tech}/>
                    )
                })}
            </div>
        </div>
    )
}
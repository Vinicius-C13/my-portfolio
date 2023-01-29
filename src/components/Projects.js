import React from 'react';
import Project from './utils/ProjectItem';
import ContactBtn from './utils/TextBtn'

export default function Projects() {

    const projects = [
        {
            img: 'lp-easybank.png',
            alt: 'projeto de landing page easybank',
            title: 'EasyBank Landing Page',
            tech: 'HTML CSS JS',
            site: 'https://vs-easybank-landing-page.netlify.app/',
            repos: 'https://github.com/Vinicius-C13/FM-Easyband-landing-page'
        },
        {
            img: 'pagina-ecommerce.png',
            alt: 'projeto de pagina de produto de ecommerce',
            title: 'Pagina de Produto de Ecommerce',
            tech: 'HTML CSS JS',
            site: 'https://vs-ecommerce-product-page.netlify.app/',
            repos: 'https://github.com/Vinicius-C13/FM-ecommerce-product-page'
        },
        {
            img: 'site-espacial.png',
            alt: 'projeto de site de turismo espacial',
            title: 'Site de Turismo Espacial',
            tech: 'HTML CSS JS',
            site: 'https://my-space-tourism-site.netlify.app/',
            repos: 'https://github.com/Vinicius-C13/FM-space-tourism-website'
        },
        {
            img: 'calculadora.png',
            alt: 'projeto de calculadora',
            title: 'Calculadora',
            tech: 'HTML CSS JS',
            site: 'https://my-odin-calculator.netlify.app/',
            repos: 'https://github.com/Vinicius-C13/odin-calculator'
        },
        {
            img: 'one-decodificador.png',
            alt: 'projeto de decodificador',
            title: 'Decodificador',
            tech: 'HTML CSS JS',
            site: 'https://criptografador-oracle-one.netlify.app/',
            repos: 'https://github.com/Vinicius-C13/ONE-criptografador'
        }
    ]

    return (
        <div className='section-container projects'>
            <div>
                <h2>Projetos</h2>
                <ContactBtn link='#contact'/>
            </div>
            <div className='items-container'>
                {projects.map((item) => {
                    return (
                        <Project 
                            key={item.title} 
                            img={item.img} 
                            alt={item.alt} 
                            title={item.title} 
                            tech={item.tech}
                            site={item.site}
                            repos={item.repos}
                        />
                    )
                })}
            </div>
        </div>
    )
}
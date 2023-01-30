import React from 'react';
import Form from './utils/Form';

export default function Contact() {
    return (
        <div className='section-container contact' id='contact'>
            <div>
                <h2>Contato</h2>
                <p>
                    Eu adorario  ouvir sobre como eu posso te ajudar.
                    Por favor, preencha o formulário e eu te responderei o mais rápido possível.
                </p>
                <Form />
            </div>
        </div>
    )
}
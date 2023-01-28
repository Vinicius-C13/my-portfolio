import React from 'react';
import ContactBtn from './utils/ContactBtn';

export default function Contact() {
    return (
        <div className='section-container contact'>
            <div>
                <h2>Contato</h2>
                <p>
                    Eu adorario  ouvir sobre como eu posso te ajudar.
                    Por favor, preencha o formulário e eu te responderei o mais rápido possível.
                </p>
                <form>
                    <input placeholder='NOME'/>
                    <input placeholder='EMAIL'/>
                    <textarea placeholder='MENSAGEM'></textarea>
                    <ContactBtn content='Enviar'/>
                </form>
            </div>
        </div>
    )
}
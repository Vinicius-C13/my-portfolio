import React from 'react';
import emailJs from 'emailjs-com'
import FormBtn from './FormBtn';

export default function Form() {

    const [formInfo, setformInfo] = React.useState({
        from_name: '',
        email: '',
        message: ''
    });

    React.useState(() => {
        if(sessionStorage.getItem('formInfo')) {
            setformInfo(JSON.parse(sessionStorage.getItem('formInfo')))
        } else {
            sessionStorage.setItem('formInfo', JSON.stringify(formInfo))
        }
    }, [])

    React.useEffect(() => {
        sessionStorage.setItem('formInfo', JSON.stringify(formInfo));
    }, [formInfo]) 

    function handleChange(e) {
        setformInfo((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    function sendEmail(e) {
        e.preventDefault();

        emailJs.sendForm('service_x243y7o', 'template_x9wbugh', e.target, 'ekCkgD0s50t62NdNc')
        .then((result) => {
            showSucessMessage()
        }, (error) => {
            showErrorMessage()
            console.log(error.text);
        });
        setformInfo({
            from_name: '',
            email: '',
            message: ''
        })
    }

    function showSucessMessage() {
        window.alert('email enviado com sucesso!');
    }

    function showErrorMessage() {
        window.alert('não foi possível enviar o email. Tente novamente.');
    }

    return(
        <form onSubmit={sendEmail}>
            <input name='from_name' placeholder='NOME' type='text' value={formInfo.from_name} onChange={handleChange} required/>
            <input name='email' placeholder='EMAIL' type='email' value={formInfo.email} onChange={handleChange} required/>
            <textarea name='message' placeholder='MENSAGEM' value={formInfo.message} onChange={handleChange} required></textarea>
            <FormBtn />
        </form>
    )
}
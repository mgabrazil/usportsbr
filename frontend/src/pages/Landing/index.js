import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../../styles/landing.css';

export default function Landing(){

    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_nk4cijn' /*service_id do EMAILJS*/,
            'template_yvovwwt' /* template_id do EMAILJS */,
            formRef.current,
            'ZuEFnHjNjzxdASMfj'/* public_key do EMAILJS */,
        ).then(
            (result) => {
                alert("Mensagem enviada com sucesso!");
                formRef.current.reset();
            },
            (error) => {
                alert("Erro ao enviar: ", error.text);
            }
        );
    };


    return(
        <section className='landing-section'>
            <div className='form-container'>
                <h1>Formulário</h1>
                <form ref={formRef} onSubmit={handleSubmit}>

                    <label>Nome da escola</label>
                    <input name='escola' placeholder='Digite o nome da escola' required/>

                    <label>Cidade/Estado</label>
                    <input name='cidade' placeholder='Cidade - UF' required/>

                    <label>Nome do Responsável</label>
                    <input name='responsavel' placeholder='Digite o nome do Responsável' required />

                    <label>E-mail</label>
                    <input name='email' placeholder='email@email.com' required />

                    <label>WhatsApp</label>
                    <input name='whatsapp' placeholder='(00) 0 0000-0000' required />

                    <label>Número de alunos</label>
                    <input name='quantidade' placeholder='Digite a quantidade de alunos' required />

                    <label>Mensagem (opcional)</label>
                    <input name='mensagem' placeholder='ex: "Gostaria de agendar uma reunião virtual"'/>

                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </section>
    )
}
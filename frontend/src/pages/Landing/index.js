import { useRef } from 'react';

import '../../styles/landing.css';

export default function Landing(){

    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);

        // https://seudominio.com/landingForm.php
        try {
            const response = await fetch("http://localhost:8000/landingForm.php", {
                method: "POST",
                body: formData,
            });

            const result = await response.text();
            alert(result);
            formRef.current.reset();
        } catch (err) {
            alert("Erro ao enviar: " + err.message);
        }
    };


    return(
        <section className='landing-section'>
            <div className='form-container'>
                <h1>Formulário</h1>
                <form ref={formRef} onSubmit={handleSubmit}>

                    <label>Nome da escola</label>
                    <input name='escola' placeholder='Digite o nome da escola'/>

                    <label>Cidade/Estado</label>
                    <input name='cidade' placeholder='Cidade - UF'/>

                    <label>Nome do Responsável</label>
                    <input name='responsavel' placeholder='Digite o nome do Responsável' />

                    <label>E-mail</label>
                    <input name='email' placeholder='email@email.com' />

                    <label>WhatsApp</label>
                    <input name='whatsapp' placeholder='(00) 0 0000-0000' />

                    <label>Número de alunos</label>
                    <input name='quantidade' placeholder='Digite a quantidade de alunos' />

                    <label>Mensagem (opcional)</label>
                    <input name='mensagem' placeholder='ex: "Gostaria de agendar uma reunião virtual"'/>

                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </section>
    )
}
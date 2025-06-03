import React from 'react';
import imagemHomem from '../../assets/img-man.png';
import imagemMulher from '../../assets/img-woman.png';
import iconeWhatsapp from '../../assets/img-whatsapp.png';

import '../../styles/tecidos.css';

function Tecidos() {
  return (
    <section className="tecidos-container">
      <main>
        <div className="container-imagens">
          <div className="homem">
            <img src={imagemHomem} alt="Homem usando uniforme" />
          </div>

          <div className="mulher">
            <img src={imagemMulher} alt="Mulher usando uniforme" />
          </div>
        </div>

        <div className="caixa-texto">
          <h1 className="titulo">DESIGN EXCLUSIVO</h1>
          <p className="subtitulo">
            Entre em contato com a nossa equipe.
          </p>
        </div>

        <div className="botao-whatsapp">
          <img src={iconeWhatsapp} alt="WhatsApp" />
        </div>
      </main>
    </section>
  );
}

export default Tecidos;
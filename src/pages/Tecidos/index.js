import React from 'react';
import manImg from '../../assets/img-man.png';
import womanImg from '../../assets/img-woman.png';
import whatsappIcon from '../../assets/img-whatsapp.png';

import '../../styles/tecidos.css';

function Tecidos() {
  return (
    <section className="tecidos-container">
      <main>
        <div className="image-layout">
          {/* Imagem do homem (já com faixa diagonal embutida) */}
          <div className="man-image">
            <img src={manImg} alt="Homem usando uniforme" />
          </div>

          {/* Imagem da mulher (já com faixa diagonal embutida) */}
          <div className="woman-image">
            <img src={womanImg} alt="Mulher usando uniforme" />
          </div>
        </div>

        <div className="text-section">
          <h1 className="title-tecidos">DESIGN EXCLUSIVO</h1>
          <p className="subtitle-tecidos">
            Entre em contato com a nossa equipe.
          </p>
        </div>

        {/* Ícone do WhatsApp no canto inferior direito */}
        <div className="whatsapp-button">
          <img src={whatsappIcon} alt="WhatsApp" />
        </div>
      </main>
    </section>
  );
}

export default Tecidos;

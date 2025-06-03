import React from 'react';
import imagemHomem from '../../assets/img-man.png';
import imagemMulher from '../../assets/img-woman.png';

import '../../styles/tecidos.css';

function Tecidos() {
  return (
    <section className="tecidos-container">

      <span className="material-symbols-outlined" id="right-arrow">double_arrow</span>

      <main>
        <div className="container-imagens">
          <div className="homem">
            <img src={imagemHomem} alt="Homem" />
          </div>

          <div className="mulher">
            <img src={imagemMulher} alt="Mulher" />
          </div>
        </div>

        <div className="caixa-texto">
          <h1 className="titulo">DESIGN EXCLUSIVO</h1>
          <p className="subtitulo">
            Entre em contato com a nossa equipe.
          </p>
        </div>
      </main>

    </section>
  );
}

export default Tecidos;
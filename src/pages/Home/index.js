// src/pages/Home/index.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import shirt from '../../assets/img-tshirt.png';
import imagemHomem from '../../assets/img-man.png';
import imagemMulher from '../../assets/img-woman-fita.png';
import imagemHomemMulher from '../../assets/img-man-woman.png';

import logoLFF from '../../assets/LFF.png';
import logoCBFS from '../../assets/CBFS_logo-07.png';
import logoADEF from '../../assets/ADEF.png';
import logoFutsal from '../../assets/SUB_17.png';

import '../../styles/home2.css';
import '../../styles/home.css';
import '../../styles/contact.css'; // <<< novo arquivo de estilo para a seção de formulário

function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage((prev) => (prev === 1 ? 2 : 1));
    }, 1000000);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const showPrevious = () => {
    setCurrentPage(1);
  };

  const showNext = () => {
    setCurrentPage(2);
  };

  const sliderTranslate = `translateX(-${(currentPage - 1) * 100}vw)`;

  return (
    <>
      {/* ========== SLIDER (dois slides girando horizontalmente) ========== */}
      <section className="home-container-base">
        <div className="slider" style={{ transform: sliderTranslate }}>
          {/* === SLIDE 1 (Home2) === */}
          <section className="home2-container slide">
            <main>
              <span
                className="material-symbols-outlined"
                id="right-arrow"
                onClick={showNext}
              >
                double_arrow
              </span>
              <div className="container-imagens">
                <div className="homem">
                  <img src={imagemHomem} alt="Homem" />
                </div>
                <div className="mulher">
                  <img src={imagemMulher} alt="Mulher" />
                </div>
                <div className="homem-mulher">
                  <img src={imagemHomemMulher} alt="Homem-Mulher" />
                </div>
              </div>
              <div className="caixa-texto">
                <h1 className="titulo">DESIGN EXCLUSIVO</h1>
                <p className="subtitulo">Entre em contato com a nossa equipe.</p>
              </div>

              <div className="clientes-mobile">
                <button className="btn-clientes-mobile">NOSSOS CLIENTES</button>
                <div className="logos-clientes">
                  <img className="logo-lff" src={logoLFF} alt="LFF" />
                  <img className="logo-cbfs" src={logoCBFS} alt="CBFS" />
                  <img className="logo-adef" src={logoADEF} alt="ADEF" />
                  <img className="logo-futsal" src={logoFutsal} alt="Futsal" />
                </div>
              </div>
            </main>
          </section>

          {/* === SLIDE 2 (Home1) === */}
          <section className="home1-container slide">
            <span
              className="material-symbols-outlined"
              id="left-arrow"
              onClick={showPrevious}
            >
              double_arrow
            </span>
            <span
              className="material-symbols-outlined"
              id="right-arrow"
              onClick={showPrevious}
            >
              double_arrow
            </span>
            <main className="body-container">
              <div className="tshirt">
                <img src={shirt} alt="T-Shirt" />
              </div>
              <div className="text-container">
                <div className="title">
                  <h1 className="title-top">SEU TIME,</h1>
                  <h1 className="title-bottom">SUA IDENTIDADE</h1>
                </div>
                <div className="phrase-container">
                  <p>Uniformes personalizados</p>
                  <p>com qualidade e entrega rápida</p>
                </div>
                <Link to="#" className="btn-price">
                  CLIQUE AQUI E FAÇA SEU ORÇAMENTO
                </Link>
              </div>
            </main>

            <div className="clientes-mobile">
              <button className="btn-clientes-mobile">NOSSOS CLIENTES</button>
              <div className="logos-clientes">
                <img className="logo-lff" src={logoLFF} alt="LFF" />
                <img className="logo-cbfs" src={logoCBFS} alt="CBFS" />
                <img className="logo-adef" src={logoADEF} alt="ADEF" />
                <img className="logo-futsal" src={logoFutsal} alt="Futsal" />
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* ======== NOVA SEÇÃO: FORMULÁRIO DE CONTATO (scroll abaixo do slider) ======== */}
      <section className="contact-section">
        <h2>ENTRE EM CONTATO:</h2>
        <form>
          <div className="input-group">
            <label htmlFor="nome" className="input-label">Nome</label>
            <input type="text" id="nome" name="nome" className="input-field" />
          </div>
          <div className="input-group">
            <label htmlFor="celular" className="input-label">Celular</label>
            <input type="tel" id="celular" name="celular" className="input-field" />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input type="email" id="email" name="email" className="input-field" />
          </div>
          <div className="input-group">
            <label htmlFor="mensagem" className="input-label">Mensagem</label>
            <textarea id="mensagem" name="mensagem" className="textarea-field"></textarea>
          </div>
          <button type="submit" className="btn-submit">Enviar Mensagem</button>
        </form>
      </section>
    </>
  );
}

export default Home;

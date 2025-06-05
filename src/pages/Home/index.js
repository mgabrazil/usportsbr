// src/pages/Home/index.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import shirt from '../../assets/img-tshirt.png';
import imagemHomem from '../../assets/img-man.png';
import imagemMulher from '../../assets/img-woman-fita.png';

import '../../styles/home2.css';
import '../../styles/home.css';

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
    <section className="home-container-base">
      <div className="slider" style={{ transform: sliderTranslate }}>
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
            </div>
            <div className="caixa-texto">
              <h1 className="titulo">DESIGN EXCLUSIVO</h1>
              <p className="subtitulo">Entre em contato com a nossa equipe.</p>
            </div>
          </main>
        </section>
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
              <img src={shirt} />
            </div>
            <div className="text-container">
              <div className="title">
                <h1 className="title-top">SEU TIME,</h1>
                <h1 className="title-bottom">SUA IDENTIDADE</h1>
              </div>
              <div className="phrase-container">
                <p>Uniformes personalizados </p>
                <p>com qualidade e entrega rápida</p>
              </div>
              <Link to="#" className="btn-price">
                CLIQUE AQUI E FAÇA SEU ORÇAMENTO
              </Link>
            </div>
          </main>
        </section>
      </div>
    </section>
  );
}

export default Home;

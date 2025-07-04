// src/pages/Home/index.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import shirt from '../../assets/img-tshirt.png';
import imagemHomem from '../../assets/img-man.png';
import imagemMulher from '../../assets/img-woman-fita.png';
import imagemHomemMulher from '../../assets/img-man-woman.png';
import imagemPaginaContato from '../../assets/contact-page-img.png';

import animacaoPaginaContato from '../../assets/contact-animation.gif';

import logoLFF from '../../assets/LFF.png';
import logoCBFS from '../../assets/CBFS_logo-07.png';
import logoADEF from '../../assets/ADEF.png';
import logoFutsal from '../../assets/SUB_17.png';

import PartnersBottomBtn from '../../components/PartnersBottomBtn.js';

import '../../styles/home2.css';
import '../../styles/home.css';
import '../../styles/contact.css';

function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage(prev => (prev === 1 ? 2 : 1));
    }, 15000);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const showPrevious = () => setCurrentPage(1);
  const showNext     = () => setCurrentPage(2);
  const sliderTranslate = `translateX(-${(currentPage - 1) * 100}vw)`;

  return (
    <>
      <section className="home-container-base">
        <div className="slider" style={{ transform: sliderTranslate }}>
          {/* SLIDE 1 */}
          <section className="home2-container slide">
            <main>
              <span
                className="material-symbols-outlined"
                id="right-arrow-2"
                onClick={showNext}
              >double_arrow</span>
              <div className="container-imagens">
                <div className="homem"><img src={imagemHomem} alt="Homem" /></div>
                <div className="mulher"><img src={imagemMulher} alt="Mulher" /></div>
                <div className="homem-mulher"><img src={imagemHomemMulher} alt="Homem-Mulher" /></div>
              </div>
              <div className="caixa-texto">
                <h1 className="titulo">DESIGN EXCLUSIVO</h1>
                <p className="subtitulo">Entre em contato com a nossa equipe.</p>
              </div>

            </main>
          </section>

          {/* SLIDE 2 */}
          <section className="home1-container slide">
            <span
              className="material-symbols-outlined"
              id="left-arrow"
              onClick={showPrevious}
            >double_arrow</span>
            <span
              className="material-symbols-outlined"
              id="right-arrow"
              onClick={showPrevious}
            >double_arrow</span>
            <main className="body-container">
              <div className="tshirt"><img src={shirt} alt="T-Shirt" /></div>
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

          </section>

        </div>

        <PartnersBottomBtn/>

        <section className='partners-bottom-menu'>  
              <div className="clientes-mobile">
                <button className="btn-clientes-mobile">NOSSOS CLIENTES</button>
                <div className="logos-clientes">
                  <Link to="/lff"><img className="logo-lff"   src={logoLFF}   alt="LFF"   /></Link>
                  <Link to="/cbfs"><img className="logo-cbfs"  src={logoCBFS}  alt="CBFS"  /></Link>
                  <Link to="/adef"><img className="logo-adef"  src={logoADEF}  alt="ADEF"  /></Link>
                  <Link to="/sub17"><img className="logo-futsal"src={logoFutsal}alt="Futsal"/></Link>
                </div>
              </div>
          </section>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">

        <div className='form-container'>
          <h2>ENTRE EM CONTATO:</h2>
          <form>
            <div className="input-group">
              <label htmlFor="nome" className="input-label">Nome</label>
              <input type="text"   id="nome"    name="nome"    className="input-field" maxLength={50} />
            </div>
            <div className="input-group">
              <label htmlFor="celular" className="input-label">Celular</label>
              <input type="tel"    id="celular" name="celular" className="input-field" maxLength={15} />
            </div>
            <div className="input-group">
              <label htmlFor="email" className="input-label">Email</label>
              <input type="email"  id="email"   name="email"   className="input-field" maxLength={50} />
            </div>
            <div className="input-group textarea-container">
              <label htmlFor="mensagem" className="input-label">Mensagem</label>
              <textarea id="mensagem" name="mensagem" className="textarea-field" maxLength={1000} />
              <button type="submit" className="btn-send-icon" aria-label="Enviar Mensagem">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
            
          </form>
        </div>

        <div className='contact-page-img'>
          <img src={animacaoPaginaContato} alt='imagem-contato' />
        </div>

      </section>
    </>
  );
}

export default Home;
import React from "react";
import { useEffect, useState } from "react";

import degrade from '../../assets/CBFS_degradê-19.png';
import logoCBFS from '../../assets/CBFS_logo-07.png';

import bgAmarelinha from '../../assets/CBFS_AMARELINHA_5.png';
import amarelinha from '../../assets/CBFS_AMARELINHA.png';
import bgCamiseta from '../../assets/CBFS_CAMISETA_2.png';
import camiseta from '../../assets/CBFS_CAMISETA.png';
import bgGolaPolo from '../../assets/CBFS_GOLA_POLO_1.png';
import golaPolo from '../../assets/CBFS_GOLA_POLO.png';
import bgCalca from '../../assets/CBFS_CALÇA_3.png';
import calcaTactel from '../../assets/CBFS_CALÇA_TACTEL.png';
import bgCasaco from '../../assets/CBFS_CASACO_4.png';
import casaco from '../../assets/CBFS_CASACO.png';
import bgCortaVento from '../../assets/CBFS_CORTA_VENTO_4.png';
import cortaVento from '../../assets/CBFS_CORTA_VENTO.png';

import '../../styles/partnerCBFS.css';

export default function PartnerCBFS(){

    const [currentOutfit, setCurrentOutfit] = useState(1);

    const backgroundImages = [bgAmarelinha, bgCamiseta, bgGolaPolo, bgCalca, bgCasaco, bgCortaVento];

    const currentBackground = {
        backgroundImage: `url(${backgroundImages[currentOutfit - 1]})`,
        backgroundSize : 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        zIndex: 1
    };

    const sliderOutfit = `translateX(-${(currentOutfit - 1) * 100}vw)`;

    useEffect(() => {
        backgroundImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    function showPreviousOutfit(){
        if (currentOutfit === 1) {
            setCurrentOutfit(6);
        } else {
            setCurrentOutfit(currentOutfit - 1);
        }
    }

    function showNextOutfit(){
        if (currentOutfit === 6) {
            setCurrentOutfit(1);
        } else {
            setCurrentOutfit(currentOutfit + 1);
        }
    }

    return(
        <section className="cbfs-container-base">
            <div className="cbfs-container">

                <main className="user-view">

                    <div className="logo-container">
                        <img src={logoCBFS} id='logoCBFS' />
                    </div>

                    <div className="outfit-view-container">

                        <span className="material-symbols-outlined arrow-outfit-left" onClick={showPreviousOutfit}>arrow_left</span>

                        <div className="outfit-view-slider" style={{transform: sliderOutfit}}>

                            <div className="outfit-slide" id="one">
                                <img src={amarelinha} className="outfit" />

                                <h2 className="outfit-name">Amarelinha</h2>
                            </div>

                            <div className="outfit-slide" id="two">
                                <img src={camiseta} className="outfit" />

                                <h2 className="outfit-name">Camiseta</h2>
                            </div>

                            <div className="outfit-slide" id="three">
                                <img src={golaPolo} className="outfit" />

                                <h2 className="outfit-name">Gola Polo</h2>
                            </div>

                            <div className="outfit-slide" id="four">
                                <img src={calcaTactel} className="outfit" />

                                <h2 className="outfit-name">Calça Tactel</h2>
                            </div>

                            <div className="outfit-slide" id="five">
                                <img src={casaco} className="outfit" />

                                <h2 className="outfit-name">Casaco</h2>
                            </div>

                            <div className="outfit-slide" id="six">
                                <img src={cortaVento} className="outfit" />

                                <h2 className="outfit-name">Corta Vento</h2>
                            </div>

                        </div>
            
                        <span class="material-symbols-outlined arrow-outfit-right" onClick={showNextOutfit}>arrow_right</span>

                    </div>

                </main>

                    <div className="background-slider" style={{ transform: sliderOutfit }}>
                        {backgroundImages.map((bg, index) => (
                        <div
                            key={index}
                            className="background-slide"
                            style={{
                                backgroundImage: `url(${bg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                            ></div>
                        ))}
                        </div>


                <div className="gradient-background">
                    <img src={degrade} id="gradient-background-img"/>
                </div>

            </div>
        </section>
    )
}
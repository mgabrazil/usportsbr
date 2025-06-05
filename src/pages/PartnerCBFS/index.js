import React from "react"

import degrade from '../../assets/CBFS_degradê-19.png';
import logoCBFS from '../../assets/CBFS_logo-07.png';

import casaco4 from '../../assets/CBFS_CASACO_4.png';
import casaco from '../../assets/CBFS_CASACO.png';

import '../../styles/partnerCBFS.css';

export default function PartnerCBFS(){
    return(
        <section className="cbfs-container-base">
            <div className="cbfs-container">

                <main className="user-view">

                    <div className="logo-container">
                        <img src={logoCBFS} id='logoCBFS' />
                    </div>

                    <div className="outfit-view-container">
                        <img src={casaco} className="outfit" />

                        <h2 className="outfit-name">Casaco</h2>
                    </div>

                </main>

                <div className="background-container">
                    <div className="gradient-background">
                        <img src={degrade} id="gradient-background-img"/>
                    </div>

                    <div className="background">
                        <img src={casaco4} id="background-casaco4" />
                    </div>
                </div>

            </div>
        </section>
    )
}
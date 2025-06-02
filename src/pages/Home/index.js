import { Link } from 'react-router-dom';

import logo from '../../assets/img-logo.png';
import shirt from '../../assets/img-tshirt.png';

import '../../styles/home.css';

function Home(){
    
    return(
        
        <section className="container">

            <main>
                <div className='body-container'>
                    <div className='tshirt'>
                        <img src={shirt} />
                    </div>

                    <div className='text-container'>
                        <div className='title'>
                            <h1 className='title-top'>SEU TIME,</h1>
                            <h1 className='title-bottom'>SUA IDENTIDADE</h1>
                        </div>

                        <div className='phrase-container'>
                            <p>Uniformes personalizados </p>
                            <p>com qualidade e entrega rápida</p>
                        </div>

                        <Link to='#' className='btn-price'>CLIQUE AQUI E FAÇA SEU ORÇAMENTO</Link>
                    </div>
                </div>
            </main>

        </section>
    )
}

export default Home;
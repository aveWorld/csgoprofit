import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Anime from 'react-anime';
import Head from 'next/head'
const promocodes = () => (
    <main className="promocodes">
         <Head>
            <title>CS:GO Promocodes</title>
            <meta name="description" content="Earn free CS:GO skins" />
        </Head>
        <Navbar />
        <div className="promocodes-h1">
            <h1>Promo codes for free CS:GO skins</h1>
        </div>
        <Anime easing="easeOutQuart"
                direction="normal"
                loop={false}
                opacity={[0,1]}
                duration={2000}
                delay={800}
                className="cards"
            >
            <div className="cards">
            <div className="card">
                <div className="card-header">
                   <a href="https://csgoroll.com/r/CSPROFIT" target="_blank"><img src="csgoroll.webp" alt="csgoroll" className="card-img"/></a> 
                </div>
                <div className="card-main">
                    <p>3 free cases</p>
                </div>
                <div className="card-footer">
                    <p>promocode</p>
                    <p>CSPROFIT</p>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                   <a href="https://csgo500.com/rewards" target="_blank"><img src="csgo500.webp" alt="csgoro500" className="card-img"/></a> 
                </div>
                <div className="card-main">
                    <p>1,000 Bux</p>
                </div>
                <div className="card-footer">
                    <p>promocode</p>
                    <p>CSPROFIT</p>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                   <a href="https://csgospeed.com/r/CSGOPROFIT" target="_blank"><img src="csgospeed.webp" alt="csgospeed" className="card-img"/></a> 
                </div>
                <div className="card-main">
                    <p>0.5 $</p>
                </div>
                <div className="card-footer">
                    <p>promocode</p>
                    <p>CSGOPROFIT</p>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                   <a href="https://csgopolygon.com/" target="_blank"><img src="csgopoligon.svg" alt="csgopolygon" className="card-img"/></a> 
                </div>
                <div className="card-main">
                    <p>1 $</p>
                </div>
                <div className="card-footer">
                    <p>promocode</p>
                    <p>CSPROFIT</p>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                   <a href="https://gamdom.com/r/csgoprofit" target="_blank"><img src="gamdom.svg" alt="gamdom" className="card-img"/></a> 
                </div>
                <div className="card-main">
                    <p>3 free chest</p>
                </div>
                <div className="card-footer">
                    <p>promocode</p>
                    <p>csgoprofit</p>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                   <a href="https://www.rollbit.com/r/csgoprofit" target="_blank"><img src="rollbit.svg" alt="rollbit" className="card-img"/></a> 
                </div>
                <div className="card-main">
                    <p>0.5 $</p>
                </div>
                <div className="card-footer">
                    <p>promocode</p>
                    <p>csgoprofit</p>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                   <a href="https://csgofast123.com/#r/e5reoi-csgo" target="_blank"><img src="csgofast.webp" alt="csgofast" className="card-img"/></a> 
                </div>
                <div className="card-main">
                    <p>3 $</p>
                </div>
                <div className="card-footer">
                    <p>promocode</p>
                    <p>e5reoi-csgo</p>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                   <a href="https://hellcase.com/fcsgoprofit" target="_blank"><img src="hellcase.webp" alt="hell case" className="card-img"/></a> 
                </div>
                <div className="card-main">
                    <p>0.5 $</p>
                </div>
                <div className="card-footer">
                    <p>promocode</p>
                    <p>csgoprofit</p>
                </div>
            </div>
            </div>
        </Anime>
        <Footer />
    </main>
)

export default promocodes
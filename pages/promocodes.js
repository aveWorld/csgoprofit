import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Anime from 'react-anime';
import Head from 'next/head';
const promocodes = () => (
  <main className="promocodes">
    <Head>
      <title>CS:GO Promo codes</title>
      <meta name="description" content="Earn free CS GO skins" />
    </Head>
    <Navbar />
    <div className="promocodes-h1">
      <h1>CS GO Promo codes for free CS GO skins</h1>
      <h3>Earn free skins with CS GO promo codes</h3>
    </div>
    <Anime
      easing="easeOutQuart"
      direction="normal"
      loop={false}
      opacity={[0, 1]}
      duration={2000}
      delay={800}
      className="cards"
    >
      <div className="cards">
        <div className="card">
          <div className="card-header">
            <a href="https://csgoroll.com/r/CSPROFIT" target="_blank">
              <img src="csgoroll.webp" alt="csgoroll" className="card-img" />
            </a>
          </div>
          <div className="card-main">
            <p>3 free cases</p>
          </div>
          <div className="card-footer">
            <h5>csgoroll promocode</h5>
            <p>CSPROFIT</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <a href="https://csgo500.com/rewards" target="_blank">
              <img src="csgo500.webp" alt="csgoro500" className="card-img" />
            </a>
          </div>
          <div className="card-main">
            <p>1,000 Bux</p>
          </div>
          <div className="card-footer">
            <h5>csgo500 promocode</h5>
            <p>CSPROFIT</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <a href="https://csgospeed.com/r/CSGOPROFIT" target="_blank">
              <img src="csgospeed.webp" alt="csgospeed" className="card-img" />
            </a>
          </div>
          <div className="card-main">
            <p>0.5 $</p>
          </div>
          <div className="card-footer">
            <h5>csgo speed promocode</h5>
            <p>CSGOPROFIT</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <a href="https://csgopolygon.com/" target="_blank">
              <img src="csgopoligon.svg" alt="csgopolygon" className="card-img" />
            </a>
          </div>
          <div className="card-main">
            <p>1 $</p>
          </div>
          <div className="card-footer">
            <h5>csgopolygon promocode</h5>
            <p>CSPROFIT</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <a href="https://gamdom.com/r/csgoprofit" target="_blank">
              <img src="gamdom.svg" alt="gamdom" className="card-img" />
            </a>
          </div>
          <div className="card-main">
            <p>3 free chest</p>
          </div>
          <div className="card-footer">
            <h5>gamdom promocode</h5>
            <p>csgoprofit</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <a href="https://www.rollbit.com/r/csgoprofit" target="_blank">
              <img src="rollbit.svg" alt="rollbit" className="card-img" />
            </a>
          </div>
          <div className="card-main">
            <p>0.5 $</p>
          </div>
          <div className="card-footer">
            <h5>rollbit promocode</h5>
            <p>csgoprofit</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <a href="https://csgofast123.com/#r/e5reoi-csgo" target="_blank">
              <img src="csgofast.webp" alt="csgofast" className="card-img" />
            </a>
          </div>
          <div className="card-main">
            <p>3 $</p>
          </div>
          <div className="card-footer">
            <h5>csgofast promocode</h5>
            <p>e5reoi-csgo</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <a href="https://hellcase.com/fcsgoprofit" target="_blank">
              <img src="hellcase.webp" alt="hell case" className="card-img" />
            </a>
          </div>
          <div className="card-main">
            <p>0.5 $</p>
          </div>
          <div className="card-footer">
            <h5>hellcase promocode</h5>
            <p>csgoprofit</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <a href="https://www.csgolive.com/home" target="_blank">
              <img src="csgolive.webp" alt="csgolive" className="card-img" />
            </a>
          </div>
          <div className="card-main">
            <p>0.5 $</p>
          </div>
          <div className="card-footer">
            <h5>csgolive promocode</h5>
            <p>csprofit</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <a href="https://rustshuffle.com/?refid=0e282ccb80185b7f" target="_blank">
              <img src="/rustsshuffle.png" alt="csgoempire" className="card-img" />
            </a>
          </div>
          <div className="card-main">
            <p>0.75 $</p>
          </div>
          <div className="card-footer">
            <h5>rustshuffle promocode</h5>
            <p>it's promo link</p>
          </div>
        </div>
      </div>
    </Anime>
    <Footer />
  </main>
);

export default promocodes;

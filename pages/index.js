import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return <Loader />;
  else
    return (
      <div className="container">
        <Head>
          <title>CS:GO Profit - Your Tradepedia</title>
          <meta
            name="description"
            content="CS:GO Investments, Trade Ups, Trade, Open Case Simulator and more. Variety of CS:GO promo codes, news about CS:GO market. Make profit with us."
          />
        </Head>
        <Navbar />
        <section className="section-1 wrapper">
          <div className="section1-wrapper">
            <div className="line">
              <svg
                width="234"
                height="394"
                viewBox="0 0 234 394"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow"
              >
                <line
                  x1="44.0304"
                  y1="359.475"
                  x2="94.2512"
                  y2="378"
                  stroke="#EF233C"
                  strokeWidth="4"
                />
                <line
                  x1="99.87"
                  y1="80.1971"
                  x2="142.081"
                  y2="95.993"
                  stroke="#EF233C"
                  strokeWidth="4"
                />
                <line
                  x1="40.9768"
                  y1="360.468"
                  x2="139.862"
                  y2="96.2178"
                  stroke="#EF233C"
                  strokeWidth="4"
                />
                <line
                  y1="-2"
                  x2="45.0698"
                  y2="-2"
                  transform="matrix(-0.936572 -0.350475 -0.350475 0.936572 231.982 129.427)"
                  stroke="#EF233C"
                  strokeWidth="4"
                />
                <line
                  y1="-2"
                  x2="283.149"
                  y2="-2"
                  transform="matrix(0.350475 -0.936572 -0.936572 -0.350475 90.8898 377.871)"
                  stroke="#EF233C"
                  strokeWidth="4"
                />
                <line
                  x1="97.7961"
                  y1="80.9413"
                  x2="201.066"
                  y2="2.0415"
                  stroke="#EF233C"
                  strokeWidth="4"
                />
                <line
                  x1="231.677"
                  y1="126.515"
                  x2="200.343"
                  y2="4.12682"
                  stroke="#EF233C"
                  strokeWidth="4"
                />
              </svg>

              <h1 className="section-title">CSGO PROFIT</h1>
            </div>
            <h3 className="section-subtitle">start to make profit right now</h3>
            <div id="scroll-down" className="scroll-down">
              <a href="#about">
                <div></div>Scroll
              </a>
            </div>
          </div>
        </section>
        <section className="section-2" id="about">
          <div className="section2-wrapper">
            <div className="section2-text">
              <h3 className="section2-text--title">CS GO Investments</h3>
              <h5 className="section2-text--subtitle">
                CS:GO investments are an essential skill you should know to make stable income every
                month. You gonna learn two main principles on CS:GO investing
              </h5>
              <Link href="/investments">
                <a className="btn draw-border">More</a>
              </Link>
            </div>
            <svg viewBox="0 0 150 150" className="chart">
              <polyline
                className="path"
                fill="none"
                stroke="#ef233c"
                strokeWidth="2"
                points="
                -10,150
                20,130
                40,100
                60,90
                80,80
                100,80
                120,60
                140,40
                "
              />
            </svg>
          </div>
          <div className="section2-wrapper">
            <div className="section2-text">
              <h3 className="section2-text--title">CS GO Trade Ups</h3>
              <h5 className="section2-text--subtitle">
                CS:GO trade ups are a fun and risky thing to do. But good tradeups can give you huge
                profit. You gonna learn about the main formula of CS:GO tradeups
              </h5>
              <Link href="/tradeups">
                <a className="btn draw-border">More</a>
              </Link>
            </div>
            <img src="./tradeup.webp" alt="tradeup" className="tradeup-img" />
          </div>
          <div className="section2-wrapper">
            <div className="section2-text">
              <h3 className="section2-text--title">CS GO Trade</h3>
              <h5 className="section2-text--subtitle">
                CS:GO trade is the oldest method of making profit on CS:GO. It can be insanely
                profitable if you're aware of what to do. You gonna learn the main concept and
                schemes of CS:GO trade
              </h5>
              <Link href="/trade">
                <a className="btn draw-border">More</a>
              </Link>
            </div>
            <img src="trade.webp" alt="tradeup" className="trade-img" />
          </div>
        </section>
        <Footer />
      </div>
    );
}

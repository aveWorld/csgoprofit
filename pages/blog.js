import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import '../css/blog.css'
import Head from 'next/head'


const blog = () => (
    <div className="blog">
        <Head>
            <title>CS:GO Profit - Blog</title>
            <meta name="description" content="All about CS:GO Investments, Contracts, Trade and more" />
        </Head>
        <Navbar />
        <main className="blog-wrapper">
            <Link href="/promocodes">
                <div className="promocodes-art">
                    <h3 className="promocodes-art--h1">FREE SKINS</h3>
                    <img src="/free-skins.webp" alt="free skins"/>
                </div>
            </Link>
            <div className="three-art one-art">
                <Link href="/blog/fracture_case_and_crash_of_shatteredWeb">
                    <div className="article hover-orange">
                        <h3 className="article-title">New Fracture Case And Crash of Shattered Web Case</h3>
                        <p className="article-subtitle">Lookout of new Fracture Case and explaining price dropping of shattered web</p>
                        <img src="/fracture_collection.webp" alt="tradeups"/>
                        <p className="article-date">Article Aug 7, 2020</p>
                    </div>
                </Link>
                 <Link href="/blog/two_low_risk_and_profitable_tradeups">
                    <div className="article hover-green">
                        <h3 className="article-title">Two Low Risk Tradeups With High Profitability</h3>
                        <p className="article-subtitle">Take a look at two low risk tradeups with profitability 120%+</p>
                        <img src="/tradeups.webp" alt="tradeups"/>
                        <p className="article-date">Article Jul 29, 2020</p>
                    </div>
                </Link>
            </div>
            <div className="three-art">
            <Link href="/blog/buy-stickers-from-boston2018">
                <div className="article hover-green">
                    <h3 className="article-title">Buy CS:GO stickers from Boston 2018 Major!</h3>
                    <p className="article-subtitle">Article explains why you should buy stickers from Boston 2018 Major right now</p>
                    <img src="/boston2018.webp" alt="Boston 2018 major" className="case-hardened--img"/>
                    <p className="article-date">Article Jul 23, 2020</p>
                </div>
                </Link>
                <Link href="/blog/make-profit-on-shattered-web-operation">
                <div className="article hover-orange">
                    <h3 className="article-title">HOW TO MAKE PROFIT ON SHATTERED WEB OPERATION</h3>
                    <p className="article-subtitle">Learn about different ways to make profit on Shattered Web operation</p>
                    <img src="/shattered-web.webp" alt="Shattered Web" className="case-hardened--img"/>
                    <p className="article-date">Article Jul 20, 2020</p>
                </div>
                </Link>
                <Link href="/blog/case-hardened-patterns">
                <div className="article hover-yellow">
                    <h3 className="article-title">Case Hardened Pattern</h3>
                    <p className="article-subtitle">Take a look at case hardened pattern and his forms</p>
                    <img src="/casehardened_blue.webp" alt="AK47 | Case Hardened" className="case-hardened--img"/>
                    <p className="article-date">Article Jul 6, 2020</p>
                </div>
                </Link>
            </div>
            <div className="three-art">
                <Link href="/blog/three-risky-tradeups">
                <div className="article hover-green">
                    <h3 className="article-title">THREE RISKY TRADE UPS</h3>
                    <p className="article-subtitle">Take a look at three risky but high reward trade ups</p>
                    <img src="/tradeups.webp" alt="tradeups"/>
                    <p className="article-date">Article Jul 1, 2020</p>
                </div>
                </Link>
                <Link href="/blog/best-websites-for-csgo-trading">
                <div className="article hover-yellow">
                    <h3 className="article-title">BEST WEBSITES FOR CS:GO TRADING</h3>
                    <p className="article-subtitle">You will find out websites with lowest commission, largest selection of skins and more...</p>
                    <img src="/websites-for-trading.webp" alt="best website for trading"/>
                    <p className="article-date">Article Jul 1, 2020</p>
                </div>
                </Link>
                <Link href="/blog/the-top-tvelve-expensive-skins-in-csgo">
                <div className="article hover-orange">
                    <h3 className="article-title">THE TOP TVELVE EXPENSIVE SKINS IN CS GO</h3>
                    <p className="article-subtitle">Find out the most expensive skins in CS GO</p>
                    <img src="/awp_dragonlore.webp" alt="AWP | Dragon Lore"/>
                    <p className="article-date">Article Jul 1, 2020</p>
                </div>
                </Link>
            </div>
            
        </main>
        <Footer />
    </div>
);

export default blog;
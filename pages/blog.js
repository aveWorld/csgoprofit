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
            <div className="three-art">
                <Link href="/blog/three-risky-tradeups">
                <div className="article hover-green">
                    <h3 className="article-title">THREE RISKY TRADE UPS</h3>
                    <p className="article-subtitle">Take a look at three risky but high reward trade ups</p>
                    <img src="/tradeups.webp" alt="tradeups"/>
                </div>
                </Link>
                <Link href="/blog/best-websites-for-csgo-trading">
                <div className="article hover-yellow">
                    <h3 className="article-title">BEST WEBSITES FOR CS:GO TRADING</h3>
                    <p className="article-subtitle">You will find out websites with lowest commission, largest selection of skins and more...</p>
                    <img src="/websites-for-trading.webp" alt="best website for trading"/>
                </div>
                </Link>
                <Link href="/blog/the-top-tvelve-expensive-skins-in-csgo">
                <div className="article hover-orange">
                    <h3 className="article-title">THE TOP TVELVE EXPENSIVE SKINS IN CS GO</h3>
                    <p className="article-subtitle">Find out the most expensive skins in CS GO</p>
                    <img src="/awp_dragonlore.webp" alt="AWP | Dragon Lore"/>
                </div>
                </Link>
            </div>
            <div className="three-art">
                <Link href="/blog/case-hardened-patterns">
                <div className="article hover-yellow">
                    <h3 className="article-title">Case Hardened Pattern</h3>
                    <p className="article-subtitle">Take a look at case hardened pattern and his forms</p>
                    <div>
                        <img src="/casehardened_blue.webp" alt="" className="case-hardened--img"/>
                    </div>
                </div>
                </Link>
                <Link href="/blog/make-profit-on-shattered-web-operation">
                <div className="article hover-orange">
                    <h3 className="article-title">HOW TO MAKE PROFIT ON SHATTERED WEB OPERATION</h3>
                    <p className="article-subtitle">Learn about different ways to make profit on Shattered Web operation</p>
                    <img src="/shattered-web.webp" alt="" className="case-hardened--img"/>
                </div>
                </Link>
            </div>
        </main>
        <Footer />
    </div>
);

export default blog;
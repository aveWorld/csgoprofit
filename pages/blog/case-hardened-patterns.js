import '../../css/blog.css'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Head from 'next/head'

const caseHardened = () => (
    <article className="case-hardened">
        <Head>
            <title>Case Hardened Pattern CS:GO</title>
            <meta name="description" content="Find out about Case Hardened pattern in CS:GO." />
        </Head>
        <Navbar />
         <div className="container-wrapper">
            <h1>Find out about Case Hardened pattern in CS:GO. If you don't familiar with patterns, <Link href="/trade#patterns"><a className="case-hardened--link">read our post about them</a></Link></h1>
            <p>Case hardened has 4 types of petterns:</p>
            <h2>silver case hardened</h2>
            <img src="/casehardened_silver.webp" alt="Karambit | Case Hardened"/>
            <p>Silver case hardened tended to be worst. Silver pattern isn't attractive, so people don't like him.</p>
            <p><span className="overpay">Overpay</span>: you can't get overpay for silver pattern :(</p>
            <h2>purple case hardened</h2>
            <img src="/casehardened_purple.webp" alt=""/>
            <p>Purple has small patches of purple colors, usually at the edges of blue colors areas. Purple is considered rare when it has a lot of purple patches.</p>
            <p><span className="overpay">Overpay</span>: If your case hardened has a lot purple patches like at the image, than it can be overpay on 50-70% of default price</p>
            <h2>gold case hardened</h2>
            <img src="/case_hardened_gold.webp" alt=""/>
            <p>Case hardened can be considered gold if it has 95%+ of gold color. Gold is desired but not very rare pattern. 
                Do not confuse gold pattern with silver, gold should has bright gold color</p>
            <p><span className="overpay">Overpay</span>: Case hardened with full golden color can be overpay on 60-80% of default price</p>
            <h2>blue case hardened</h2>
            <img src="/casehardened_blue.webp" alt=""/>
            <p>Blue pattern is the most desired and rare. The bigger blue color area the rarest pattern. Be aware that it can't be 100% blue.</p>
            <p><span className="overpay">Overpay</span>: Case hardened with 90% of blue color can be overpay on 500% of default price</p>
            <ul className="case-hardened--ul">
            <li>If your skin has 35-45% of continuous blue color you can get 40-60% overpay</li>
            <li>If your skin has 45-60% of continuous blue color you can get 60-100% overpay</li>
            <li>If your skin has 60-80% of continuous blue color you can get 100-200% overpay</li>
            <li>If you skin has 80%+ of continuous blue color then you are the luckiest person and can get 200%+ overpay</li>
            </ul>
        </div>
        <Footer />
    </article>
)

export default caseHardened
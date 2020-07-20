import '../../css/blog.css'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Head from 'next/head'

const shatteredWeb = () => (
    <article className="container-blog">
        <Head>
            <title>Make profit on Shattered Web Operation</title>
            <meta name="description" content="Find out about diferrent ways to make profit on Shattered Web operation." />
        </Head>
        <Navbar />
         <div className="container-wrapper">
            <h1 className="align-center shattered-h1">How to make profit on Shattered Web operation in CS:GO</h1>
            <p className="image-sign">article wrote 20.07.2020</p>
            <p>Now Shattered Web operation is overhyped, so cases and stickers from that operation are growing at insane speed</p>
            <img src="/shatteredWeb.webp" alt="Shattered Web Operation" className="image-optimization"/>
            <p className="image-sign">Shattered Web Case</p>
            <p>The cost of these cases has tripled in 2 weeks, but it won't grow forever, pretty soon it gonna decrease in price and then grow again with lower spead.</p>
            <p>If you decide to buy cases or stickers now, you should understand that you won't get as much profit as if you did it 2 weeks ago, because price is high already.</p>
            <h3 className="shattered-h3">Another way to make profit</h3>
            <p className="have-before">Shattered Web consists not only of stickers and cases, there are also agents that haven't grown yet.</p>
            <img src="/agents.webp" alt="agents" className="image-optimization"/>
            <p className="image-sign">Soldier | Phoenix</p>
            <p className="have-before">Despite the fact that the case increased a couple of times, the cost of skins practically did not increase</p>
            <img src="/awp_containment.webp" alt="AWP | Containment Breach" className="image-optimization"/>
            <p className="image-sign">AWP | Containment Breach(Factory New)</p>
            <p>So, if you wanna make profit on Shattered Web you should consider of buying agents and skins from cases.</p>
        </div>
        <Footer />
    </article>
)

export default shatteredWeb;
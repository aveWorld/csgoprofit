import { faTrademark } from "@fortawesome/free-solid-svg-icons";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'
import Link from 'next/link'


const trade = () => {
    return (
    <div className="container-blog">
        <Head>
            <title>CS GO Trade</title>
            <meta name="description" content="Learn how to make profit in CS GO trading" />
        </Head>
        <Navbar />
        <main className="container-wrapper">
            <h1 className="blog-title">CS GO Trade</h1>
            <p className="blog-p">Now it’s very easy to start trading and earning from 15% of your bank every month. 
            Each trader has their own schemes, but they all come down to one thing - reselling skins on different sites.</p>
            <p className="blog-p">Lets take a look at very popular scheme, we will buy skins on Steam with buy orders and sell with higher price.</p>
            <p className="blog-p">Firstly we need to place buy order, we just need to press the Place buy order button and set the price we would like to pay.</p>
            <img src="buy_order.webp" alt="but order button" className="buy-order"/>
            <p className="blog-p">As you can see on the chart, the lowest purchase points were made exactly by buy orders, so we should just set the price 20% lower current price 
                and wait when our buy works. You can place many orders until the sum of all orders exceeds your 10x balance in the steam.</p>
            <p className="blog-p">When your buy order has worked and you get your item, you can sell it on steam or diferrent trade sites. 
            If you will sell in the steam, then you won't wait tradelock but you will pay a commission of 13% and will be up 7%.</p>
            <p className="blog-p">
            With such a simple scheme, we can get pretty good profit depends on how many our orders will work. 
            There are still a lot of such schemes, about some we will write in our <Link href="/blog"><a className="blog-link">Blog</a></Link>.
            </p>
            <h2 className="blog-subtitle">How to find skins to buy</h2>
            <p className="blog-p">To finding the most profitable skins we are using special skin tables</p>
            <p className="blog-p">The most popular of them :</p>
            <p className="blog-p">
                <a href="https://tradeback.io/en">tradeback.io</a> - recommended
                <br/>
                <a href="https://skins-table.xyz">skin-table.xyz</a>
                <br/>
                We have special post were we show how to use them.
            </p>
            <p className="blog-p">
                But the trade does not end there, there are also stickers, floats and patterns.
            </p>
            <h2 className="blog-subtitle">Stickers</h2>
            <img src="redline_stickers.webp" alt="redline with stikcers" className="redline_stickers"/>
            <p className="blog-p">Stickers are pictures that are applied to skins and give them a more effective look. 
                Some stickers are very rare and expensive, the most expensive sticker reaches a price of 15k$</p>
            <p className="blog-p">there are three types of stickers: </p>
            <ul>
            <p className="blog-p">team logos</p>
            <p className="blog-p">players autographs</p>
            <p className="blog-p">some random images</p>
            </ul>
            <p className="blog-p">If the sticker is applied to the skin, then usually you can increase the price of your skin by 10% of the sticker price, if the sticker is very rare then by 20%. 
                It is also worth paying attention to the combination of stickers, if the combination is suitable for coloring the skin or is just rare for it, 
                you can also increase the price of the skin by 20% of the sum of all stickers. maximum number of stickers that can be pasted on the skin is 4.</p>
            <h2 className="blog-subtitle">Floats</h2>
            <img src="floats.webp" alt="floats" className="floats"/>
            <p className="blog-p">Floats represent the degree of deterioration of the skin. There are 5 types of floats: </p>
            <p className="blog-p">FN - Factory New, range from 0.00 - 0.07</p>
            <p className="blog-p">MW - Minimal Wear, range from 0.07 - 0.15</p>
            <p className="blog-p">FT - Field Tested, range from 0.15 - 0.38</p>
            <p className="blog-p">WW - Well Worn, range from 0.38 - 0.44</p>
            <p className="blog-p">BS - Batle Scared, range from 0.44 - 1.0</p>
            <p className="blog-p">Some skins have their own rare floats, we will write about this skins in our <Link href="/blog"><a className="blog-link">Blog</a></Link>. Usually the lower the float, the better </p>
            <h2 className="blog-subtitle" id="patterns">Patterns</h2>
            <img src="patterns.webp" alt="pattern" className="patterns-img"/>
            <p className="blog-p">A pattern is a texture of paints that is applied to the skin. The game generates this texture randomly by moving the skin up/down/left/righ in any direction, 
                thus making it look different. So this is the reason why two skins with same quality and exterior can look different from each other.</p>
            <p className="blog-p">A rare pattern can increase the price of a skin a couple of times. We have our patterns page where you can find every pattern in the game</p>
        </main>
        <Footer />
    </div>
    )
}

export default trade
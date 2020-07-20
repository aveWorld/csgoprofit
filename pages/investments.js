import { faMale, faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Anime from 'react-anime';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'
import Link from 'next/link'


const Investments = () => {
    return (
    <div className="container-blog">
        <Head>
            <title>CS:GO Investments</title>
            <meta name="description" content="Learn how to make profitable investments in CS:GO" />
        </Head>
        <Navbar />
        <main className="container-wrapper">
            <h1 className="blog-title">CS:GO Investments</h1>
            <p className="blog-p">If you want to get profit without wasting time, then investment is the perfect solution for you.
            All you have to do is invest in cs go items and wait until they grow in value.
            Basic investment principle is illustrated below.</p><br/>
            <div className="animation">
                <FontAwesomeIcon icon={faMale} className="male-icon"/>
                <Anime easing="easeOutQuart"
                direction="normal"
                loop={true}
                translateX={[0,140]}
                opacity={[1,1,1,0]}
                duration={2000}
                delay={1700}
                className="money-animation"
                >
                <FontAwesomeIcon icon={faMoneyBillAlt} className="money money1"/>   
                </Anime>
                <img src="/steam.png" alt="steam" className="steam-icon"/>
            </div>
            <div className="animation-clock">
                <div className="clock">
                    <div className="center"></div>
                    <div className="big-hand"></div>
                    <div className="short-hand"></div>
                </div> 
            </div>
            <div className="animation">
                <img src="/steam.png" alt="steam" className="steam-icon2"/>
                <Anime easing="easeOutQuart"
                direction="normal"
                loop={true}
                translateX={[0,140]}
                opacity={[1,1,1,0]}
                duration={2000}
                delay={(el, index) => (index * 1000)+1000}
                className="money-animation"
                >
                <FontAwesomeIcon icon={faMoneyBillAlt} className="money"/>   
                <FontAwesomeIcon icon={faMoneyBillAlt} className="money"/>
                <FontAwesomeIcon icon={faMoneyBillAlt} className="money"/>
                </Anime>
                <FontAwesomeIcon icon={faMale} className="male-icon2"/>
            </div>
            
            <p className="blog-p">Of course you can add money to a Swiss bank and also get % of this money. 
            But the main difference is that from your deposit in the bank you will receive 1% per year, when with a competent investment to CS GO the minimum income will be 100%.
            Of course, investing in a bank is safer, 
            in Steam your account may be banned and all your money will be lost, but you should not worry with a competent approach the probability of a ban is minimal.
            </p>

            <h2 className="blog-subtitle">Two main principles of good investments</h2>

            <p className="blog-p">Split the bank: for example, we have 1000 dollars, we have to divide it conditionally into 10 parts of 100 dollars each and invest from each of these parts in different skins, 
            this is done for greater stability.</p>
            <div className="bad-investment"><p className="blog-p">You invested all your money in one investment, it turned out to be not very successful, and for the year you mutilated your money by 1.5, 
                that is, the net profit for the year amounted to <span className="bad-investment--span">500 dollars</span></p></div> 
            <div className="good-investment"><p className="blog-p">You divided your bank into 10 parts and invested. 5 investments were not very successful and they grew by 1.5, 4 other investments turned out to be more successful and grew by 2.5 and the last investment turned out to be very successful and it grew by 5. 
            As a result, you increase your bank by (1.5 * 5 + 2.5 * 4 + 5) / 10 = 2.25. Net income is <span className="good-investment--span">1225 dollars</span></p></div>
            <p className="blog-p">Understanding when to buy : </p> 
            <img src="/graphic.webp" alt="steam graph" className="steam-graph"/>
            <p className="blog-p">There are several ways to understand when to buy an investment, the easiest is to simply compare</p> 

            <img src="/berlin2019.webp" alt="berlin2019 sticker" className="berlin"/>
            <img src="/london2018.webp" alt="london2018 sticker" className="london"/>
            <p className="blog-p">In the pictures above two capsules from different majors, which took place in different years. 
            Because the capsules with the same growth graphs will be very similar, which gives us the opportunity to determine when to invest with a simple comparison. 
            Red circles indicate the degree of growth of the capsule from Berlin, as we can now see a great opportunity to invest in it.</p>
            <p className="blog-p">
            There are many more different aspects of how to determine when to invest. We will regularly write about the best in our opinion investments in our <Link href="/blog"><a className="blog-link">Blog</a></Link>, 
            so we highly recommend to check it.
            </p>  
            
        </main>
        <Footer />
    </div>

    )
}

export default Investments
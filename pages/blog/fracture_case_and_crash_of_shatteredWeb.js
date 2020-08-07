import '../../css/blog.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Head from 'next/head'
const FractureCase = () => (
    <article className="container-blog">
        <Head>
            <title>Fracture Case and price droping of Shattered Web Case</title>
            <meta name="description" content="Lookout of new Fracture Case and explaining price droping of shattered web" />
        </Head>
        <Navbar />
        <div className="container-wrapper">
           <h1 className="align-center">New Fracture Case And Crash of Shattered Web Case</h1>
           <img src="/fracture_case.webp" alt="Fracture Case" className="fracturecase-img center-img"/>
           <h3 className="align-center pad">Why Shattered Web Case price dropped in price so much?</h3>
           <p>One reason why shattered web case was so popular and expensive is that it has 3 unique knives that you can knock out only in it</p>
           <p>And guess what? The same knives were added to the Fracture case</p>
           <img src="/fracture_collection.webp" alt="fracture collection" className="fracture-img"/>
           <p>That's the reason why shattered web dropped in price.</p>
           <h3 className="align-center pad">Should I sell my shattered web cases</h3>
           <p>Definitely not, shattered web case is unique, that's mean the amount of this case will only decreasaing.</p>
           <p>And the lower amount the higher price</p>
           <h3 className="align-center pad">Lookout of Fracture Case and price forecast</h3>
           <p>Is has really good looking AK-47 | Legion of Anubis</p>
           <img src="/ak47_legionOfAnubis.webp" alt="AK 47 | Legion Of Anubis" className="fracture-img"/>
           <p>Glock-18 | Vogue also worth attention</p>
           <img src="/glock_vogue.webp" alt="Glock | Vogue" className="fracture-img"/>
           <p>I think that the fate of the Fracture case is the same as that of the Prisma 2 case, drawdown in price by at least 5 times in the near future</p>
        </div>
        <Footer />
    </article>    
)

export default FractureCase;
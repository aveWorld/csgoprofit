import '../../css/blog.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Head from 'next/head'

const boston = () => (
    <article className="container-blog">
        <Head>
            <title>Rio 2020 is canceled</title>
            <meta name="description" content="Valve canceled CS:GO major in Rio" />
        </Head>
        <Navbar />
         <div className="container-wrapper">
            <h1 className="align-center">Valve canceled Rio 2020 CS:GO major</h1>
            <img src="" alt=""/>
            <h3>How you can make money on it?</h3>
            <p>items from previuos majors will start to grow, </p>
        </div>
        <Footer />
    </article>
)

export default boston;
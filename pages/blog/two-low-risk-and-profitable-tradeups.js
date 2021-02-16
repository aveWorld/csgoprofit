import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Head from 'next/head';
const Tradeups = () => (
  <article className="container-blog">
    <Head>
      <title>Two low risk and profitable tradeups</title>
      <meta
        name="description"
        content="two low risk and profitable tradeups with profitability 120%+"
      />
    </Head>
    <Navbar />
    <div className="container-wrapper">
      <p className="number">1.</p>
      <p className="blog-p">tradeup cost : 4$</p>
      <p className="blog-p">profitability : 125%</p>
      <div className="collection">
        <img src="/revolver_case.webp" alt="revolver collection" />
        <span> - 5x ST FT Mil-Spec from Revolver Collection</span>
      </div>
      <div className="collection">
        <img src="/breakout_case.webp" alt="breakout collection" />
        <span> - 5x ST MW Mil-Spec from Breakout Collection</span>
      </div>
      <span className="avg-float">average float &le; 0.15</span>
      <p className="blog-p">In average you will make 1$ for each tradeup.</p>
      <p className="blog-p">Possible Outputs:</p>
      <img src="/outcome1.webp" alt="outcome" className="image-optimization" />

      <p className="number">2.</p>
      <p className="blog-p">tradeup cost : 2.14$</p>
      <p className="blog-p">profitability : 123%</p>
      <div className="collection">
        <img src="/prisma_case.webp" alt="prisma collection" />
        <span> - 7x MW Mil-Spec from Prisma 1 Collection</span>
      </div>
      <div className="collection">
        <img src="/breakout_case.webp" alt="breakout collection" />
        <span> - 3x FN Mil-Spec Breakout Skins</span>
      </div>
      <span className="avg-float">average float &le; 0.07</span>
      <p className="blog-p">In average you will make 0.53$ for each tradeup.</p>
      <p className="blog-p">Possible Outputs:</p>
      <img src="/outcome2.webp" alt="outcome" className="image-optimization" />
    </div>
    <Footer />
  </article>
);

export default Tradeups;

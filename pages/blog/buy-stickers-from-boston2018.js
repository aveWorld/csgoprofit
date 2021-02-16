import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Head from 'next/head';

const boston = () => (
  <article className="container-blog">
    <Head>
      <title>Buy CS:GO stickers from Boston 2018</title>
      <meta
        name="description"
        content="Buy CS:GO stickers from Boston 2018. They will blow up soon"
      />
    </Head>
    <Navbar />
    <div className="container-wrapper">
      <h1 className="align-center">Why you should buy CS:GO stickers from Boston 2018</h1>
      <p>
        I will use strategy of comparing to proof you that boston stickers will double your money in
        less than 1 month
      </p>
      <p>
        I will compare stickers from Atlanta 2017 and Boston 2018. My main criteria will be price
        and quantity.
      </p>
      <p>Let's take a look at Astralis (foil) | Boston 2018</p>
      <img
        src="/astralis_boston.webp"
        alt="Astralis (foil) | Boston 2018"
        className="image-optimization"
      />
      <p>quantity: 8</p>
      <p>price: 40$</p>
      <p>
        Min buy offer is 35 but I don't shink someone will sell you sticker for that price, so le's
        count it as 40$
      </p>
      <p>Now let's look at Astralis (foil) | Atlanta 2017</p>
      <img
        src="/astralis_atlanta.webp"
        alt="Astralis (foil) | Atlanta 2017"
        className="image-optimization"
      />
      <p>quantity: 11</p>
      <p>price: 133$</p>
      <p>Surprise surprise, its more quantity with way bigger price</p>
      <img
        src="/astralis_atlantaGraph.webp"
        alt="Astralis (foil) | Atlanta 2017 Graphic"
        className="image-optimization"
      />
      <p className="image-sign">Astralis (foil) | Atlanta 2017</p>
      <p>
        The red line marks at what stage sticker from Boston is. As you can see price will doubled
        in the next month
      </p>
      <p>
        Conclusion: sticker from Boston 2018 are 100% grow investment, but you should hurry up.
        because it will grow very soon.
      </p>
    </div>
    <Footer />
  </article>
);

export default boston;

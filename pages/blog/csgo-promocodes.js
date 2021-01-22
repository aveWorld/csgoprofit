import '../../css/blog.css';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Head from 'next/head';

const promocodes = () => (
  <article className="container-blog">
    <Head>
      <title>CS GO Promo Codes - CSGOPROFIT</title>
      <meta
        name="description"
        content="Find out about CS GO promo codes, why they exists and where to find them."
      />
    </Head>
    <Navbar />
    <div className="container-wrapper">
      <h1 className="align-center">CS GO promo codes</h1>
      <img
        src="/promocode.webp"
        alt="csgo promocode"
        className="center-img img-50"
      />
      <h3>Why CS GO websites have promo codes?</h3>
      <p>
        Promocodes for websites are almost profitable.despite the fact that you
        take free money on the site using a promo code, this money cannot be
        cashed out, and you must play with it or deposit more money to buy
        skins. Furthemore they get a new client that possibly can spend much
        more money. So, this is win win situation for a website.
      </p>
      <h3>Where to find CS GO promo codes?</h3>
      <p>
        Usually you can just google for a promo code for your website and most
        probably you'll find it. But we recommend to check promo codes from our
        site{' '}
        <a href="https://csgoprofit.org/promocodes" target="_blank">
          promo codes
        </a>
        , we have variety of promocodes to different websites.
      </p>
      <h3>How to use CS GO promocodes?</h3>
      <p>
        There are two types of promo codes: <br />
        <ol>
          <li>
            Promo code that you have to paste on the website to get your bonus
          </li>
          <li>
            Referral link, to get a bonus you have to open this link and login
          </li>
        </ol>
      </p>
      <h3>How many people can use signle promo code?</h3>
      <p>In most cases endless amount of people can use the same promo code.</p>
    </div>
    <Footer />
  </article>
);

export default promocodes;

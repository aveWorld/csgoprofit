import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Head from 'next/head';
import Link from 'next/link';

const OpenCase = () => (
  <article className="container-blog">
    <Head>
      <title>Open Case Simulator - CS:GO Profit Blog</title>
      <meta
        name="description"
        content="CS:GO open case simulator with profit indicator. Open CS:GO cases for free and track the profit"
      />
    </Head>
    <Navbar />
    <div className="container-wrapper">
      <h1 className="align-center">CS:GO open case simulator from CSGOPROFIT</h1>
      <h3>Always wanted to open CS:GO cases, but were worried about loosing money?</h3>
      <p>
        Now you can to it for free.{' '}
        <Link href="/case-simulator">
          <a> Our open case simulator</a>
        </Link>{' '}
        have similiar animations and sound effects as in original one. Furthermore, it has identical
        skin winning probabilities.
      </p>
      <h3>Wanna know how proftable it is to open CS:GO cases?</h3>
      <p>
        <Link href="/case-simulator">
          <a> Our open case simulator</a>
        </Link>{' '}
        has profit indicator, so you can open every case and track the profit you get.
      </p>
      <p>
        Open CS:GO cases for free with{' '}
        <Link href="/case-simulator">
          <a>open case simulator</a>
        </Link>{' '}
      </p>
      <img src="/case-simul.webp" alt="" className="center-img open-case__img" />
      <p>28.01.2021</p>
      <p>Have an interesting offer? Please refer to the contacts below</p>
    </div>
    <Footer />
  </article>
);

export default OpenCase;

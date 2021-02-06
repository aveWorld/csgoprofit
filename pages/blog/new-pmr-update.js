import '../../css/blog.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Head from 'next/head';
const PmrUpdate = () => (
  <article className="container-blog">
    <Head>
      <title>New 2021 PMR CS:GO capsules update</title>
      <meta name="description" content="Lookout of new capsules from 2021 PMR CS:GO update" />
    </Head>
    <Navbar />
    <div className="container-wrapper">
      <h1 className="align-center">New stickers from 2021 CS:GO PMR Update</h1>
      <img src="/PMR.webp" alt="Fracture Case" className="center-img pmr-update-img" />
      <h3 className="align-center pad">Why Shattered Web Case price dropped in price so much?</h3>
      <p>
        Team Stickers have been added today to celebrate the hard work of CS: GO teams in 2020. For
        these stickers, 50% of the purchases support the teams.
      </p>
      <h3>As usually there are 3 type of PMR capsules:</h3>
      <ul className="pmr-update-ul">
        <li>2020 PMR Legends</li>
        <li>2020 PMR Challengers</li>
        <li>2020 PMR Contenders</li>
      </ul>
      <img src="/pmr_cap.webp" alt="Fracture Case" className="center-img pmr-update-img" />
      <h3>Market situation:</h3>
      <p>
        This news ALREADY affected the prices of old capsules, which flew off to a steep peak and
        lost up to -20% in some positions. And I am sure that this is far from the end: after all,
        many investors will continue to drain old capsules in panic.
      </p>
      <p>28.01.2021</p>
    </div>
    <Footer />
  </article>
);

export default PmrUpdate;

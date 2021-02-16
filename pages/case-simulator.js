import React, { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function openCase() {
  useEffect(() => {
    const img = document.querySelector('.case__block__img');
    const bgImg = document.querySelector('.case__block__img-bg__img');
    const text = document.querySelector('.case__block__text');
    img.addEventListener('mouseenter', () => {
      img.classList.add('case__hover');
      bgImg.classList.add('case__bg-img__hover');
      text.classList.add('case__block__text__hover');
    });
    img.addEventListener('mouseleave', () => {
      img.classList.remove('case__hover');
      bgImg.classList.remove('case__bg-img__hover');
      text.classList.remove('case__block__text__hover');
    });
  });
  return (
    <>
      <Head>
        <title>CS:GO Profit - Open Case Simulator - Open CS:GO Cases For Free</title>
        <meta
          name="description"
          content="CS:GO open case simulator. Free CS:GO cases roll, variety of cases. Try your luck"
        />
      </Head>
      <Navbar />
      <div className="open-case">
        <h1 className="open-case__title">Free CS:GO open case simulator</h1>
        <div className="cases__blocks">
          <Link href="/case-simulator/broken-fang">
            <a className="case__block">
              <div className="case__block__img-bg">
                <img src="/broken_fang_img.png" alt="" className="case__block__img-bg__img" />
              </div>
              <img src="/broken_fang_case.png" alt="broken fang" className="case__block__img" />
              <h3 className="case__block__text">Broken Fang Case</h3>
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

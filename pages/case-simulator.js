import React, { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function openCase() {
  useEffect(() => {
    const caseBlock = document.querySelectorAll('.case__block');
    caseBlock.forEach((block) => {
      block.childNodes[1].addEventListener('mouseenter', () => {
        block.childNodes[1].classList.add('case__hover');
        block.childNodes[0].childNodes[0].classList.add('case__bg-img__hover');
        block.childNodes[2].classList.add('case__block__text__hover');
        block.childNodes[3].classList.add('case__block__text__hover');
      });
      block.childNodes[1].addEventListener('mouseleave', () => {
        block.childNodes[1].classList.remove('case__hover');
        block.childNodes[0].childNodes[0].classList.remove('case__bg-img__hover');
        block.childNodes[2].classList.remove('case__block__text__hover');
        block.childNodes[3].classList.remove('case__block__text__hover');
      });
    });
    return () => {
      caseBlock.forEach((block) => {
        block.childNodes[1].removeEventListener('mouseenter', () => {
          block.childNodes[1].classList.add('case__hover');
          block.childNodes[0].childNodes[0].classList.add('case__bg-img__hover');
          block.childNodes[2].classList.add('case__block__text__hover');
        });
        block.childNodes[1].removeEventListener('mouseleave', () => {
          block.childNodes[1].classList.remove('case__hover');
          block.childNodes[0].childNodes[0].classList.remove('case__bg-img__hover');
          block.childNodes[2].classList.remove('case__block__text__hover');
        });
      });
    };
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
        <h3 className="open-case__subtitle">
          <span>Expensive Cases</span>
        </h3>
        <div className="cases__blocks">
          <Link href="/case-simulator/hydra">
            <a className="case__block">
              <div className="case__block__img-bg hydra-bg">
                <img src="/hydra_operation.png" alt="" className="case__block__img-bg__img" />
              </div>
              <img src="/hydra_case.png" alt="broken fang" className="case__block__img" />
              <h3 className="case__block__text">Hydra Case</h3>
              <p className="case__block__price">case price: 6.9$</p>
            </a>
          </Link>
          <Link href="/case-simulator/operation-bravo">
            <a className="case__block">
              <div className="case__block__img-bg bravo-bg__block">
                <img
                  src="/operation_bravo.png"
                  alt=""
                  className="case__block__img-bg__img bravo-bg"
                />
              </div>
              <img src="/bravo_case.png" alt="broken fang" className="case__block__img" />
              <h3 className="case__block__text">Operation Bravo Case</h3>
              <p className="case__block__price">case price: 25.53$</p>
            </a>
          </Link>
        </div>
        <h3 className="open-case__subtitle">
          <span>Cheap Cases</span>
        </h3>
        <div className="cases__blocks">
          <Link href="/case-simulator/broken-fang">
            <a className="case__block">
              <div className="case__block__img-bg">
                <img src="/broken_fang_img.png" alt="" className="case__block__img-bg__img" />
              </div>
              <img src="/broken_fang_case.png" alt="broken fang" className="case__block__img" />
              <h3 className="case__block__text">Broken Fang Case</h3>
              <p className="case__block__price">case price: 0.71$</p>
            </a>
          </Link>

          <Link href="/case-simulator/clutch-case">
            <a className="case__block">
              <div className="case__block__img-bg bravo-bg__block">
                <img
                  src="/clutchCaseLogo.png"
                  alt=""
                  className="case__block__img-bg__img clutch-bg"
                />
              </div>
              <img src="/clutchCase.png" alt="broken fang" className="case__block__img" />
              <h3 className="case__block__text">Clutch Case</h3>
              <p className="case__block__price">case price: 0.25$</p>
            </a>
          </Link>
          <Link href="/case-simulator/fracture-case">
            <a className="case__block">
              <div className="case__block__img-bg">
                <img
                  src="/fractureCaseLogo.png"
                  alt=""
                  className="case__block__img-bg__img fracture-bg"
                />
              </div>
              <img src="/fractureCase.png" alt="broken fang" className="case__block__img" />
              <h3 className="case__block__text">Fracture Case</h3>
              <p className="case__block__price">case price: 0.55$</p>
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

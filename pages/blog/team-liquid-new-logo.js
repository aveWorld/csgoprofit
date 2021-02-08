import React from 'react';
import '../../css/blog.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Head from 'next/head';

export default function LiquidNewLogo() {
  return (
    <article className="container-blog">
      <Head>
        <title>Team Liquid New Logo</title>
        <meta name="description" content="Lookout of new Team Liquid logo." />
      </Head>
      <Navbar />
      <div className="container-wrapper">
        <h1 className="align-center">New Logo in Team Liquid</h1>
        <img
          src="/new_team_liquid_logo.webp"
          alt="team liquid logo"
          className="center-img team-liquid-img"
        />
        <p>Team Liquid is going to announce new logo today 08/02/2021</p>
        <a href="https://twitter.com/TeamLiquid/status/1358490731875246080?s=20">
          watch on twitter
        </a>
        <h3>What would happen with prices of stickers?</h3>
        <p>
          Well, I think it will as usuall. Firstly, instant rise of prices, then the price will
          slowly but surely fall to intial.
        </p>
        <h3>How to make money on it?</h3>
        <p>
          The best strategy is to find stickers on marketplaces for default price and then
          immediately sell them in steam for higher price. If you're already have sticker it would
          great idea to sell them on pick price and resell them when they dtop to initial price.
        </p>
        <h3>How to know when some team is going to change their logo</h3>
        <p>
          The most obvious is to follow the biggest CS:GO channels and teams social media. But even
          if you do it, you can't be sure that the insight will be posted on social media before
          it's too late.
        </p>
        <p>
          The best work strategy is to have insider that works directly in some team. The only
          disadvantage is that it's pretty hard to find one, so probably the first method is more
          real.
        </p>
      </div>
      <Footer />
    </article>
  );
}

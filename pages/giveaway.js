import fetch from 'isomorphic-unfetch'
import React, {useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import Head from 'next/head'



const giveAway = ({data}) => {
    // console.log(data.cookies.participate, data.json.doc, data.json.count)
    const [cookie, setCookie] = useState(data.cookies.participate)
    const [link, setLink] = useState("");
    const [validation, setValidation] = useState("false");
    const getLink = e => {
      setLink(e.target.value)
    }

    const updateMacros = async () => {
        try {
            if(link.includes('https://steamcommunity.com/tradeoffer/new/')){
            setValidation('false')
            setCookie('true');
            const res = await fetch('https://csgoprofit.org/api/restapi', { 
                method: 'post',
                body: JSON.stringify(link)
            })
        }
            else {
                setValidation('true')
            }
        } catch(err) {
            console.log('cant make post request to db')
            throw err;
        }
    }


    return (
    <main className="giveaway">
        <Head>
            <title>CS:GO Profit - Give Away Skins</title>
            <meta name="description" content="Win free CS:GO skins with CSGOPROFIT" />
        </Head>
        <Navbar />
      <div className="giveaway-wrapper">
      <h1 className="giveaway-title">CS:GO Skins Give Away</h1>
      <div className="places">
        <div className="place first-place">
            <h3>1st Place</h3>
            <p>AK-47 | Phantom Disruptor(FT)</p>
            <img src="/phantom_disruption.webp" alt="AK | Phantom Disruption"/>
        </div>
        <div className="place second-place">
            <h3>2nd Place</h3> 
            <p>USP-S | Cyrex(FT)</p>     
            <img src="/usps_cyrex.webp" alt="USP-S | Cyrex"/>
        </div>
     </div>
     <div className="participating">Participating : {data.json.count}</div>
     <p className="giveaway-winners">winners will be announced 30.07.2020</p>
      {cookie? (
          <div className="participate-true">You are participating!</div>
      ) : (
        <div>
            <span className="howtoparticipate">To participate you just need to enter your trade link</span>
            <input type="text" onChange={getLink} className="tradelink" placeholder="Trade Link"/><br/>
            <p className="incorrent-tradelink" style={validation=='true'?{display:"block"} : {display:"none"}}>incorrent tradelink!</p>
            <button onClick={updateMacros} className="btn draw-border giveaway-btn">Participate</button>
        </div>
      )}
      </div>
      <Footer />
    </main>
    )
 }

export async function getStaticProps(context) {
    const cookies = parseCookies(context)
    // console.log(cookies)
    try {
        const res = await fetch("https://csgoprofit.org/api/restapi");
        const json = await res.json();
        return {
            props: {
            data: {json, cookies},
            },
        };
    } catch {
        console.log('can not fetch data from db')
    }
    
}

export default giveAway
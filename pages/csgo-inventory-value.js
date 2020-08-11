import fetch from 'isomorphic-unfetch'
import React, {useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'



const inventoryValue = ({data}) => {
    const [ID, setID] = useState("");
    const [result, setResult] = useState({});

    const getID = e => {
        setID(e.target.value)
    }

    const sendID = async () => {
        setResult(false)
        try {
            let res = await fetch('api/inventoryValue', { 
                method: 'post',
                body: JSON.stringify(ID)
            })
            let resultData = await res.json()
            setResult(resultData)
        } catch(err) {
            console.log('cant make post request ot send ID')
            throw err;
        }
    }
    return (
    <main className="giveaway">
        <Head>
            <title>CS:GO Inventory Value Checker</title>
            <meta name="description" content="Check your CS:GO inventory value" />
        </Head>
        <Navbar />
        <div className="giveaway-wrapper">
            <h1 className="align-center inventory-title color-white">CS:GO inventory value checker</h1>
            <p className="align-center color-white">Enter your Steam ID or nickname</p>
            <input type="text" onChange={getID} className="tradelink" placeholder="Steam ID or nickname"/><br/>
            <button onClick={sendID} className="btn-inv draw-border giveaway-btn">search</button>
            <div className="loader" style={result?{display:'none'} : {display:'block'}}>Loading...</div>
            {Object.keys(result).length > 0 && result.img? (
                <div className="inventory-container">
                <div>{result.name}</div>
                <a href={result.href}>
                    <img src={result.img} alt="img"/>
                </a>
                <div className="inv-value">{result.value}</div>
                <div className="inv-better">{result.betterThan}</div>
                </div>
            ) : Object.keys(result).length > 0 && result.private?(
                <div className="inv-err">Your inventory can't be found</div>
            ) : false}
            <h2 className="top-inventories--title">Top CS:GO Inventories</h2>
            <div className="inventories">
                <li>
                    <span>1</span>
                    <a href="http://steamcommunity.com/profiles/76561198290673989" rel="nofollow" target="_blank">
                        <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ea/ea0f2953132df846a078f08d4337ceb947f9dcaf_full.jpg" alt="image preview"/>
                    </a>
                    <span className="top-inventories--name">Maria - vgoreaper.gg</span>
                    <span>266 125.10€</span>
                </li>
                <li>
                    <span>2</span>
                    <a href="http://steamcommunity.com/profiles/76561198210421051" rel="nofollow" target="_blank">
                        <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4c/4c6510ecf2956afcda46b20ca07bd3a06eb27350_full.jpg" alt="image preview"/>
                    </a>
                    <span className="top-inventories--name">Mcskillet's best friend</span>
                    <span>256 629.32€</span>
                </li>
                <li>
                    <span>3</span>
                    <a href="http://steamcommunity.com/profiles/76561198336029776" rel="nofollow" target="_blank">
                        <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/50/500b1f06377552ebca48473ff9108352af9d7382_full.jpg" alt="image preview"/>
                    </a>
                    <span className="top-inventories--name">Joe CSGORoll.com</span>
                    <span>	251 713.53€</span>
                </li>
                <li>
                    <span>4</span>
                    <a href="http://steamcommunity.com/profiles/76561198290565710" rel="nofollow" target="_blank">
                        <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ab/ab8a9cc4c02a8fec29312ec6d2b36839b2a44683_full.jpg" alt="image preview"/>
                    </a>
                    <span className="top-inventories--name">Stiffler vgoreaper.gg</span>
                    <span>179 712.93€</span>
                </li>
                <li>
                    <span>5</span>
                    <a href="http://steamcommunity.com/profiles/76561198012340941" rel="nofollow" target="_blank">
                        <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/36/369e275a5ad9c6da5f678c25996f7fb129ba2063_full.jpg" alt="image preview"/>
                    </a>
                    <span className="top-inventories--name">CODE: BIBA on Rollbit.com ❤</span>
                    <span>164 774.99€</span>
                </li>
                <li>
                    <span>6</span>
                    <a href="http://steamcommunity.com/profiles/76561198202122138" rel="nofollow" target="_blank">
                        <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/d2/d23cda13a67253be8d0878961924986d499fcd9c_full.jpg" alt="image preview"/>
                    </a>
                    <span className="top-inventories--name">kugio</span>
                    <span>152 419.25€</span>
                </li>
                <li>
                    <span>7</span>
                    <a href="http://steamcommunity.com/profiles/76561197961066193" rel="nofollow" target="_blank">
                        <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/21/216867ec55b5af96f705be0bdd5642544ab570d3_full.jpg" alt="image preview"/>
                    </a>
                    <span className="top-inventories--name">☠ :D roflsaur</span>
                    <span>119 012.64€</span>
                </li>
                <li>
                    <span>8</span>
                    <a href="http://steamcommunity.com/profiles/76561198027016127" rel="nofollow" target="_blank">
                        <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/79/79650667c47cdf598c75c4d3ea4d532ce44ff671_full.jpg" alt="image preview"/>
                    </a>
                    <span className="top-inventories--name">zipelCS buying skins</span>
                    <span>115 402.35€</span>
                </li>
                <li>
                    <span>9</span>
                    <a href="http://steamcommunity.com/profiles/76561198036030455" rel="nofollow" target="_blank">
                        <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/13/138a1b562ba04216c7fb6e2fdd72fb5e36e3daa4_full.jpg" alt="image preview"/>
                    </a>
                    <span className="top-inventories--name">GeRy | csgotrader.app</span>
                    <span>112 686.91€</span>
                </li>
                <li>
                    <span>10</span>
                    <a href="http://steamcommunity.com/profiles/76561198294973157" rel="nofollow" target="_blank">
                        <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/bb/bb3e01fe08d065e5ffdb67c9842ff71ee5e1bd95_full.jpg" alt="image preview"/>
                    </a>
                    <span className="top-inventories--name">Chris</span>
                    <span>111 315.37€</span>
                </li>
            </div>
        </div>
      <Footer />
    </main>
    )
 }

// export async function getServerSideProps(context) {
//     // const cookies = parseCookies(context)
//     // // console.log(cookies)
//     // try {
//     //     const res = await fetch("https://csgoprofit.org/api/restapi");
//     //     const json = await res.json();
//     //     return {
//     //         props: {
//     //         data: {json, cookies},
//     //         },
//     //     };
//     // } catch {
//     //     console.log('can not fetch data from db')
//     // }
//     return {
//         props: {
//             giveaway: 'giveaway end'
//         }
//     }
    
// }

export default inventoryValue
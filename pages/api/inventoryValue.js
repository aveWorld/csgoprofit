import nextConnect from 'next-connect';


const request = require('request');
const cheerio = require('cheerio')

const handler = nextConnect();

handler.post(async (req, res) => {
    try {
        let ID = JSON.parse(req.body);
        let URL = encodeURI(`https://csgobackpack.net/?nick=${ID}`)
        request(URL, (error, response, html) => {
            if (!error && response.statusCode == 200) {
                const $ = cheerio.load(html);
                let betterThan = $('h3 a').attr('title');
                let str = $('h3').text()
                if(str.length == 0) {
                    return res.json({private : 'private'})
                }
                let totalIndex = str.indexOf('In total');
                let euroIndex = str.indexOf('€');
                let name = str.slice(0,totalIndex);
                let value = str.slice(totalIndex, euroIndex + 1);
                let img = $('.img-rounded').attr('src')
                let href = $('.media-left a').attr('href')
                if(name.includes('is private')){
                     value = 'Your inventory is private'
                     let nameindex = name.indexOf('This inventory')
                     name = name.slice(0,nameindex)
                }
                if(betterThan == undefined) betterThan = 'You better than noone'
                return res.json({betterThan, name, value, img, href})
            }
            else {
                throw error
            }
        })
    } catch(err) {
        throw err
    }
})

export default (req, res) => handler.apply(req, res) 


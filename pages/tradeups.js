import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function tradeups() {
    return (
        <div className="container-blog">
            <Navbar />
            <div className="container-wrapper">
                <h1 className="blog-title">CS GO Trade Up Contracts</h1>
                <p className="blog-p">skins in cs go are distributed among collections, each collection has</p>
                <ul>
                <p className="blog-p mill">Mil-Spec skins, least valuable skins, amount: 7</p>
                <p className="blog-p restricted">Restricted, amount: 5</p>
                <p className="blog-p classified">Classified, amount: 3</p>
                <p className="blog-p covert">Covert, amount: 2</p>
                <p className="blog-p rare before-color">Rare, the most valuable skins, knife or gloves</p>
                </ul>
                <div className="quality">
                    <div className="quality-item">Mil-Spec skins</div>
                    <div className="quality-item">Restricted</div>
                    <div className="quality-item">Classified</div>
                    <div className="quality-item">Covert</div>
                    <div className="quality-item">Rare</div>
                </div>
                <p className="blog-p">The principle of contracts is that if you take 10 Mil-Spec skins and use them in the contract you can get 1 Restricted skin with 
                    probability of 20% besause there 5 Restricted skins. maximum quality you can craft is Covert, you can't craft Rare skin.</p>
                <p className="blog-p">Of course, if you take 5 Mil-Spec skins from one collection and 5 from other, then you can craft any of 10 Restricted skins from both collection
                    with probability of 10%.
                </p>   
                <p className="blog-p">It's also very useful to know what exacly float your crafted skin will have. It can be calculated by formula:</p>
                <p className="blog-p">Trade UP Float Value = 
                (<span className="max-float">Max Float</span> - <span className="min-float">Min Float</span>) * <span className="avg">AVG</span> + <span className="min-float">Min Float</span></p>
                <p className="blog-p"><span className="max-float">Max Float</span> - maximal float of your 10 skins</p>
                <p className="blog-p"><span className="min-float">Min Float</span> - minimal float of your 10 skins</p>
                <p className="blog-p"><span className="avg">AVG</span> - sum of your all floats divided by their amount</p>
                <p></p>
            </div>
            <Footer />
        </div>
    )
}
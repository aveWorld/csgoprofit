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
                <p className="blog-p distribution">This distribution doesn't work for all collection, there are collection like Cobblestone Collection, that distributed different.</p>
                <p className="blog-p">The principle of contracts is it takes the names of all the possible outcomes and then rolls through those. 
                Maximum quality you can craft is Covert, you can't craft Rare skin.</p>
                <p className="blog-p">So for instance, if you have one M4A1-S | Knight, that has one outcome AWP | Dragon Lore and 9 other Classified skins with 2 outcomes each,
                then those 9 with 2 outcomes each would be 18 outcomes + the 1 from the knight. So you would have a 1 in 19 chance to get the AWP | Dragon Lore. 
                But if you use 9 other skins with 1 outcome each then it would be a 10% chance or 1 in 10, because there are only 10 different outcomes.
                </p>   
                <p className="blog-p">It's also very useful to know what exacly float your crafted skin will have. It can be calculated by formula:</p>
                <p className="blog-p">Trade UP Float Value = 
                (<span className="max-float">Max Float</span> - <span className="min-float">Min Float</span>) * <span className="avg">AVG</span> + <span className="min-float">Min Float</span></p>
                <p className="blog-p"><span className="max-float">Max Float</span> - maximal float of outputs</p>
                <p className="blog-p"><span className="min-float">Min Float</span> - minimal float of outputs</p>
                <p className="blog-p"><span className="avg">AVG</span> - sum of your all input floats divided by their amount</p>
                <p></p>
            </div>
            <Footer />
        </div>
    )
}
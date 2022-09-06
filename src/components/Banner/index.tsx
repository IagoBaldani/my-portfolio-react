import seta from '../../assets/img/seta.png';
import './styles.css';
import Translator from "../I18N/Translator";


function Banner() {

    return (
        <section>
            <div className="container banner" id="home">
                <div className="imgbanner"> </div>
                <h2> • IAGO BALDANI • </h2>
                <h1> SOFTWARE <span className="highlight"> DEVELOPER JR </span></h1>
                <img src={seta} height="40px"/>
                <h3> {Translator('arrasteParaBaixo')} </h3>
            </div>
        </section>
    )
}

export default Banner;


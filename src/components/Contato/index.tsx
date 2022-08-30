import tel from '../../assets/img/tel.svg';
import mail from '../../assets/img/mail.svg';
import github from '../../assets/img/github1.svg';
import linkedin from '../../assets/img/linkedin.svg';
import ilustracao from '../../assets/img/Img-portfolio.png';

import './styles.css';
import Translator from "../I18N/Translator";

function Contato() {
    return (
        <section>
            <div className="container contato" id="contato">
                <div className="upper">
                    <h2>{Translator('contatoTitulo')}</h2>
                    <div className="entalhe"/>
                </div>
                <div className="contatolower">
                    <div className="left">
                        <ul>
                            <li><img src={tel} height="30px"/><p>+55 (14) 98130-3340</p></li>
                            <li><img src={mail} height="30px"/><p>iagobaldanialmeida@hotmail.com</p>
                            </li>
                            <li><img src={github} height="30px"/> <a
                                href="https://github.com/IagoBaldani"> https://github.com/IagoBaldani</a></li>
                            <li><img src={linkedin} height="30px"/> <a
                                href="https://linkedin.com/in/iagobaldani"> https://linkedin.com/in/iagobaldani</a></li>
                        </ul>
                    </div>
                    <div className="right-img">
                        <img src={ilustracao}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contato;


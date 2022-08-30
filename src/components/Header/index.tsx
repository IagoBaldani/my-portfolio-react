import homeImg from '../../assets/img/home.png';
import sobreImg from '../../assets/img/sobre.png';
import projetosImg from '../../assets/img/projetos.png';
import contatosImg from '../../assets/img/contato.png';
import I18N from '../I18N';
import './styles.css';
import Translator from "../I18N/Translator";

function Header() {
    return (
        <header>
            <div className="container header">
                <I18N/>
                <div className="menu">
                    <ul>
                        <li>
                            <a href="#home">
                                <img src={homeImg} height="20px"/>
                                HOME
                            </a>
                        </li>
                        <li>
                            <a href="#sobre">
                                <img src={sobreImg} height="20px"/>
                                {Translator('sobreTitulo')}
                            </a>
                        </li>
                        <li>
                            <a href="#projetos">
                                <img src={projetosImg} height="20px"/>
                                {Translator('projetosTitulo')}
                            </a>
                        </li>
                        <li>
                            <a href="#contato">
                                <img src={contatosImg} height="20px"/>
                                {Translator('contatoTitulo')}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="menu-mobile">
                <I18N/>
                <div className="menu">
                    <ul>
                        <li><a href="#home"> <img src={homeImg}height="20px"/></a></li>
                        <li><a href="#sobre"> <img src={sobreImg} height="20px"/></a></li>
                        <li><a href="#projetos"> <img src={projetosImg} height="20px"/></a></li>
                        <li><a href="#contato"> <img src={contatosImg} height="20px"/></a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;


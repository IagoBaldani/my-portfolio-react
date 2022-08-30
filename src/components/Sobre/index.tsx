import ptbr from '../../assets/img/ptbr.jpg';
import ingles from '../../assets/img/ingles.jpg';
import espanhol from '../../assets/img/espanhol.png';
import './styles.css';
import Translator from "../I18N/Translator";

function Sobre() {
    const tecnologias = [
        'Java 8+',
        'SpringBoot & SpringFramework',
        'Spring Data JPA',
        'REST API',
        'HTML & CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'VueJs',
        'IBM RAD & IBM WebSphere'
    ]

    return (
    <section>
        <div className="container sobre" id="sobre">
            <div className="sobreupper">
                <div className="left">
                    <h2>{Translator('sobre.titulo')}</h2>
                    <div className="entalhe"></div>
                    <p className="paragrafo"> {Translator('sobre.primeiroParagrafo')} </p>
                    <p className="paragrafo">{Translator('sobre.segundoParagrafo')}</p>
                    <p className="paragrafo">{Translator('sobre.terceiroParagrafo')}</p>
                    <p className="paragrafo">{Translator('sobre.quartoParagrafo')}</p>
                    <p className="paragrafo">{Translator('sobre.quintoParagrafo')}</p>
                </div>
                <div className="right">
                    <h2>{Translator('sobre.tecnologias')}</h2>
                    <h4>{Translator('sobre.descricaoTecnologias')}</h4>
                    <div className="entalhe"/>

                    <ul>
                        {
                            tecnologias.map((tecnologia:string) => <li>{tecnologia}</li>)
                        }
                    </ul>
                </div>
            </div>
            <div className="sobrelower">
                <div className="lang">
                    <img src={ptbr} height="50px"/>
                    <h2>{Translator('sobre.fluente')}</h2>
                </div>
                <div className="lang">
                    <img src={ingles} height="50px"/>
                    <h2>{Translator('sobre.intermediario')}</h2>
                </div>
                <div className="lang">
                    <img src={espanhol} height="50px"/>
                    <h2>{Translator('sobre.basico')}</h2>
                </div>
            </div>
        </div>
    </section>
)
}

export default Sobre;


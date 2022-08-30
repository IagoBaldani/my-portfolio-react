import mimosbyliv from '../../assets/img/mimosbyliv.png';
import github from '../../assets/img/github.svg';
import symposium from '../../assets/img/symposium.png';
import sgac from '../../assets/img/sgac.png';

import './styles.css';
import Translator from "../I18N/Translator";

function Projetos() {
    return (
        <section>
            <div className="container projetos" id="projetos">
                <div className="upper">
                    <h2>{Translator('principaisProjetos.titulo')}</h2>
                    <div className="entalhe"></div>
                </div>
                <div className="lower">
                    <div className="item-projetos">
                        <h2>Mimos By Liv</h2>
                        <div className="entalhe"> </div>
                        <img className="imgprin" src={mimosbyliv} />
                        <div className="texto">
                            <p className="paragrafo">
                                Mimos By Liv é um catálogo dinâmico feito para uma loja online de
                                roupas e acessórios de bebês
                            </p>
                            <p className="paragrafo">
                                O sistema conta com uma área de administração, para que o administrador
                                consiga adicionar, editar e deletar produtos.
                            </p>
                            <p className="paragrafo">
                                É um projeto completamente feito por mim e utilizei as seguintes tecnologias:
                                Java SpringBoot (BackEnd) e Vue.js (FrontEnd).
                            </p>
                        </div>
                        <div className="divBotoes">
                            <a className="botoes" target="_blank" href="https://github.com/IagoBaldani/mimosbyliv-frontend">
                                <img className="botaoImg" src={github}/>
                                GitHub - FrontEnd
                            </a>
                            <a className="botoes" target="_blank" href="https://github.com/IagoBaldani/mimosbyliv">
                                <img className="botaoImg" src={github}/>
                                GitHub - BackEnd
                            </a>
                        </div>
                    </div>
                    <div className="item-projetos">
                        <h2>SGAC</h2>
                        <div className="entalhe"> </div>
                        <img className="imgprin" src={sgac}/>
                        <div className="texto">
                            <p className="paragrafo">
                                SGAC é um sistema de gerenciamento de artigos acadêmicos que
                                foi realizado com intuito de auxiliar a Fatec Ourinhos.
                            </p>
                            <p className="paragrafo">
                                É um projeto em grupo onde fiz todo o FrontEnd (HTML, CSS e JS) e
                                desenvolvi em conjunto com os outros participantes o BackEnd (PHP).
                            </p>
                        </div>
                        <div className="divBotoes">
                            <a className="botoes" target="_blank" href="https://github.com/IagoBaldani/ProjetoLabEngSoft">
                                <img className="botaoImg" src={github}/>
                                GitHub
                            </a>
                        </div>
                    </div>
                    <div className="item-projetos">
                        <h2>Symposium</h2>
                        <div className="entalhe"> </div>
                        <img className="imgprin" src={symposium}/>
                        <div className="texto">
                            <p className="paragrafo">
                                Symposium é um sistema de gerenciamento de eventos acadêmicos que foi realizado
                                como trabalho de conclusão de curso, em minha formação na faculdade.
                            </p>
                            <p className="paragrafo">
                                É um projeto desenvolvido em dupla e utilizamos as seguintes tecnologias:
                                Java SpringBoot (BackEnd) e Vue.js (FrontEnd).
                            </p>
                        </div>
                        <div className="divBotoes">
                            <a className="botoes" target="_blank" href="https://github.com/IagoBaldani/symposium">
                                <img className="botaoImg" src={github}/>
                                GitHub - FrontEnd e BackEnd
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projetos;


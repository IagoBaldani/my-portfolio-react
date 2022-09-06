import './styles.css';
import Translator from "../I18N/Translator";
import CardProjeto from "../CardProjeto";

function Projetos() {
    return (
        <section>
            <div className="container projetos" id="projetos">
                <div className="upper">
                    <h2>{Translator('principaisProjetos.titulo')}</h2>
                    <div className="entalhe"/>
                </div>
                <div className="lower">
                    <CardProjeto
                        titulo={Translator('principaisProjetos.mimosByLiv.titulo')}
                        descricao={Translator('principaisProjetos.mimosByLiv.descricao')}
                        tecnologias={Translator('principaisProjetos.mimosByLiv.tecnologias')}
                        linkGitHub='https://github.com/IagoBaldani/mimosbyliv'
                    />
                    <CardProjeto
                        titulo={Translator('principaisProjetos.symposium.titulo')}
                        descricao={Translator('principaisProjetos.symposium.descricao')}
                        tecnologias={Translator('principaisProjetos.symposium.tecnologias')}
                        linkGitHub="https://github.com/IagoBaldani/symposium"
                    />
                    <CardProjeto
                        titulo={Translator('principaisProjetos.sgac.titulo')}
                        descricao={Translator('principaisProjetos.sgac.descricao')}
                        tecnologias={Translator('principaisProjetos.sgac.tecnologias')}
                        linkGitHub="https://github.com/IagoBaldani/ProjetoLabEngSoft"
                    />
                </div>
            </div>

            <div className='modalImg'>

            </div>
        </section>
    )
}

export default Projetos;


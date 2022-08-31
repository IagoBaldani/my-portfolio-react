import mimosbyliv from '../../assets/img/mimosbyliv.png';
import symposium from '../../assets/img/symposium.png';
import sgac from '../../assets/img/sgac.png';

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
                    <CardProjeto img={mimosbyliv} titulo="Mimos By Liv" onClick={()=>{alert("sexo")}}/>
                    <CardProjeto img={sgac} titulo="SGAC" onClick={()=>{alert("sexo")}}/>
                    <CardProjeto img={symposium} titulo="Symposium" onClick={()=>{alert("sexo")}}/>
                </div>
            </div>
        </section>
    )
}

export default Projetos;


import Translator from "../I18N/Translator";
import './style.css'
import ModalProjeto from "../ModalProjeto";

type Props = {
    img: string,
    titulo: string,
    onClick: Function,
}

function CardProjeto({img, titulo, onClick} : Props) {
    return (
        <div className="item-projetos">
            <h2>{titulo}</h2>
            <div className="entalhe"/>
            <img className="imgprin" src={img} alt={titulo}/>
            <ModalProjeto textoBotao={Translator('principaisProjetos.botaoModal')}/>
        </div>
    )
}

export default CardProjeto;

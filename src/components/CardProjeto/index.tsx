import './style.css'
import file from '../../assets/img/projeto.svg'
import gitHub from '../../assets/img/github1.svg'

type Props = {
    titulo: string,
    descricao: string,
    tecnologias: string,
    linkGitHub: string
}

function CardProjeto({titulo, descricao, linkGitHub, tecnologias} : Props) {
    return (
        <>
        <div className="item-projetos">
            <div className="icones">
                <img className="icone" src={file}/>
                <a href={linkGitHub}> <img className="icone" src={gitHub}/> </a>
            </div>
            <div className="text-area">
                <div className="principal"> {titulo}</div>
                <div className="descricao"> {descricao} </div>
            </div>
            <div className="tecnologias"> {tecnologias} </div>
        </div>
        </>
    )
}

export default CardProjeto;

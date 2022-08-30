import './styles.css';
import Translator from "../I18N/Translator";

function Footer() {
    return (
        <footer>
            <div className="container footer">
                <p>{Translator('footer.todosDireitos')}</p>
                <a href="http://www.freepik.com">{Translator('footer.freePik')} </a>
            </div>
        </footer>
    )
}

export default Footer;


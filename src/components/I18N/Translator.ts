import {useTranslation} from "react-i18next";

function Translator(path : any) {
    const { t } = useTranslation();

    return t(path);
}

export default Translator;

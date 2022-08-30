
import Header from "./components/Header";
import Banner from "./components/Banner";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
  return (
      <>
        <Header/>
        <main>
            <Banner/>
            <Sobre/>
            <Projetos/>
            <Contato/>
        </main>
        <Footer/>
      </>
  )

}

export default App;

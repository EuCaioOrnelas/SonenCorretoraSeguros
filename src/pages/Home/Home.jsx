// COMPONENTES
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./home.css";
function Home() {
  return (
    <>
      <Navbar />
      {/* INICIO SECTION MAIN */}
      <div className="main">
        <div className="title_main">
          <h3>Olá, Somos...</h3>
          <h2>SONEN CORRETORA!</h2>
          <h4>
            Sua corretora de seguros para o que
            <br />
            realmente importa para você.
          </h4>
          <div className="cta_main">
            <div className="button">
              <button>
                <a>FAZER COTAÇÃO ONLINE</a>
              </button>
            </div>
            <p>Ou fale Conosco - (44) 9 9991-3331</p>
          </div>
        </div>
      </div>
      <div className="slogan">
        <div className="content_slogan">
          <p>Cuidando do Que É Mais Importante Para Você.</p>
          <img src="../../public/escudo.svg" />
        </div>
      </div>
      {/* FINAL SECTION MAIN */}
      {/* INICIO SECTION LOCALIZAÇÃO */}
      <div className="localizacao">
        <div className="text_localizacao">
          <h2>LOCALIZAÇÃO:</h2>
          <p>Venha fazer uma visita a nossa corretora!</p>
        </div>
        <div className="maps">
          <img src="../../public/maps.png"></img>
        </div>
        <div className="descricao_localizacao">
          <p>Avenida Curitiba, 300, Centro, Paiçandu - 87140-000</p>
        </div>
      </div>
      {/* FINAL SECTION LOCALIZAÇÃO */}
      <Footer />
    </>
  );
}

export default Home;

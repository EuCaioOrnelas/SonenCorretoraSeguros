// COMPONENTES //
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Rolagem from "../../components/Rolagem/rolagem";
import SectionCta from "../../components/SectionCta/SectionCta";

// CSS STYLES //
import "./style/main.css";
import "./style/localizacao.css";
import "./style/slogan.css";
import "./style/parceiros.css";
import "./style/about.css";
import "./style/servicos.css";
import ButtonCotacao from "../../components/ButtonCotacao/ButtonCotacao";
import SlideParceiros from "../../components/SlideParceiros/SlidesParceiros";

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
            <ButtonCotacao />
            <p>
              Ou fale Conosco -
              <a
                className="link_zap"
                href="https://api.whatsapp.com/send?phone=5544998183338&text=Ol%C3%A1!!!%20gostaria%20de%20tirar%20uma%20d%C3%BAvida..."
              >
                - (44) 9 9818-3338
              </a>
            </p>
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

      {/* INICIO SECTION PARCERIAS */}
      <div className="parceiros_section">
        <div className="text_parceiros">
          <p>
            SEGURADORAS <strong>PARCEIRAS:</strong>
          </p>
        </div>
        <div className="parceiros">
          <SlideParceiros />
        </div>
        <div className="descricao_parceiros">
          <p>
            <strong>22 anos</strong> de parceria com as{" "}
            <strong>13 maiores</strong> seguradoras do mercado!
          </p>
        </div>
        <Rolagem />
      </div>
      {/* FINAL SECTION PARCERIAS */}

      <SectionCta />

      {/* INICIO SECTION SOBRE */}
      <div className="about_section_one">
        <div className="about_title_one">
          <p>
            Vantagens da{" "}
            <strong>
              Sonen
              <br /> Corretora de Seguros!
            </strong>
          </p>
        </div>
        <div className="cards_about">
          <div className="card_section1">
            <div className="card">
              <img src="../../../public/segurodevidaicon.png" alt="" />
              <p>
                <strong>Seguro de vida</strong> para seu futuro garantido!
              </p>
            </div>

            <div className="card">
              <img src="../../../public/seguroautoicon.svg" alt="" />
              <p>
                Seguros <strong>AUTO</strong> de qualidade e com preços
                justos...
              </p>
            </div>

            <div className="card">
              <img src="../../../public/seguroresidencialicon.svg" alt="" />
              <div className="text_ajust">
                <p>
                  <strong>Segurança</strong> para o seu <strong>Lar!</strong>{" "}
                  Garanta sua Tranquilidade Conosco....
                </p>
              </div>
            </div>
          </div>

          <div className="card_section2">
            <div className="card">
              <img src="../../../public/estrelas.svg" alt="" />
              <p>
                <strong>21 anos</strong> atuando como corretora de seguros em
                Maringá e região!{" "}
              </p>
            </div>

            <div className="card">
              <img src="../../../public/suporte.svg" alt="" />
              <p>
                Suporte <strong>24h</strong> por dia, <strong>7 dias</strong>{" "}
                por Semana!
              </p>
            </div>

            <div className="card">
              <img src="../../../public/corretor1.svg" alt="" />
              <p>Corretor para te auxiliar no que você precisar!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about_section_two">
        <div className="about_section">
          <div className="about_section_two_text">
            <h2>SOBRE NÓS...</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sodales sagittis tempor. Maecenas nisl nulla, ultricies in
              hendrerit ut, efficitur id ipsum. Nam dapibus gravida arcu, et
              ultricies ante scelerisque eu. Pellentesque feugiat lacus sit amet
              lorem semper pellentesque nec ac ante. Quisque fringilla lectus
              quis sem dictum tincidunt. Integer.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Quisque sodales sagittis tempor.
              Maecenas nisl nulla, ultricies in hendrerit ut, efficitur id
              ipsum. Nam dapibus gravida arcu, et ultricies ante scelerisque eu.
              Pellentesque feugiat lacus sit amet lorem semper pellentesque nec
              ac ante. Quisque fringilla lectus quis sem dictum tincidunt.
              Integer.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque sodales sagittis tempor. Maecenas nisl nulla, ultricies in
              hendrerit ut, efficitur id ipsum. Nam dapibus gravida arcu, et
              ultricies ante scelerisque eu. Pellentesque feugiat lacus sit amet
              lorem semper pellentesque nec ac ante. Quisque fringilla lectus
              quis sem dictum tincidunt. Integer.
            </p>
          </div>
          <div className="about_section_two_img">
            <img src="../../../../public/celularsonen.png" alt="" srcset="" />
          </div>
        </div>
      </div>
      {/* FINAL SECTION SOBRE */}

      <SectionCta />

      {/* INICIO SECTION SERVIÇOS */}
      <div className="services">
        <div className="section_list_services">
          <div className="title_services">
            <p>
              <strong>SEGUROS DE QUALIDADE</strong>
              <br />
              VOCÊ ENCONTRA AQUI!
            </p>
          </div>
          <div className="list_services">
            <ul>
              <li>Seguros Para Automóveis</li>
              <li>Seguros de Vida</li>
              <li>Seguros Para Residência</li>
              <li>Seguros Empresariais</li>
              <li>Seguros para Frotas</li>
            </ul>
            <ul>
              <li>Seguros de Vida em Grupo</li>
              <li>Seguros para Caminhões</li>
              <li>Seguros Para Motos</li>
              <li>Seguros para Viagens</li>
              <li>Seguros para Bicicletas</li>
            </ul>
          </div>
          <div className="title_services_two">
            <h2>DIFERENCIAIS:</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sodales sagittis tempor. Maecenas nisl nulla, ultricies in
              hendrerit ut, efficitur id ipsum. Nam dapibus gravida arcu, et
              ultricies ante scelerisque eu. Pellentesque feugiat lacus sit amet
              lorem semper pellentesque nec ac ante. Quisque fringilla lectus
              quis sem dictum tincidunt. Integer.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sodales sagittis tempor. Maecenas nisl nulla, ultricies in
              hendrerit ut, efficitur id ipsum. Nam dapibus gravida arcu, et
              ultricies ante scelerisque eu. Pellentesque feugiat lacus sit amet
              lorem semper pellentesque nec ac ante. Quisque fringilla lectus
              quis sem dictum tincidunt. Integer.
            </p>
          </div>
          <div className="section_cta_services">
            <ButtonCotacao />
          </div>
        </div>
      </div>
      {/* INICIO SECTION SERVIÇOS */}

      {/*
      <div className="contato">
        <div className="section_contatos">
          <h2>Contatos</h2>
          <ul>
            <li>
              <strong>E-mail:</strong> sonencorretora@hotmail.com
            </li>
            <li>
              <strong>Comercial 1:</strong> sonencorretor@hotmail.com
            </li>
            <li>
              <strong>Comercial 2:</strong> sonencorretor@hotmail.com
            </li>
            <li>
              <strong>Corretor Marcos 1:</strong> sonencorretor@hotmail.com
            </li>
            <li>
              <strong>Corretor Marcos 2:</strong> sonencorretor@hotmail.com
            </li>
            <li>
              <strong>Localização:</strong> Av. Curitiba, 300, <br />
              Centro de Paiçandu - 87140-000
            </li>
          </ul>
        </div>
        <div className="section_contato">

        </div>
      </div>
*/}
      <div className="slogan">
        <div className="content_slogan">
          <p>Cuidando do Que É Mais Importante Para Você.</p>
          <img src="../../public/escudo.svg" />
        </div>
      </div>
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

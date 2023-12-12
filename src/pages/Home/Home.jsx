// COMPONENTES //
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SectionCta from "../../components/SectionCta/SectionCta";
import Main from "../../components/Main/Main";

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
      <div className="main" id="main">
        <div className="mainSlides">
          <Main />
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
            <strong>23 anos</strong> de parceria com as{" "}
            <strong>11 maiores</strong> seguradoras do mercado!
          </p>
        </div>
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
              <img
                src="https://i.im.ge/2023/09/04/wA5Kpz.seguro-de-vida-1.png"
                alt=""
              />
              <p>
                <strong>Seguro de vida</strong> para seu futuro garantido!
              </p>
            </div>

            <div className="card">
              <img
                src="https://i.im.ge/2023/09/04/wA9xJY.seguro-de-automovel.png"
                alt=""
              />
              <p>
                Seguros <strong>AUTO</strong> de qualidade e com preços
                justos...
              </p>
            </div>

            <div className="card">
              <img
                src="https://i.im.ge/2023/09/04/wAjFFF.fachada-de-casa-de-familia-1.png"
                alt=""
              />
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
              <img
                src="https://i.im.ge/2023/09/04/wAwDrC.5-estrelas.png"
                alt=""
              />
              <p>
                <strong>21 anos</strong> atuando como corretora de seguros em
                Maringá e região!{" "}
              </p>
            </div>

            <div className="card">
              <img src="https://i.im.ge/2023/09/04/wAw8u6.24-7-1.png" alt="" />
              <p>
                Suporte <strong>24h</strong> por dia, <strong>7 dias</strong>{" "}
                por Semana!
              </p>
            </div>

            <div className="card">
              <img
                src="https://i.im.ge/2023/09/04/wA6Xqm.agente-de-seguros.png"
                alt=""
              />
              <p>Corretor para te auxiliar no que você precisar!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about_section_two" id="about">
        <div className="about_section">
          <div className="about_section_two_text">
            <h2>SOBRE NÓS...</h2>
            <p>
              Na Sonen Corretora de Seguros, entendemos que a vida é cheia de
              surpresas, e é por isso que estamos aqui para ajudar a garantir
              que você esteja preparado para qualquer eventualidade. Nossa
              missão é proporcionar tranquilidade e segurança aos nossos
              clientes, oferecendo soluções de seguros confiáveis e acessíveis.
              Com anos de experiência e um compromisso inabalável com nossos
              clientes, a Sonen Corretora de Seguros é a sua parceira em
              proteção. Oferecemos uma ampla gama de opções de seguros, desde
              seguros de automóveis e residenciais até seguros de vida e saúde.
              Nossa equipe de corretores experientes está à disposição para
              ouvir suas necessidades individuais e ajudá-lo a encontrar as
              melhores soluções de seguro para você, sua família e seus
              negócios. Em caso de sinistro, nossa equipe eficiente e amigável
              simplificará o processo de reivindicação, fornecendo suporte e
              orientação para que você possa superar qualquer desafio com
              tranquilidade.
            </p>
          </div>
          <div className="about_section_two_img">
            <img
              src="https://i.im.ge/2023/09/04/wANFAh.Group-3.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
      {/* FINAL SECTION SOBRE */}

      <SectionCta />

      {/* INICIO SECTION SERVIÇOS */}
      <div className="services" id="services">
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
              <li>Automóveis</li>
              <li>Vida</li>
              <li>Residência</li>
              <li>Empresariais</li>
              <li>Frotas</li>
            </ul>
            <ul>
              <li>Vida em Grupo</li>
              <li>Caminhões</li>
              <li>Motos</li>
              <li>Viagens</li>
              <li>Bicicletas</li>
            </ul>
          </div>
          <div className="title_services_two">
            <h2>DIFERENCIAIS:</h2>
            <p>
              Na Sonen Corretora de Seguros, acreditamos que cada cliente é
              único e merece o mais alto padrão de atendimento e proteção quando
              se trata de seguros. Nosso compromisso é oferecer qualidade
              excepcional em seguros e suporte ao cliente, e isso nos diferencia
              de forma marcante.
              <br />
              <br />
              Nossa abordagem começa com a compreensão profunda das suas
              necessidades individuais. Não somos apenas uma corretora de
              seguros; somos seus consultores de confiança. Trabalhamos lado a
              lado com você para entender suas preocupações, metas e estilo de
              vida, e com base nisso, personalizamos soluções de seguros que se
              encaixam perfeitamente.
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
          <p>Cuidando do que é mais importante para você.</p>
          <img src="https://i.im.ge/2023/09/04/wAieQh.escudo-seguro-2-1.png" />
        </div>
      </div>
      {/* INICIO SECTION LOCALIZAÇÃO */}
      <div className="localizacao" id="localizacao">
        <div className="text_localizacao">
          <h2>LOCALIZAÇÃO:</h2>
          <p>Venha fazer uma visita a nossa corretora!</p>
        </div>
        <div className="maps">
          <img src="https://i.im.ge/2023/09/04/wANSwD.Design-sem-nome-2023-08-28T210120-685.png"></img>
        </div>
        <div className="descricao_localizacao">
          <p>Avenida Curitiba, 300, Centro, Paiçandu, 87140-000</p>
        </div>
      </div>
      {/* FINAL SECTION LOCALIZAÇÃO */}
      <Footer />
    </>
  );
}

export default Home;

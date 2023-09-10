// CSS STYLE
import "./footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="sobre">
            <div className="logo">
              <img
                src="https://i.im.ge/2023/09/04/wACDyX.zyro-image-2-removebg-preview-1.png"
                alt="logo"
              />
            </div>
            <div className="descricao">
              <h3>SOBRE:</h3>
              <p>
                Mais que uma Corretora de Seguros, somos os companheiros ideais
                que sua vida precisa, cuidamos do que realmente importa para
                você.
              </p>
            </div>
          </div>
          <div className="acessos">
            <div className="acesso_rapido">
              <h3>ACESSO RÁPIDO</h3>
              <ul>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=5544998183338">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="https://forms.gle/Pd9k2XH4j86Q6qy26">
                    Fazer Cotação Online
                  </a>
                </li>
                <li>
                  <a href="#about">Sobre Nós</a>
                </li>
                <li>
                  <a href="#services">Seguros</a>
                </li>
                <li>
                  <a href="#localizacao">Localização</a>
                </li>
              </ul>
            </div>
            <div className="contatos_rapidos">
              <h3>CONTATOS RÁPIDO</h3>
              <ul>
                <li>
                  <a href="mailto:Sonencorretora@hotmail.com">Enviar E-mail</a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=5544999738747">
                    WhatsApp Corretor
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=5544999738747">
                    Ligação Corretor
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=5544999738747&text=Ol%C3%A1,%20estou%20precisando%20de%20ajuda!">
                    Sinistro
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=5544999738747&text=Ol%C3%A1,%20preciso%20acionar%20um%20guincho!">
                    Solicitar Guincho
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rodape_footer">
          <span></span>
          <p>
            © SONEN CORRETORA DE SEGUROS 2001-2024 | TODOS OS DIREITOS
            RESERVADOS
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

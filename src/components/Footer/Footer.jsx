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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sodales sagittis tempor. Maecenas nisl nulla, ultricies in
                hendrerit ut, efficitur id ipsum. Nam dapibus gravida arcu, et
                ultricies ante scelerisque eu.
              </p>
            </div>
          </div>
          <div className="acesso_rapido">
            <h3>ACESSO RÁPIDO</h3>
            <ul>
              <li>
                <a href="#">Contato</a>
              </li>
              <li>
                <a href="#">Fazer Cotação Online</a>
              </li>
              <li>
                <a href="#">Sobre Nós</a>
              </li>
              <li>
                <a href="#">Seguros</a>
              </li>
              <li>
                <a href="#">Localização</a>
              </li>
            </ul>
          </div>
          <div className="contatos_rapidos">
            <h3>CONTATOS RÁPIDO</h3>
            <ul>
              <li>
                <a href="#">Enviar E-mail</a>
              </li>
              <li>
                <a href="#">WhatsApp Corretor</a>
              </li>
              <li>
                <a href="#">Ligação Corretor</a>
              </li>
              <li>
                <a href="#">Sinistro</a>
              </li>
              <li>
                <a href="#">Solicitar Guincho</a>
              </li>
            </ul>
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

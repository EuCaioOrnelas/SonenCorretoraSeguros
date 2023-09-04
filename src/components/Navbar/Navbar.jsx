import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="logo">
            <h2>SONEN CORRETORA</h2>
          </div>
          <div className="navigation">
            <div className="links">
              <ul>
                <div className="about">
                  <li>
                    <a href="#about">Sobre Nós</a>
                  </li>
                </div>
                <div className="contato">
                  <li>
                    <a href="https://api.whatsapp.com/send?phone=5544998183338&text=Ol%C3%A1!!!%20gostaria%20de%20tirar%20uma%20d%C3%BAvida...">
                      Contato
                    </a>
                  </li>
                </div>
                <div className="sinistro">
                  <li>
                    <a href="https://api.whatsapp.com/send?phone=5544998183338&text=Ol%C3%A1!!!%20gostaria%20de%20tirar%20uma%20d%C3%BAvida...">
                      Sinistro
                    </a>
                  </li>
                </div>
              </ul>
            </div>
            <div className="cta_navigation">
              <a href="https://forms.gle/Pd9k2XH4j86Q6qy26">FAZER COTAÇÃO</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

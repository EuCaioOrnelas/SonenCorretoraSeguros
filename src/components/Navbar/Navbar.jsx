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
                    <a href="#">Sobre Nós</a>
                  </li>
                </div>
                <div className="contato">
                  <li>
                    <a href="#">Contato</a>
                  </li>
                </div>
                <div className="sinistro">
                  <li>
                    <a href="#">Sinistro</a>
                  </li>
                </div>
              </ul>
            </div>
            <div className="cta_navigation">
              <a href="#">FAZER COTAÇÃO</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

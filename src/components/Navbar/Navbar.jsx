// ICONS IMPORT //
import { HiMiniBars3 } from "react-icons/hi2";
import { HiX } from "react-icons/hi";

// IMPORT CSS //
import "./navbar.css";

function Navbar() {
  window.addEventListener("scroll", function () {
    let header = document.querySelector(".navbar");
    if (header) {
      header.classList.toggle("sticky", window.scrollY > 100);
    }
  });

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="logo">
            <h2>
              <a href="#main">SONEN CORRETORA DE SEGUROS</a>
            </h2>
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
                    <a href="https://api.whatsapp.com/send?phone=5544998183338">
                      Contato
                    </a>
                  </li>
                </div>
                <div className="seguros">
                  <li>
                    <a href="#services">Seguros</a>
                  </li>
                </div>
              </ul>
            </div>
            <div className="cta_navigation">
              <a href="https://forms.gle/Pd9k2XH4j86Q6qy26">FAZER COTAÇÃO</a>
            </div>
          </div>
          <div className="menu_mobile">
            <div className="menu_mobile_btn">
              <HiMiniBars3 size={30} />
            </div>
            <div className="menu_mobile_btn_close">
              <HiX size={30} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

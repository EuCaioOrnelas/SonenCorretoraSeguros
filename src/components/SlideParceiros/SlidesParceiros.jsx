import "./slidesparceiros.css";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

register();

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const data = [
  { id: "1", image: "https://i.im.ge/2023/09/04/wyP2B1.allianz.png" },
  { id: "2", image: "https://i.im.ge/2023/09/04/wyPOUp.hdi.png" },
  { id: "3", image: "https://i.im.ge/2023/09/04/wyPdsf.porto.png" },
  { id: "4", image: "https://i.im.ge/2023/09/04/wyPFoq.liberty.png" },
  { id: "5", image: "https://i.im.ge/2023/09/04/wyPrWC.itau.png" },
  { id: "6", image: "https://i.im.ge/2023/09/04/wyP1YP.azul.png" },
  { id: "7", image: "https://i.im.ge/2023/09/04/wyPqym.sompo.png" },
  { id: "8", image: "https://i.im.ge/2023/09/04/wyPsHr.tokio.png" },
  { id: "9", image: "https://i.im.ge/2023/09/04/wyP7OW.zurich.png" },
  { id: "10", image: "https://i.im.ge/2023/09/05/w3bwRp.chubb.png" },
  { id: "11", image: "https://i.im.ge/2023/09/05/w3bPU1.suhai.png" },
];

function SlideParceiros() {
  const [slidesPerView, setSlidePerView] = useState(4);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1360) {
        setSlidePerView(2);
      } else {
        setSlidePerView(4);
      }
    }

    handleResize();
  }, []);

  return (
    <>
      <div className="slide">
        <div className="section_slide">
          <Swiper
            slidesPerView={slidesPerView}
            pagination={{ clickable: true }}
            autoplay
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={item.image}
                  alt="Slider Seguradoras"
                  className="slideseguros"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default SlideParceiros;

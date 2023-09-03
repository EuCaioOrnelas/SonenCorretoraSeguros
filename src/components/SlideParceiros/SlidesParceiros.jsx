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
  { id: "1", image: "../../../public/seguradoras/allianz.png" },
  { id: "2", image: "../../../public/seguradoras/azul.png" },
  { id: "3", image: "../../../public/seguradoras/hdi.png" },
  { id: "4", image: "../../../public/seguradoras/itau.png" },
  { id: "5", image: "../../../public/seguradoras/liberty.png" },
  { id: "6", image: "../../../public/seguradoras/porto.png" },
  { id: "7", image: "../../../public/seguradoras/sompo.png" },
  { id: "8", image: "../../../public/seguradoras/tokio.png" },
  { id: "9", image: "../../../public/seguradoras/zurich.png" },
];

function SlideParceiros() {
  const [slidesPerView, setSlidePerView] = useState(4);

  return (
    <>
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
    </>
  );
}

export default SlideParceiros;

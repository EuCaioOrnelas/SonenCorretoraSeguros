import "./mainslides.css";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

register();

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const data = [
  {
    id: "1",
    image: "https://i.im.ge/2023/12/14/EgiyFP.Design-sem-nome-17.png",
  },
  {
    id: "2",
    image: "https://i.im.ge/2023/12/14/EgiCRf.protejaSeuCarro-1.png",
  },
  {
    id: "3",
    image: "https://i.im.ge/2023/12/14/Egi3Ur.boraViajar-1.png",
  },
  {
    id: "4",
    image: "https://i.im.ge/2023/12/14/EgiDPK.Design-sem-nome-16.png",
  },
];

function Main() {
  const [mainPerView, setMainPerView] = useState(1);

  return (
    <>
      <div className="slideMain">
        <div className="sectionSlideMain">
          <Swiper
            className="styleSlideMain"
            slidesPerView={mainPerView}
            pagination={{ clickable: true }}
            autoplay
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.image} alt="Slides" className="slidesMain" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Main;

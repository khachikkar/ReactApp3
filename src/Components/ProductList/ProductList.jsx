import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { memo } from "react";

import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.css";

import "swiper/css"

let data = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbcrj53mGyk-u4JwrIb6z1RBAeCpxR78gfQ&s",
    price: 567,
    title: "Home at Dilidjan",
    text: "Some Description for my product. IOt is initial and non cgnnictive.",
  },
  {
    url: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_640.jpg",
    price: 120.0,
    title: "Oravarcov tun Ohanavan",
    text: "Some Description for my product. IOt is initial and non cgnnictive.",
  },
  {
    url: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396132.jpg&fm=jpg",
    price: 45,
    title: "Home at Shushi",
    text: "Some Description for my product. IOt is initial and non cgnnictive.",
  },
  {
    url: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396132.jpg&fm=jpg",
    price: 45,
    title: "Home at Shushi",
    text: "Some Description for my product. IOt is initial and non cgnnictive.",
  },
  {
    url: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396132.jpg&fm=jpg",
    price: 45,
    title: "Home at Shushi",
    text: "Some Description for my product. IOt is initial and non cgnnictive.",
  },
  {
    url: "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?cs=srgb&dl=pexels-sebastians-731082.jpg&fm=jpg",
    price: 567000000,
    title: "Home sweet home",
    text: "Some Description for my product. IOt is initial and non cgnnictive.",
  },
];

const swipersettings = {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      600: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
      },
      1250:{
        slidesPerView: 4
      }
    },
    loop: true,
    pagination: { clickable: true },
    navigation: true,
  };

  export default memo( function ProductList() {
    return (
      <section className="prod-list">
        <div className="a">
          <h1>Our Homes</h1>
        </div>
      
        <Swiper className="sw" {...swipersettings}>
        <Swiperbutton />
          {data.map((item, idx) => (
            <SwiperSlide key={idx} className="swiper-slide">
              <ProductItem data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  })


  const Swiperbutton =()=>{

    const swiper = useSwiper()

    return(
        <div className="btn">
            <button onClick={()=> swiper.slidePrev()} className="secbutton btn-prev">&#8592;</button>
            <button onClick={()=> swiper.slideNext()} className="secbutton btn-prev">&#8594;</button>

        </div>
    )
  }
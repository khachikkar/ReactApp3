import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { memo, useState} from "react";

import { Route, Routes, useNavigate } from 'react-router-dom';


import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.css";
import "swiper/css"
import ProductDetail from "../ProductItem/ProductDetail";

let data = [
  {
    id:1,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbcrj53mGyk-u4JwrIb6z1RBAeCpxR78gfQ&s",
    price: 567,
    title: "Home at Dilidjan",
    text: "Some Description for my product. IOt is initial and non cgnnictive.",
  },
  {
    id:2,
    url: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_640.jpg",
    price: 120.0,
    title: "Oravarcov tun Ohanavan",
    text: "Some Description for my product. IOt is initial and non cgnnictive.",
  },
  {
    id:3,
    url: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396132.jpg&fm=jpg",
    price: 45,
    title: "Home at Shushi",
    text: "Some Description for my product. IOt is initial and non cgnnictive.",
  },
  {
    id:4,
    url: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396132.jpg&fm=jpg",
    price: 45,
    title: "Home at Shushi",
    text: "Some Description for my product. IOt is initial and non cgnnictive.",
  },
  {
    id:5,
    url: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396132.jpg&fm=jpg",
    price: 45,
    title: "Home at Shushi",
    text: "Some Description for my product. IOt is initial and non cgnnictive.",
  },
  {
    id:6,
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

    const [products] = useState(data);
    const navigate = useNavigate()

    const handleProductClick = (id) => {
      navigate(`/product/${id}`);
    };

    return (
      <section className="prod-list">
        <div className="a">
          <h1>Our Homes</h1>
        </div>
    <Routes>

    <Route
    path="/"
    element={
        <Swiper className="sw" {...swipersettings}>
        <Swiperbutton />
          {products.map((item,) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <ProductItem key={item.id} data={item} onClick={() => handleProductClick(item.id)} />
            </SwiperSlide>
          ))}
        </Swiper>
    } />

<Route path="/product/:id" element={<ProductDetail products={products} />} />

    </Routes>
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
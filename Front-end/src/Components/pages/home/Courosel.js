import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Courosel.css"

function Arrow(props) {
  const { className, style, onClick } = props;
  return(
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", marginRight: "127px"}}
      onClick={onClick}
    />
  );
}


function Courosel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <Arrow />,
      prevArrow: <Arrow />,
    slidesToShow: 1,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  return (

<div className="container2">
  <Slider {...settings}>
    <div className="cards">
      <img src="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="" className="w-full" />
      <div className="card-body">
        <h3 className="text-lg font-semibold">BIG SALE</h3>
        <p>Our offers are unbelievable</p>
      </div>
    </div>


    <div className="cards">
      <img src="https://www.shutterstock.com/shutterstock/photos/1875797689/display_1500/stock-photo-different-modern-devices-on-color-background-1875797689.jpg" alt="" className="w-full" />
      <div className="card-body">
        <h3 className="text-lg font-semibold">TELEVISION</h3>
        <p>We used slick</p>
      </div>
    </div>
    <div className="cards">
      <img src="https://plus.unsplash.com/premium_photo-1681497587542-b502f7b67590?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" className="w-full" />
      <div className="card-body">
        <h3 className="text-lg font-semibold">Cheap to buy</h3>
        <p>Our prices are pocket friendly</p>
      </div>
    </div>

    <div className="cards">
      <img src="https://www.shutterstock.com/shutterstock/photos/1875797689/display_1500/stock-photo-different-modern-devices-on-color-background-1875797689.jpg" alt="" className="w-full" />
      <div className="card-body">
        <h3 className="text-lg font-semibold">TELEVISION</h3>
        <p>We used slick</p>
      </div>
    </div>   

  </Slider>
</div>

  )
}

export default Courosel
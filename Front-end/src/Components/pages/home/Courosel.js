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
    slidesToShow: 3,
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

<div className="container">
  <h2 className="text-2xl font-semibold mb-4">TechX Electronics</h2>
  <Slider {...settings}>
    <div className="cards">
      <img src="https://img.freepik.com/premium-photo/gamer-workspace_127657-18683.jpg" alt="" className="w-full" />
      <div className="card-body">
        <h3 className="text-lg font-semibold">LAPTOPS</h3>
        <p>We used slick</p>
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
      <img src="https://www.shutterstock.com/shutterstock/photos/1875797689/display_1500/stock-photo-different-modern-devices-on-color-background-1875797689.jpg" alt="" className="w-full" />
      <div className="card-body">
        <h3 className="text-lg font-semibold">TELEVISION</h3>
        <p>We used slick</p>
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
      <img src="https://www.shutterstock.com/shutterstock/photos/1875797689/display_1500/stock-photo-different-modern-devices-on-color-background-1875797689.jpg" alt="" className="w-full" />
      <div className="card-body">
        <h3 className="text-lg font-semibold">TELEVISION</h3>
        <p>We used slick</p>
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
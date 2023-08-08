import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import './SlideCard.css'

function Arrow(props) {
  const { className, style, onClick } = props;
  return(
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}


function SlideCard() {
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
    <div className='container'>
      <h2>TechX Electronics</h2>
      <Slider {...settings}>

        <div className='cards'>
          <img src='https://img.freepik.com/premium-photo/gamer-workspace_127657-18683.jpg' alt='' className='w-100'/>
          <div className='card-body'>
            <h3>LAPTOPS</h3>
            <p>We used slick</p>
          </div>
        </div> 

        <div className='cards'>
          <img src='https://media.istockphoto.com/id/178716575/photo/mobile-devices.jpg?s=612x612&w=0&k=20&c=9YyINgAbcmjfY_HZe-i8FrLUS43-qZh6Sx6raIc_9vQ=' alt='' className='w-100'/>
          <div className='card-body'>
          <h3>PHONES</h3>
          <p>We used slick</p>
          </div>
        </div>

        <div className='cards'>
          <img src='https://t3.ftcdn.net/jpg/02/35/84/44/360_F_235844454_RTTLpnm2asRdwNJ97MU0ENJqnCSUdXQv.jpg' alt='' className='w-100'/>
          <div className='card-body'>
          <h3>MOUSES</h3>
          <p>We used slick</p>
          </div>
        </div>

        <div className='cards'>
          <img src='https://www.shutterstock.com/shutterstock/photos/1875797689/display_1500/stock-photo-different-modern-devices-on-color-background-1875797689.jpg' alt='' className='w-100'/>
          <div className='card-body'>
          <h3>KEYBOARDS</h3>
          <p>We used slick</p>
          </div>
        </div>

        <div className='cards'>
          <img src='https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?cs=srgb&dl=pexels-pixabay-163100.jpg&fm=jpg' alt='' className='w-100'/>
          <div className='card-body'>
          <h3>TABLETS</h3>
          <p>We used slick</p>
          </div>
        </div>

        <div className='cards'>
          <img src='https://www.shutterstock.com/shutterstock/photos/1568488030/display_1500/stock-photo-electronic-circuit-board-close-up-1568488030.jpg' alt='' className='w-100'/>
          <div className='card-body'>
          <h3>RING LIGHTS</h3>
          <p>We used slick</p>
          </div>
        </div>

        <div className='cards'>
          <img src='https://www.shutterstock.com/shutterstock/photos/1875797689/display_1500/stock-photo-different-modern-devices-on-color-background-1875797689.jpg' alt='' className='w-100'/>
          <div className='card-body'>
          <h3>TELEVISION</h3>
          <p>We used slick</p>
          </div>
        </div>

      </Slider>
    </div>
  )
}

export default SlideCard
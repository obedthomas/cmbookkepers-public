import React from 'react'
import './Clients.css'
import Client from '../components/Client'
import '../lib/slick/slick.css'
import '../lib/slick/slick-theme.css'
import Slider from 'react-slick'

// DATA
import data from '../data/clients'

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
    ],
  }

  return (
    <section className="section4">
      <div className="container-fluid px-5 text-center  h-100">
        <h1> Our Clients</h1>
        <p>Thanks to our wonderful clients.</p>
        <div className="team row">
          <div className="col-sm-12 text-center">
            <Slider {...settings}>
              {data.map(client => (
                <Client
                  key={client.name}
                  clientName={client.name}
                  clientImg={client.img}
                  link={client.url}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients

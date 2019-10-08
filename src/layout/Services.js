import React from 'react'
import './Services.css'
import Card from '../components/Card'
import services from '../data/services'

const Services = () => {
  return (
    <section className="section2 container-fluid p-0">
      <div className="purchase text-center">
        <h1>Our Services</h1>
        <p>
          All our services and prices are tailored to suit your individual,
          unique requirements.
        </p>
        <div className="cards">
          <div className="d-flex flex-row flex-wrap justify-content-center">
            {services.map(({ title, short, img, id, long }) => (
              <Card
                key={id}
                title={title}
                short={short}
                img={img}
                id={id}
                long={long}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

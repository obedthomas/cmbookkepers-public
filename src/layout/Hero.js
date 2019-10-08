import React from 'react'
import { AnimatedOnScroll } from 'react-animated-css-onscroll'
import { Link } from 'react-scroll'
import './Hero.css'
import heroBg from '../images/heroBg.jpeg'

const Hero = () => {
  return (
    <React.Fragment>
      <div
        className="heroBg"
        style={{
          background: `linear-gradient(-135deg, rgba(0, 10, 54, .5), rgba(10, 10, 10, 1)), url(${heroBg}) no-repeat center center fixed`,
          backgroundSize: 'cover',
        }}
      />
      <div className="container-fluid text-left hero d-flex flex-column justify-content-center align-items-center">
        <div className="row">
          <div className="col-sm-12 hero-text">
            <AnimatedOnScroll animationIn="fadeIn">
              <h6>C & M IRISH BOOKKEEPERS & ADMINISTRATORS</h6>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn="fadeIn" animationInDelay={500}>
              <h1 className="text-light">YOUR COMPANION IN SUCCESS</h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn="fadeIn" animationInDelay={1000}>
              <p>
                Managing your own bookkeeping whilst keeping track of your
                business is often strenuous and protracted for the majority of
                self-employers and small companies.
              </p>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn="fadeIn" animationInDelay={1200}>
              <Link to="section2" smooth={true} duration={500}>
                <button className="btn btn-dark px-5 py-2 mt-4">
                  Our Services
                </button>
              </Link>
            </AnimatedOnScroll>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Hero

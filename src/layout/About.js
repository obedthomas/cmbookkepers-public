import React from 'react'
import './About.css'
import { AnimatedOnScroll } from 'react-animated-css-onscroll'

//IMAGES
import mindMap from '../images/mind_map.svg'

const About = () => {
  return (
    <section className="section1" id="section1">
      <div className="container text-center">
        <div className="row flex align-content-center">
          <div className="col-md-6 d-none d-sm-block">
            <div className="pray">
              <AnimatedOnScroll animationIn="fadeIn">
                <img src={mindMap} alt="analytics" />
              </AnimatedOnScroll>
            </div>
          </div>
          <div className="col-md-6">
            <AnimatedOnScroll animationIn="fadeIn" animationInDelay={500}>
              <div className="panel text-left rounded-lg">
                <AnimatedOnScroll animationIn="fadeIn" animationInDelay={800}>
                  <h1>About us</h1>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeIn" animationInDelay={1000}>
                  <p>
                    Outsourcing your bookkeeping and office administration is
                    much efficient and significantly cost effective, then having
                    a full-time employee. It also benefits to make your business
                    more flexible and agile, able to adapt to changing market
                    conditions and challenges, while providing cost savings and
                    service level improvements. This in turn facilitates you to
                    invest your valuable time in the development of your own
                    core business activities and to brainstorm, whilst keeping
                    your feet up.
                  </p>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeIn" animationInDelay={1100}>
                  <p className="d-none d-lg-block">
                    At C & M bookkeepers and Administrators, we provide a range
                    of professional services, to help you to overcome the
                    complexity of starting up / launching your dream business to
                    marketing and helping it grow into a successful business.
                    From company formations to tax registrations, registering
                    business names to filing tax returns, Branding and Print
                    Designs to Websites, promoting your business to Social Media
                    Marketing, we have it all covered for you. This removes the
                    complexity and unnecessary cost involved for most of the
                    start-ups and small business firms. We pride ourselves in
                    working closely with each of our clients, bringing our
                    creativity and expertise into every phase of your growth.
                    Precisely that is our catchphrase ‘your companion in
                    success’.
                  </p>
                </AnimatedOnScroll>
              </div>
            </AnimatedOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

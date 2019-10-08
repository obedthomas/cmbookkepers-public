import React from 'react'
import './Footer.css'

import contact from '../images/contact.svg'

const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <footer>
      <div className="container pt-5 footer">
        <div className="row text-left">
          <div className="col-md-6 col-sm-12 d-none d-md-block">
            <img src={contact} alt="contact" className="img-fluid" />
          </div>
          <div className="col-md-6 col-sm-12 panel">
            <h1>Contact Us</h1>
            <h4>
              Email:{' '}
              <span style={{ color: 'white' }}>contact@cmbookkeepers.ie</span>
            </h4>
            <p className="pt-2">
              All our services and prices are tailored to suit your individual,
              unique requirements. Please contact us by phone or email to
              discuss further or for a quote.
            </p>
            <p>
              <span className="font-weight-bold" style={{ color: '#ffdc73' }}>
                To speak to us in Romanian or Hungarian
              </span>
              <br />
              please contact Marius on{' '}
              <span className="font-weight-bold" style={{ color: '#ffdc73' }}>
                087 221 1301
              </span>
              <br />
              Alternatively, you can contact Cyril on{' '}
              <span className="font-weight-bold" style={{ color: '#ffdc73' }}>
                087 316 7336
              </span>
              .
            </p>
            <div className="pt-4">
              <h4>Follow Us</h4>
              <p className="text-muted">
                Stay up to date with all the latest news.
              </p>
              <div className="column text-light">
                <a href="https://www.facebook.com/CMBookkeepers/">
                  <i className="fab fa-facebook-f" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row meta mt-5">
          <p className="pt-4 text-center">
            ©{date} | CRO: 590087 | Registered address: 26 Charvey Court,
            Rathnew, Co Wicklow, A67 KX20 | Website made by{' '}
            <span>
              {' '}
              <a href="https://www.toproom.design">Top Room Designs.ltd</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

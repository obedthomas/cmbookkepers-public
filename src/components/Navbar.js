import React from 'react'
import { Link } from 'react-scroll'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap'

import logo from '../images/Logo.png'
import './Navbar.css'

class NavBar extends React.Component {
  state = {
    isOpen: false,
    scrolled: false,
    scrolledStyle: {
      backgroundColor: '#fff',
    },
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = e => {
    let pos = e.path[1].scrollY
    pos >= 180
      ? this.setState({ scrolled: true })
      : this.setState({ scrolled: false })
  }

  handleScrollStyle = () => {
    if (this.state.scrolled === true) {
      return 'scrolled fixed-top'
    }
    return 'fixed-top'
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <div className="container-fluid p-0 text-center">
        <Navbar expand="md" light className={this.handleScrollStyle()}>
          <NavbarBrand href="/">
            <img src={logo} alt="logo" width="40" height="40" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="rounded-circle" />
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className="rounded-lg p-3"
          >
            <div className="mr-auto" />
            <Nav navbar>
              <NavItem>
                <Link
                  to="hero"
                  className="nav-item linky"
                  activeClass="active"
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </NavItem>
              <NavItem>
                {' '}
                <Link
                  to="section1"
                  className="nav-item linky"
                  activeClass="active"
                  smooth={true}
                  duration={500}
                  offset={70}
                >
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="section2"
                  className="nav-item linky"
                  activeClass="active"
                  smooth={true}
                  duration={500}
                >
                  Services
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="section4"
                  className="nav-item linky"
                  activeClass="active"
                  smooth={true}
                  duration={500}
                >
                  Clients
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="footer"
                  className="nav-item linky"
                  activeClass="active"
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavBar

// <div className="container-fluid p-0 ">
//       <nav className="navbar navbar-expand-lg fixed-top">
//         <a className="navbar-brand" href="# ">
//           <img src={logo} alt="logo" width="40" height="40" />
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="mr-auto" />
//           <div className="navbar-nav">
//             <Link
//               to="hero"
//               className="nav-item linky"
//               activeClass="active"
//               smooth={true}
//               duration={500}
//             >
//               Home
//             </Link>
// <Link
//   to="section1"
//   className="nav-item linky"
//   activeClass="active"
//   smooth={true}
//   duration={500}
//   offset={70}
// >
//   About
// </Link>
// <Link
//   to="section2"
//   className="nav-item linky"
//   activeClass="active"
//   smooth={true}
//   duration={500}
//   offset={50}
// >
//   Services
// </Link>
// <Link
//   to="section4"
//   className="nav-item linky"
//   activeClass="active"
//   smooth={true}
//   duration={500}
//   offset={50}
// >
//   Clients
// </Link>
// <Link
//   to="footer"
//   className="nav-item linky"
//   activeClass="active"
//   smooth={true}
//   duration={500}
// >
//   Contact
// </Link>
//           </div>
//         </div>
//       </nav>
//     </div>

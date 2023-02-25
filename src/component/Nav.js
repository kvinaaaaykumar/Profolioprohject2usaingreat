import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

class Nav extends Component {
  state = {clicked: false};
  handleClick =()=>{
    this.setState({clicked: !this.state.clicked})
  }
  render(){
    return (
    <>
      <header>
        <nav className="nav">
          <Link to="/" className="logo">
            Huda..
          </Link>
          <div className="nav-menu">
            <ul className={this.state.clicked ? "nav-list active" : "nav-list"}>
              <li className="nav-item">
                <Link to="#about" className="nav-link">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link to="#project" className="nav-link">
                  Projects
                </Link>
              </li>

              <li className="nav-item">
                <Link to="#contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="hamberger" onClick={this.handleClick}>
              <i
                id="bar"
                className={
                  this.state.clicked
                    ? "uil uil-angle-double-right"
                    : "uil uil-align-right times"
                }
              ></i>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
  }
  
};

export default Nav;

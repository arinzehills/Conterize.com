import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { TiTimesOutline } from "react-icons/ti";
// import {useNavigate} from 'react-router-dom';
import { Button } from "../Button/Button";
// import {logo} from '../../../assets/logo_transparent.png
import "./Navbar.css";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [button, setButton] = useState(true);
  const closeMobileMenu = () => setClick(!click);
  // const [onHover, setOnHover] = useState(false);
  // const hoverEvent= () =>{
  //     onmouseenter{()=>setOnHover(!onHover)};
  // }
  // const router=useNavigate()
  //     router.
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="images/conterize.png" style={{ height: 190 }} alt="h" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <TiTimesOutline fontSize={48} />
            ) : (
              <HiMenuAlt4 fontSize={48} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/pricing"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/contenttypes"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Content Types
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/contentcreators"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Content Creators
              </Link>
            </li>
            {/* <li className="nav-items">
              <Link
                to="/whyconterize
                "
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Why Conterize
              </Link>
            </li> */}
            {!button && (
              <div>
                <li className="nav-btn" onClick={closeMobileMenu}>
                  <Link to="/dashboard">
                    <Button buttonStyle="btn--outline" buttonSize="btn--large">
                      Sign In
                    </Button>
                  </Link>
                </li>

                <li className="nav-btn" onClick={closeMobileMenu}>
                  <Link to="/pricing">
                    <Button buttonColor="gradient" buttonSize="btn--large">
                      Register
                    </Button>
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
        {button && (
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-btn" onClick={closeMobileMenu}>
              {button && (
                <Link to="/login">
                  <Button buttonColor="gradient" buttonStyle="btn--rounded">
                    Login
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

{
  /* <div className='navbar'>
<div className='navbar-container container'>
  <Link to='/' className='navbar-logo'>
  <img style={{ width: "175px" }} src={"/images/logo_transparent.png"} alt='dsa' />
  <h1>dsahfiso</h1>
  </Link>
  <div className="menu-img">

  </div>
</div>
</div> */
}
export default Navbar;

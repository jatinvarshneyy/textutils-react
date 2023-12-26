import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Props ek tareeka hai React mein jisse hum parent component se child component mein information bhejte hain. Ye humein components ko reusable banane ka mauka deta hai kyunki hum dynamic data ya behavior unhe provide kar sakte hain. Props ko aise samjho jaise kisi function ko parameters diye jaate hain—ye values hote hain jo component ko dikhne ya behave karne mein madad karte hain.
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} style={{backgroundColor: props.mode==='dark'?'#092635':'white', color: props.mode==='dark'?'white':'#092635'}}`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          {props.firstTitle}<span className="fw-bold text-danger">{props.secondTitle}</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active mx-2" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active mx-2" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" aria-current="page" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
          <div className={`darkmodeSwitch form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Aur PropTypes, ye React mein ek feature hai jo props ke data types ko validate karne ke liye use hota hai. Isse hume yeh verify karne mein madad milti hai ki jo data hum component mein receive kar rahe hain, wo humare expectations ke types ke saath match karta hai ya nahi. Jaise agar hum ek prop ko string type ki expect kar rahe hain, to PropTypes check karega ki woh sach mein string hai ya nahi, aur agar nahi hai toh error show karega.

// PropTypes use karke hum components ke liye ek contract define karte hain jo specify karta hai ki humein kis type ke props expect karne hain. Agar incoming data in types se match nahi karta, to React development mein ek warning show karega jo humein issues ko identify aur fix karne mein madad karta hai. Iska istemal bada projects mein ya teams ke saath kaam karte waqt hota hai jahaan data types component ki functionality ke liye important hote hain.
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Deafult Title",
};

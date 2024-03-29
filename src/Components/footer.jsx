import React from 'react';

function Footer() {
  return (
    <div className='footer'>
      <footer>
        <div className='footpanels' id="footer">
        <div className="footpanel1">
          <a href="#" style={{textDecoration: "None" ,color: "white"}}>BACK TO TOP</a>
        </div>
        <div className="footpanel2">
          <ul>
            <br />
            <br />
            <br />
            <p><b>Get to Know Us</b></p>
            <a>About Us</a>
            <a>We're Hiring</a>
            <a>Press Releases</a>
            <a>Hire interns for your company</a>
          </ul>
          <ul>
            <br />
            <br />
            <br />
            <p><b>Connect with Us</b></p>
            <a href="https://www.facebook.com/AmazonIN/">Facebook</a>
            <a href="https://twitter.com/amazonIN">Twitter</a>
            <a href="https://www.instagram.com/amazondotin/?hl=en">Instagram</a>
          </ul>
          <ul>
            <br />
            <br />
            <br />
            <p><b>Terms & Conditions</b></p>
            <a>Privacy</a>
            <a>Contact Us</a>
            <a>Blog</a>
            <a>Our Services</a>
          </ul>
          <ul>
            <br />
            <br />
            <br />
            <p><b>Stores by Places</b></p>
            <a>Stores in Delhi</a>
            <a>Stores in Chennai</a>
            <a>Stores in Bombay</a>
            <a>Stores in Bangalore</a>
          </ul>
        </div>
        <div className="footpanel4">
          <div className="options">
            <a>Conditions of Use & Sale  |</a>
            <a>  Privacy notice |</a>
            <a>Internet based ads</a>
          </div>
          <div className="copyrights">
            <p>© 1996-2023, Quillquest.com, Inc. or its affiliates</p>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
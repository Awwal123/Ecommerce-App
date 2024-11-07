import React from "react";
import "./styles.css";

export const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-link">
          <div className="first-links">
            {/* first links */}
            <h4 className="footer-headings">Exclusive</h4>
            <p className="subscribe">Subscribe</p>
            <p className="footer-texts">Get 10% off your first order</p>
            <div className="footer-input-container">
              <input
                className="footer-input"
                type="text"
                placeholder="Enter your email"
              />
              <img className="send-icon" src="/images/Send-icon.png" alt="" />
            </div>
          </div>
          <div className="first-links">
            {/* second links */}
            <h4 className="footer-headings">Support</h4>
            <p className="support-add">
              111 Bijoy sarani, Dhaka,DH151,Bangladesh.
            </p>
            <p className="footer-texts">exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          {/* Third */}
          <div className="first-links">
            {/* second links */}
            <h4 className="footer-headings">Acccount</h4>
            <p className="support-add">My Account</p>
            <p className="footer-texts">Login/Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>

          {/* fourth */}
          <div className="first-links">
            {/* second links */}
            <h4 className="footer-headings">Quick Link</h4>
            <p className="support-add">Privacy Policy</p>
            <p className="footer-texts">Terms of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>

          {/* Last */}
          <div className="first-links">
            {/* second links */}
            <h4 className="footer-headings">Download App</h4>
            <p className="save">Save $3 with App New User Only</p>
            <div className="images">
              <img src="/images/Qr-Code.png" alt="" />
              <div className="downloads">
                <img className="download" src="/images/GooglePlay.png" alt="" />
                <img className="download" src="images/AppStore.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

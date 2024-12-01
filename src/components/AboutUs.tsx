import { Header } from "./Header";
import { ExclusiveNavbar } from "./ExclusiveNavbar";
import { Footer } from "./Footer";
import { Fade } from "react-awesome-reveal";
import { WhyChooseUs } from "./WhyChooseUs";

export const AboutUs = () => {
  return (
    <>
      <Fade direction="up" duration={3000} triggerOnce>
        <Header />
        <ExclusiveNavbar />
        <div className="not-found-wrapper">
          <div className="four-error-container">
            <p className="home-error">Home</p>
            <p className="home-slash">/</p>
            <p>About</p>
          </div>

          <div className="about-us-wrapper">
            <div className="about-us-hero-section-container">
              <div className="about-hero-section">
                <h1 className="about-heading">Our Story</h1>
                <p className="about-sub-head">
                  Launced in 2015, Exclusive is South Asia’s premier online
                  shopping makterplace with an active presense in Bangladesh.
                  Supported by wide range of tailored marketing, data and
                  service solutions, Exclusive has 10,500 sallers and 300 brands
                  and serves 3 millioons customers across the region.{" "}
                </p>
                <p className="about-sub-text">
                  Exclusive has more than 1 Million products to offer, growing
                  at a very fast. Exclusive offers a diverse assotment in
                  categories ranging from consumer.
                </p>
              </div>
              <img className="about-bg" src="./images/AboutUsBg.png" alt="" />
            </div>
            <div className="section-two-wrapper">
            {/* section Two */}
            <div className="about-section-two">
              <div className="square">
                <div className="about-circle">
                  <div className="circle2">
                    <img src="./images/Home.png" alt="home" />
                  </div>
                </div>
                <p className="dilevery-text">10.5k </p>
                <p className="dilevery-sub-text">Sallers active our site</p>
              </div>

              <div className="square">
                <div className="about-circle">
                  <div className="circle2">
                    <img src="./images/Order.png" alt="" />
                  </div>
                </div>
                <p className="dilevery-text">33k </p>
                <p className="dilevery-sub-text">Monthly Product Sale</p>
              </div>

              <div className="square">
                <div className="about-circle">
                  <div className="circle2">
                    <img src="./images/Shopping.png" alt="shopping" />
                  </div>
                </div>
                <p className="dilevery-text">45.5k</p>
                <p className="dilevery-sub-text">Customer active in our site</p>
              </div>

              <div className="square">
                <div className="about-circle">
                  <div className="circle2">
                    <img src="./images/Moneybag.png" alt="bag" />
                  </div>
                </div>
                <p className="dilevery-text">25k</p>
                <p className="dilevery-sub-text">
                  Anual gross sale in our site
                </p>
              </div>
            </div>

            {/* Section Three */}
              <div className="section-three-wrapper">
            <div className="about-section-three">
              <div className="image-gallary-container">
                <div className="image-wrapper">
                  <img src="./images/Tom.png" alt="tom" />
                </div>
                <div className="image-text">
                  <p className="name">Tom Cruise</p>
                  <p className="role">Founder & Chairman</p>

                  <div className="social-img">
                    <img src="./images/Twitter.png" alt="x" />
                    <img src="./images/Instagram.png" alt="instagram" />
                    <img src="./images/Linkedin.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="image-gallary-container">
                <div className="image-wrapper">
                  <img src="./images/Emma.png" alt="emma" />
                </div>
                <div className="image-text">
                  <p className="name">Emma Watson</p>
                  <p className="role">Managing Director</p>

                  <div className="social-img">
                    <img src="./images/Twitter.png" alt="x" />
                    <img src="./images/Instagram.png" alt="instagram" />
                    <img src="./images/Linkedin.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="image-gallary-container">
                <div className="image-wrapper">
                  <img src="./images/Will.png" alt="will" />
                </div>
                <div className="image-text">
                  <p className="name">Will Smith</p>
                  <p className="role">Product Designer</p>

                  <div className="social-img">
                    <img src="./images/Twitter.png" alt="x" />
                    <img src="./images/Instagram.png" alt="instagram" />
                    <img src="./images/Linkedin.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            </div>
            <WhyChooseUs />
            </div>
          </div>
        </div>
        <Footer />
      </Fade>
    </>
  );
};

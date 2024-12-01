import { Footer } from "./Footer";
import { WhyChooseUs } from "./WhyChooseUs";

export const NewArrival = () => {
  return (
    <>
     
      <div className="exclusive-wrapper">
        <div className="flash-sales-container">
          <div className="bla"></div>
        <div className="new-arrival-mobile">
          <div className="best-selling-product-alignment">
            <div className="new-tag-container ">
              <div className="name-tag"></div>
              <p className="today">Featured</p>
            </div>

            <div className="hidden">
              <div className="best-selling-product">
                <p className="flash-text">New Arrival</p>
              </div>
            </div>

            <div className="new-arrival-container">
              <div className="arrival-hero-img-container">
                <img
                  className="arrival-hero-img"
                  src="./images/PlayStation5.png"
                  alt="Play Station"
                />
              </div>
              <div className="arrival-img-container2">
                <div className="arrival-imgage2-wrapper">
                  <div className="woman-text">
                    <h2>Women’s Collections</h2>
                    <p>
                      Featured woman collections that give you another vibe.
                    </p>
                    <p className="woman-btn">Shop Now</p>
                  </div>
                  <img
                    className="arrival-woman"
                    src="./images/Woman.png"
                    alt=""
                  />
                </div>
                <div className="arrival3-image-container">
                  <img
                    className="arrival-bg"
                    src="./images/Speaker.png"
                    alt=""
                  />
                  <img
                    className="arrival-bg"
                    src="./images/Perfume.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <WhyChooseUs />
          </div>
          <Footer />
        </div>
      </div>
      </div>
    </>
  );
};

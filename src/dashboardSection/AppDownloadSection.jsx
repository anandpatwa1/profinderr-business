import React from 'react';
import mobile from '../assets/image/mobile.png';

const AppDownloadSection = () => (
  <section className="category-section products-nearby-section">
    <div className="container">
      <div className="common-services-card">
        <div className="row align-items-center gy-4">
          <div className="col-lg-5 text-center">
            <img src={mobile} alt="App Preview" />
          </div>
          <div className="col-lg-6">
            <h2 className="common-card-headeing">
              Download Our app and Find your <br /> Product Nearby
            </h2>
            <p className="common-subheading mb-4">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="#"><img src="./assets/img/g-play-img.png" alt="Play Store" /></a>
              <a href="#"><img src="./assets/img/dwnload-appstore-img.png" alt="App Store" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AppDownloadSection;

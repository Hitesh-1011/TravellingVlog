import logo from "./logo.svg";
import "./App.css";
import img from "../src/Images/logo1.png";
import abtimg1 from "../src/Images/bgimage2.jpg";
import abtimg2 from "../src/Images/bgimage3.jpg";
import abtimg3 from "../src/Images/bgimage4.jpg";
import bgVideo from "../src/Images/video.mp4";
import boatrowing from "../src/Images/boatrowing.jpg";
import icon from "./icon-font.css";
import { useEffect, useState } from "react";

function App() {
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [error, setError] = useState();
  // const [items, setItems] = useState();
  // useEffect(() => {
  //   fetch(
  //     "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page="
  //   )
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setItems(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);
  // console.log("items", items.results);
  return (
    <>
      {/* header section */}
      <header className="header">
        <div className="header__logo-box">
          <img src={img} alt="tigerlogo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Outdoors</span>
            <span className="heading-primary-sub">
              is where life happens...
            </span>
          </h1>
          <a href="#" className="btn btn--white btn--animated">
            Discover our tours
          </a>
        </div>
      </header>
      {/* section starts */}
      <main>
        {/* First section */}
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              Exciting tours for adventure people
            </h2>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">
                You're going to fall love with nature
              </h3>
              <p className="paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Live adventures like you never have before
              </h3>
              <p className="paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
              <a href="#" className="btn-text">
                Learn more &rarr;
              </a>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  src={abtimg1}
                  alt="snowhill"
                  className="composition__photo composition__photo--p1"
                />
                <img
                  src={abtimg2}
                  alt="greentree"
                  className="composition__photo composition__photo--p2"
                />
                <img
                  src={abtimg3}
                  alt="mountainviews"
                  className="composition__photo composition__photo--p3"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Second section */}
        <section className="section-features">
          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-world"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Explore the world
                </h3>
                <p className="feature-box__text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-compass"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Meet Nature
                </h3>
                <p className="feature-box__text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-map"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Find your way
                </h3>
                <p className="feature-box__text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-heart"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Live a healthier life
                </h3>
                <p className="feature-box__text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Third section */}
        <section className="section-tours">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Most Popular tours</h2>
          </div>
          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--1">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">
                      The sea Explorer
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>3 day tours</li>
                      <li>Upto 30 people</li>
                      <li>2 tour guides</li>
                      <li>Sleep in cozy hotels</li>
                      <li>Difficulty: very easy</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$297</p>
                    </div>
                    <a href="#" className="btn btn--white btn--animated">
                      Book Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--2">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2">
                      The Forest Hiker
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>7 day tours</li>
                      <li>Upto 40 people</li>
                      <li>6 tour guides</li>
                      <li>Sleep in provided tents</li>
                      <li>Difficulty: medium</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$497</p>
                    </div>
                    <a href="#" className="btn btn--white btn--animated">
                      Book Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--3">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--3">
                      The Snow Adventurer
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>5 day tours</li>
                      <li>Upto 15 people</li>
                      <li>3 tour guides</li>
                      <li>Sleep in provided tents</li>
                      <li>Difficulty: hard</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-3">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$897</p>
                    </div>
                    <a href="#" className="btn btn--white btn--animated">
                      Book Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn btn--green">
              Discover all tours
            </a>
          </div>
        </section>

        {/* Fourth section */}
        <section className="section-stories">
          <div className="bg-video">
            <video
              src={bgVideo}
              className="bg-video__content"
              autoPlay
              muted
              loop
            ></video>
          </div>
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              We make people genuinely happy
            </h2>
          </div>
          <div className="row">
            <div className="story">
              <div className="story__shape">
                <img src={boatrowing} className="story__image" />
                <div className="story__caption">Mary Smith</div>
              </div>
              <div className="story__text">
                <h3 className="heading-teritary u-margin-bottom-small">
                  I have the best week ever with my family
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="story">
              <div className="story__shape">
                <img src={boatrowing} className="story__image" />
                <div className="story__caption">Jack Wilson</div>
              </div>
              <div className="story__text">
                <h3 className="heading-teritary u-margin-bottom-small">
                  WOW! My life is completely different now
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn btn-text">
              Read all stories &rarr;
            </a>
          </div>
        </section>

        {/* Fifth section */}
        <section className="section-book">
          <div className="row">
            <div className="book">
              <div className="book__form">
                <form action="#" className="from">
                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary">Start Booking now</h2>
                  </div>
                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Full Name"
                      id="name"
                      required
                    />
                    <label for="" className="form__label">
                      Full Name
                    </label>
                  </div>

                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      placeholder="Email address"
                      id="email"
                      required
                    />
                    <label for="" className="form__label">
                      Email address
                    </label>
                  </div>

                  <div className="form__group u-margin-bottom-medium">
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="small"
                        name="size"
                      />
                      <label for="small" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Small tour group
                      </label>
                    </div>
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="large"
                        name="size"
                      />
                      <label for="large" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Large tour group
                      </label>
                    </div>
                  </div>
                  <div className="form__group">
                    <button className="btn btn--green">Next step &rarr;</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__logo-box">
          <img src={img} alt="company_logo" className="footer__logo" />
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Company
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Contact us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Careers
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              Built my{" "}
              <a href="" className="footer__link">
                Hitesh S V{" "}
              </a>{" "}
              with Advanced CSS,animation and Sass. Responsiveness is under
              process.
            </p>
          </div>
        </div>
      </footer>

      {/* <section className="grid-test">
        <div className="row">
          <div className="col-1-of-2">Col 1 of 2</div>
          <div className="col-1-of-2">Col 1 of 2</div>
        </div>
        <div className="row">
          <div className="col-1-of-3">Col 1 of 3</div>
          <div className="col-1-of-3">Col 1 of 3</div>
          <div className="col-1-of-3">Col 1 of 3</div>
        </div>
        <div className="row">
          <div className="col-1-of-3">Col 1 of 3</div>
          <div className="col-2-of-3">Col 2 of 3</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-1-of-4">Col 1 of 4</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-2-of-4">Col 2 of 4</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-3-of-4">Col 3 of 4</div>
        </div>
      </section> */}
    </>
  );
}

export default App;

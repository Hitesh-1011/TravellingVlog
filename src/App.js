import logo from "./logo.svg";
import "./App.css";
import img from "../src/Images/logo1.png";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;

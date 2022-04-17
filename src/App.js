import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="logo-box">
          <img src="../../Images/logo1.png" alt="tigerlogo" className="logo" />
        </div>
        <div className="heading">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Outdoors</span>
            <span className="heading-primary-sub">is where life happens...</span>
          </h1>
          <a href="#" className="btn btn-white btn-animated">
            Discover our tours
          </a>
        </div>
      </header>
    </>
  );
}

export default App;

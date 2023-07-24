import declarative from "./assets/icon1.png";
import components from "./assets/icon2.png";
import singleWay from "./assets/icon3.png";
import JSX from "./assets/icon4.png";
import ironhackLogo from "./assets/ironhack-logo-xs.png";
import menu from "./assets/menu-top-xs.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="first">
      <nav>
        <img className="logo" src={ironhackLogo} alt="" />
        <img className="menu" src={menu} alt="" />
      </nav>
      <div className="react">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super nuinja developer.
        </p>
        <button>Awesome!</button>
      </div>
      </section>
      
      <section className="second">
        <div>
          <img src={declarative} alt="" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={components} alt="" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={singleWay} alt="" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the componet's</p>
        </div>
        <div>
          <img src={JSX} alt="" />
          <h3>JSX</h3>
          <p>statucally-typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App;

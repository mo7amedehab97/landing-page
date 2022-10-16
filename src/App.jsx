import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/seervices/Services";
import Slider from "./components/slider/Slider";
import Team from "./components/team/Team";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

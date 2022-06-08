import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "../src/Pages/Shared/Header";
import Intro from "../src/Pages/Intro/Intro.jsx";
import Services from "../src/Pages/Services/Services.jsx";
import Experience from "../src/Pages/Experience/Experience.jsx";
import Works from "../src/Pages/Works/Works.jsx";
import Portfolio from "../src/Pages/Portfolio/Portfolio.jsx";
import Testimonial from "../src/Pages/Testimonials/Testimonial.jsx";
import Contact from "../src/Pages/Contact/Contact";
import Footer from "../src/Pages/Shared/Footer/Footer.jsx";
import { useContext } from "react";
import { themeContext } from "./Context";
import "./App.css";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='App'

      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >



      <Header />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
// import Testimonial from "../src/Pages/Testimonials/Testimonial.jsx";
import Contact from "../src/Pages/Contact/Contact";
import Intro from "../src/Pages/Intro/Intro.jsx";
// import Experience from "../src/Pages/Experience/Experience.jsx";
// import Works from "../src/Pages/Works/Works.jsx";
import Portfolio from "../src/Pages/Portfolio/Portfolio.jsx";
import Services from "../src/Pages/Services/Services.jsx";
import Footer from "../src/Pages/Shared/Footer/Footer.jsx";
import "./App.css";
import { themeContext } from "./Context";
import About from './Pages/About/About.jsx';
import Header from "./Pages/Shared/Header/Header";

function App() {
  const theme = useContext(themeContext);
  console.log(theme);
  const darkMode = theme?.state?.darkMode;
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
      
      {/* <Experience /> */}
      {/* <Works /> */}
      <About />
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

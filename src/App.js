import "./App.css";
import Header from "./components/layout/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services/>
      <Blog/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;

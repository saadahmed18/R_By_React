import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services/>
      <Blog/>
      <Contact/>
    </>
  );
}

export default App;

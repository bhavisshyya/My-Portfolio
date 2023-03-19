import "./App.css";
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import About from "./Components/about/About";
import Project from "./Components/project/Project";
import Contact from "./Components/contact/Contact";
import Skill from "./Components/skills/Skill";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

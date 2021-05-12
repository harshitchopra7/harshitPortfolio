import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import TechStack from './components/TechStack/TechStack';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <TechStack />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;

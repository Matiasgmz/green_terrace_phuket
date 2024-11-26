import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavHead from './components/NavHead';
import Header from "./components/Header";
import About from "./components/About";
import NavInfo from "./components/NavInfo";
import Menu from "./components/Menu";


function App() {
  return (
    <div style={{ backgroundColor: "#284237" }}>
      <NavInfo />
      <NavHead />
      <Header />
      <About />
      <Menu />
    </div>
  );
}

export default App;

import "./App.css";
import About from "./components/About/About";
import Block from "./components/Block/Block";
import End from "./components/End/End";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Block />
      <End />
    </div>
  );
}

export default App;

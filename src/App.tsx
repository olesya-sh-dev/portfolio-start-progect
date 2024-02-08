import "./App.css";

import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";

import { Footer } from "./layout/footer/Footer";
import { Contact } from "./layout/sections/contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

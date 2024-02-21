import "./App.css";

import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";

import { Footer } from "./layout/footer/Footer";
import { Contact } from "./layout/sections/contact/Contact";
import { ProgectS } from "./layout/sections/progects/ProgectS";
import { GoTopBtn } from "./assets/images/goTopBtn/GoTopBtn";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <ProgectS />
      <Contact />
      <Footer />
      <GoTopBtn />
    </div>
  );
}

export default App;

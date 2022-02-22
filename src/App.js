import "./App.css";
import { Hero, Footer, Features, CTA } from "./components/sections";
import GlobalStyles from "./styles/GlobalStyles";
import content from "./content";
import Feature from "./components/feature/Feature";

function App() {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <Features>
        {content.map((item, index) => (
          <Feature key={index} item={item} />
        ))}
      </Features>
      <CTA />
      <Footer />
    </>
  );
}

export default App;

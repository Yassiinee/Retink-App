import "./assets/App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Erreur from "./screens/Erreur";
import Services from "./screens/Services";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./assets/globalStyles";
import styled from "styled-components";

const Section = styled.section`
  overflow-x: hidden;
`;

function App() {
  let location = useLocation();

  return (
    <Section>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route component={Erreur} />
        </Switch>
      </AnimatePresence>
    </Section>
  );
}

export default App;

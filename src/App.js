import { BrowserRouter as Router } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import Home from "./page";

const App = () => {
  return (
    <SimpleReactLightbox>
      <Router>
        <Home />
      </Router>
    </SimpleReactLightbox>
  );
};

export default App;

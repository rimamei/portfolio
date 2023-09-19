import { BrowserRouter as Router } from 'react-router-dom';
import Home from './page';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <Router>
      <Home />
      <Analytics />
    </Router>
  );
};

export default App;

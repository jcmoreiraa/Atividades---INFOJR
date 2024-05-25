
import './App.css'


import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Game from './pages/Game'


function App() {
  const AppRoutes = () => {
    const routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "game", element: <Game />}
    ]);
    return routes;
  };
  return (
    <div>

    <Router>
      <AppRoutes />
    </Router>
        

    </div>
    
  )
}

export default App

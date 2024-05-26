
import './App.css'


import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game'


function App() {
  const AppRoutes = () => {
    const routes = useRoutes([
      { path: "/", element: <Home /> },
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

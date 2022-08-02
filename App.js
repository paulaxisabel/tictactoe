import { Routes, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion";  
import GameMenu from "./components/GameMenu";
import GameScene from "./components/GameScene";

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      <main>
        <div className="container">         
          <AnimatePresence exitBeforeEnter initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<GameMenu />} />
              <Route path="game-board" element={<GameScene />} />     
              <Route path="multiplayer" element={<GameScene />} />           
            </Routes>
          </AnimatePresence>
        </div>
      </main>     
    </div>
  );
}

export default App;

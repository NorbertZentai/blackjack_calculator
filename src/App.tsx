import React from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import OrientationNotice from "./components/Orientation/OrientationNotice";
import Navbar from "./components/navbar/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <OrientationNotice />
      <GameBoard />
    </>
  );
};

export default App;
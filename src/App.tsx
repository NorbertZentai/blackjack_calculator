import React from "react";
import OrientationNotice from "./components/Orientation/OrientationNotice";
import Navbar from "./components/navbar/Navbar";
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <OrientationNotice />
    </>
  );
};

export default App;
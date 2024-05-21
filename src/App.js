import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DesignBoard from "./pages/DesignBoard";

import { DesignProvider } from "./context/DesignContext";

function App() {
  return (
    <>
      {/* <Home/> */}
      <Login/>
      {/* <DesignProvider>
        <DesignBoard />
      </DesignProvider> */}
    </>
  );
}

export default App;

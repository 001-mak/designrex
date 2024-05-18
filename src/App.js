import "./App.css";
import Home from "./pages/Home";
import DesignBoard from "./pages/DesignBoard";

import { DesignProvider } from "./context/DesignContext";

function App() {
  return (
    <>
      {/* <Home/> */}
      <DesignProvider>
        <DesignBoard />
      </DesignProvider>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Drawer from "./components/Drawer";
import Contacts from "./pages/Contacts";
import ChartsMaps from "./pages/ChartsMaps";

function App() {
  return (
    <div className="App">
      <Drawer>
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/charts-and-maps" element={<ChartsMaps />} />
        </Routes>
      </Drawer>
    </div>
  );
}

export default App;

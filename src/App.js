
import {Routes,Route,} from "react-router-dom";
import Option1Basic from "./pages/Option1Basic";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Option1Basic />} />
    </Routes>
  );
}
export default App;

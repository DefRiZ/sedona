import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer/Footer";
import Hotels from "./pages/Hotels/Hotels";

import styles from "./App.module.scss";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.body}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/hotels" element={<Hotels />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

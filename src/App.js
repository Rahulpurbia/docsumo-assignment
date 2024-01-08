import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Products from "./pages/products";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout component={<HomePage />} />} />
          <Route
            path="/products"
            element={<Layout component={<Products />} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

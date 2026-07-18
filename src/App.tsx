import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Marketplace from "./pages/Marketplace";
import Community from "./pages/Community";
import MyCollection from "./pages/MyCollection";
import ProductDetails from "./pages/ProductDetails";
import PostDetails from "./pages/PostDetails";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Marketplace />} />

        <Route path="/community" element={<Community />} />

        <Route path="/collection" element={<MyCollection />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
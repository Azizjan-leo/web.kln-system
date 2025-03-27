import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Basket from "./pages/Basket";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Basket />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

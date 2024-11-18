import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { Exclusive } from "./components/Exclusive";
import { Login } from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MobileAdver1 } from "./components/MobileAdvert1";
import { MobileAdver2 } from "./components/MobileAdvert2";
import { Cart } from "./components/Cart";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <Router>
      <ToastContainer position="bottom-right" />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/exclusive" element={<Exclusive />} />
        <Route path="/mobile-advert1" element={<MobileAdver1 />} />
        <Route path="/mobile-advert2" element={<MobileAdver2 />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Router>
  );
}

export default App;

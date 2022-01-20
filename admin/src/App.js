// *** third library ***
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// *** css ***
import "./App.css";

// *** components ***
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import NewProduct from "./pages/new-product/NewProduct";
import NewUser from "./pages/new-user/NewUser";
import ProductList from "./pages/product-list/ProductList";
import Product from "./pages/product/Product";
import UserList from "./pages/user-list/UserList";
import User from "./pages/user/User";

function App() {
  return (
    <div>
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/new-user" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/new-product" element={<NewProduct />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

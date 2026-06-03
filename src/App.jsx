import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import Guest from "./pages/Guest";
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";

function App() {

  return (
    <Routes>

      {/*UTS*/}
      <Route path="/sedap" element={<Guest />} />

      {/*PRAKTIKUM*/}
      <Route
        path="*"
        element={
          <div
            id="app-container"
            className="bg-gray-100 min-h-screen flex">
            <div id="layout-wrapper" className="flex flex-row flex-1">
              <Sidebar />
              <div id="main-content" className="flex-1 p-4"
              >
                <Header />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="*" element={<NotFound />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:id" element={<ProductDetail />} />
                </Routes>
              </div>
            </div>
          </div>
        }
      />

    </Routes>
  );
}

export default App;
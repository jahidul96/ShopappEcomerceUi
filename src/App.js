import {BrowserRouter, Routes, Route} from "react-router-dom";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import PreNav from "./components/PreNav";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductsPage from "./pages/ProductsPage";
import Login from "./pages/Login";
import BecomeSeller from "./pages/BecomeSeller";
import SellerPage from "./pages/SellerPage";

function App() {
	return (
		<BrowserRouter>
			<div>
				<PreNav />
				<Navbar />
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login/signin" element={<Login />} />
				<Route path="/product/productdetails" element={<Details />} />
				<Route path="/product/:id" element={<ProductsPage />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/seller/signin/login" element={<BecomeSeller />} />
				<Route path="/sellerprofile" element={<SellerPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

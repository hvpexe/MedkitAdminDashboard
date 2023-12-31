import React, { lazy, useEffect } from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import { themeChange } from "theme-change";
import checkAuth from "./app/auth";
import initializeApp from "./app/init";

// Importing pages
const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const About = lazy(() => import("./pages/About"));
const Cart = lazy(() => import("./pages/Cart"));
const Documentation = lazy(() => import("./pages/Documentation"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));
const Download = lazy(() => import("./pages/Download"));

// Initializing different libraries
initializeApp();

// Check for login and initialize axios
const token = checkAuth();

function App() {
	// useEffect(() => {
	// 	// 👆 daisy UI themes initialization
	// 	themeChange(false);
	// }, []);

	return (
		<>
			<Router>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/product" element={<Product />} />
					<Route path="/about" element={<About />} />
					<Route path="/download" element={<Download />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/paymentSuccess" element={<PaymentSuccess />} />
					<Route path="/login" element={<Login />} />
					<Route path="/documentation" element={<Documentation />} />

					{/* Place new routes over this */}
					<Route path="/app/*" element={<Layout />} />

					<Route
						path="*"
						element={
							<Navigate to={token ? "/app/dashboard" : "/login"} replace />
						}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;

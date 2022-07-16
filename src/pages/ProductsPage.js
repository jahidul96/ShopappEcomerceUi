import React, {useEffect} from "react";
import Footer from "../components/Footer";
import FromSameStore from "../components/FromSameStore";
import "./styles/productspage.css";
const ProductsPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="productpageContainer">
			<h1>
				some static product after backend build it will change
				dynamically
			</h1>
			<FromSameStore showTitle={true} />
			<FromSameStore showTitle={true} />
			<FromSameStore showTitle={true} />
			<FromSameStore showTitle={true} />
			<FromSameStore showTitle={true} />
			<FromSameStore showTitle={true} />
			<FromSameStore showTitle={true} />
			<FromSameStore showTitle={true} />
			<FromSameStore showTitle={true} />
			<Footer />
		</div>
	);
};

export default ProductsPage;

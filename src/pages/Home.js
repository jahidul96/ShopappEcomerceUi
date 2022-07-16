import "./styles/home.css";
import {useEffect} from "react";
import Slider from "../components/Slider";
import HomeAdd from "../components/HomeAdd";
import Categories from "../components/Categories";
import {CategoriesData} from "../data/categories";
import Products from "../components/Products";
import Footer from "../components/Footer";
import {products} from "../data/products";

export default function Home() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<Slider />
			<div className="bodyColor">
				<div className="container">
					<div className="adBannerDivStyle">
						<img
							src="https://img.pikbest.com/background/20180831/ecommerce-gradient-fashion-banner-background_2746160.jpg!c1024wm0"
							alt="image"
						/>
					</div>
					<HomeAdd />
					<Categories catagoriesData={CategoriesData} />
					<Products products={products} title={"Just For You"} />
				</div>
			</div>
			<Footer />
		</div>
	);
}

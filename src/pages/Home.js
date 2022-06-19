import './styles/home.css'
import { useEffect, useState } from 'react'
import Slider from "../components/Slider";
import HomeAdd from "../components/HomeAdd";
import Categories from "../components/Categories";
import { CategoriesData } from "../data/categories";
import Products from "../components/Products";
import Footer from "../components/Footer";

export default function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = () => {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setProducts(data)
                })
                .catch(err => console.log(err.message))

        }
        fetchProducts()
    }, [])
    return (
        <div>
            <Slider />
            <div className="bodyColor">
                <div className="container">
                    <div className="adBannerDivStyle">
                        <img src="https://images.vexels.com/media/users/3/194698/raw/34d9aa618f832510ce7290b4f183484a-shop-online-slider-template.jpg" alt="image" />
                    </div>
                    <HomeAdd />
                    <Categories catagoriesData={CategoriesData} />
                    <Products products={products} title={'Just For You'} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

import "./styles/slide.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import {Link, useNavigate} from "react-router-dom";

export default function Slider() {
	const navigate = useNavigate();

	const gotoDetailsPage = () => {
		navigate("/product/productdetails");
	};
	return (
		<Carousel
			autoPlay={true}
			showThumbs={false}
			showArrows={false}
			className="slider"
		>
			<div className="sliderItemWrapper" onClick={gotoDetailsPage}>
				<img src="https://img.freepik.com/free-vector/fashion-sale-banners-with-photo_52683-9828.jpg?w=2000" />
			</div>
			<div className="sliderItemWrapper" onClick={gotoDetailsPage}>
				<img src="https://img.freepik.com/free-psd/horizontal-banner-template-big-sale-with-woman-shopping-bags_23-2148786755.jpg?w=2000" />
			</div>
			<div className="sliderItemWrapper" onClick={gotoDetailsPage}>
				<img src="https://img.freepik.com/free-psd/fashion-banner-template_23-2148509060.jpg?w=2000" />
			</div>
		</Carousel>
	);
}

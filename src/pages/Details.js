import "./styles/details.css";
import FromSameStore from "../components/FromSameStore";
import Footer from "../components/Footer";
import {useEffect} from "react";
import DeatilsDelivery from "../components/DeatilsDelivery";
import ProductDescription from "../components/ProductDescription";

export default function Details() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="productDetailsContainer">
			<div className="DetailsCustomcontainer productDetailsFlexDiv">
				{/* first left immage div */}

				<div className="productDetailsImageDiv">
					<div className="productDetailsImageWrapperDiv">
						<img src="https://qph.cf2.quoracdn.net/main-qimg-1cf4e8389904b04cf20c0d95a4bf3b03-lq" />
					</div>

					{/* slider image if multiple image have */}
					<div></div>
				</div>

				{/* midlle details div */}
				<ProductDescription />

				{/* right delivery details div */}
				<DeatilsDelivery />
			</div>

			<div className="DetailsCustomcontainer">
				<FromSameStore />
			</div>
			<Footer />
		</div>
	);
}

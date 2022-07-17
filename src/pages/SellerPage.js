import React from "react";
import FromSameStore from "../components/FromSameStore";
import "./styles/sellerpage.css";

const SellerPage = () => {
	return (
		<div className="sellerpage_container">
			<div className="sellerProfieContainer">
				<p>Profile details</p>
			</div>
			<div className="sellerProductContainer">
				<div>
					<p>product post comp</p>
				</div>
				{/* all seller's product */}

				<div>
					<FromSameStore showTitle={true} />
					<FromSameStore showTitle={true} />
					<FromSameStore showTitle={true} />
					<FromSameStore showTitle={true} />
					<FromSameStore showTitle={true} />
					<FromSameStore showTitle={true} />
					<FromSameStore showTitle={true} />
				</div>
			</div>
		</div>
	);
};

export default SellerPage;

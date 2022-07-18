import React from "react";
import FromSameStore from "../components/FromSameStore";
import {ButtonComp, InputComp} from "../components/Reuse";
import "./styles/sellerpage.css";
import {TbBrandMessenger} from "react-icons/tb";
import {BiSearch} from "react-icons/bi";

const SellerPage = () => {
	return (
		<div className="sellerpage_container">
			<div className="sellerProfieContainer">
				<div className="postProductBtnContainer">
					<ButtonComp text="Post" classname={"sellerpostBtn"} />
				</div>
				<ProfilePage />
			</div>
			<div className="sellerProductContainer">
				<div className="searchyourProduct">
					<InputComp
						classname={"sellerSearch"}
						placeholder="search..."
					/>
				</div>

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

const ProfilePage = () => {
	const imgLink =
		"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80";
	return (
		<div className="profilepage">
			<div className="profileTop">
				<div className="pageImgWrapper">
					<img className="pageImg" src={imgLink} alt="avator" />
					<p>pageName</p>
				</div>
				<div className="msgIconDiv">
					<TbBrandMessenger size={25} className="msgIcon" />
					<div className="notify">
						<p>1</p>
					</div>
				</div>
			</div>
			<div className="pageResponseMainDiv">
				<div className="flexStyleProfile">
					<p>Inbox response rate</p>
					<p>100%</p>
				</div>
				<div className="flexStyleProfile">
					<p>Delivery rate</p>
					<p>100%</p>
				</div>
				<div className="flexStyleProfile">
					<p>Client Rating</p>
					<p>100%</p>
				</div>
				<div className="flexStyleProfile">
					<p>Services</p>
					<p>100%</p>
				</div>
				<div className="flexStyleProfile">
					<p>Total Product</p>
					<p>200</p>
				</div>
				<div className="flexStyleProfile">
					<p>This Month sell</p>
					<p>20000</p>
				</div>
			</div>
		</div>
	);
};

export default SellerPage;

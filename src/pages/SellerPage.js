import React from "react";
import FromSameStore from "../components/FromSameStore";
import {ButtonComp, InputComp} from "../components/Reuse";
import "./styles/sellerpage.css";
import {TbBrandMessenger} from "react-icons/tb";
import {useNavigate} from "react-router-dom";

const SellerPage = () => {
	const navigate = useNavigate();
	const gotoPost = () => {
		navigate("/sellerprofile/post");
	};
	return (
		<div className="sellerpage_container">
			<div className="sellerProfieContainer">
				<div className="postProductBtnContainer">
					<ButtonComp
						click={gotoPost}
						text="Post"
						classname={"sellerpostBtn"}
					/>
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

const sellerData = [
	{
		id: 1,
		title: "Inbox response rate",
		value: "100%",
	},
	{
		id: 1,
		title: "Delivery rate",
		value: "100%",
	},
	{
		id: 1,
		title: "Client Rating",
		value: "100%",
	},
	{
		id: 1,
		title: "Services",
		value: "100%",
	},
	{
		id: 1,
		title: "This Month sell",
		value: "20000",
	},
];

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
				{sellerData.map((data) => (
					<div key={data.id} className="flexStyleProfile">
						<p>{data.title}</p>
						<p>{data.value}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SellerPage;

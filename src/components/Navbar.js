import "./styles/nav.css";
import {BiCart, BiSearch} from "react-icons/bi";
import {AiOutlineMenu} from "react-icons/ai";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Navbar() {
	const [showNav, setShowNav] = useState(false);

	const navigate = useNavigate();

	const gotoHomePage = () => {
		navigate("/");
	};

	const toggleNav = () => {
		setShowNav(!showNav);
	};

	return (
		<>
			<div className="navbar">
				<div className="container navItemWrapper">
					<div className="navLogoDiv" onClick={gotoHomePage}>
						<h2>Irian's_Shop</h2>
					</div>

					<div className="navMiddleDiv">
						<div>
							<input
								className="navbarInput"
								placeholder="search..."
							/>
							<span className="searchBtn">
								<BiSearch size={20} color={"white"} />
							</span>
						</div>
					</div>
					<div className="navRightDiv">
						<div className="cartIcon">
							<div>
								<span>
									<BiCart size={30} />
								</span>
								<span className="cartItemCounter">1</span>
							</div>
						</div>

						<span className="downoadapp">DownloadApp</span>
					</div>

					<div className="menuIcon" onClick={toggleNav}>
						<AiOutlineMenu size={25} color="#000" />
					</div>
				</div>
			</div>

			{/* small screen search input */}
			{showNav && (
				<div className="smallScreenNavigationStyles">
					<div className="smallScreenSearch ">
						<input
							className="navbarInput navSmallSearchInput"
							placeholder="search..."
						/>
						<button className="smallScreenDownloadBtn">
							DownloadApp
						</button>
					</div>

					<div className="smallScreenPrenav">
						<button>Save more on App</button>
						<button>Sell on Shop</button>
						<button>Customer Care</button>
						<button>Singin/Login</button>
						<button>Tearms & Policy</button>
					</div>
				</div>
			)}
		</>
	);
}

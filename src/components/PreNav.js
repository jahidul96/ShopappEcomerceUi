import React from "react";
import "./styles/prenav.css";
import {Link} from "react-router-dom";

export default function PreNav() {
	return (
		<div className="preNav">
			<div className="prenavContainer">
				<nav>
					<ul>
						<li className="active">SAVE MORE ON APP</li>
						<li>
							<Link className="link" to={"/seller/signin/login"}>
								BECOMESELLER
							</Link>
						</li>
						<li>CUSTOMER CARE</li>
						<li>
							<Link className="link" to={"/login/signin"}>
								SIGNUP/LOGIN
							</Link>
						</li>
						<li>TERMS AND POLICY</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

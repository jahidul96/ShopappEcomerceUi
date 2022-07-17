import React, {useState} from "react";
import {InputComp} from "../components/Reuse";
import Footer from "../components/Footer";
import {useNavigate} from "react-router-dom";

const BecomeSeller = () => {
	const [show, setShow] = useState(false);
	const navigate = useNavigate();
	const Login = () => {
		navigate("/sellerprofile");
	};
	return (
		<>
			{show ? (
				<div className="loginContainer">
					<div>
						<h3>SignIn</h3>
						<form className="loginputWrapper">
							<InputComp
								placeholder={"fullname"}
								classname="loginInput"
							/>
							<InputComp
								placeholder={"phone number"}
								classname="loginInput"
							/>
							<InputComp
								placeholder={"store name"}
								classname="loginInput"
							/>
							<InputComp
								placeholder={"email"}
								classname="loginInput"
							/>
							<InputComp
								placeholder={"password"}
								classname="loginInput"
							/>
							<button onClick={Login} className="loginBtn">
								Signin
							</button>
						</form>
						<p onClick={() => setShow(!show)}>
							Already have an account?Login!.
						</p>
					</div>
				</div>
			) : (
				<div className="loginContainer">
					<div>
						<h3>Welcome Back. Please login</h3>
						<form className="loginputWrapper">
							<InputComp
								placeholder={"email"}
								classname="loginInput"
							/>
							<InputComp
								placeholder={"password"}
								classname="loginInput"
							/>

							<button onClick={Login} className="loginBtn">
								Submit
							</button>
						</form>
						<p onClick={() => setShow(!show)}>
							Don't have an account?Create One!.
						</p>
					</div>
				</div>
			)}

			<Footer />
		</>
	);
};

export default BecomeSeller;

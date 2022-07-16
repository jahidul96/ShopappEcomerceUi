import React, {useState} from "react";
import "./styles/login.css";
import {InputComp} from "../components/Reuse";
import Footer from "../components/Footer";
const Login = () => {
	const [show, setShow] = useState(false);

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
								placeholder={"email"}
								classname="loginInput"
							/>
							<InputComp
								placeholder={"password"}
								classname="loginInput"
							/>
							<button className="loginBtn">Signin</button>
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

							<button className="loginBtn">Submit</button>
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

export default Login;

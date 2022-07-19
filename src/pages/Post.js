import React, {useState} from "react";
import {ButtonComp, InputComp} from "../components/Reuse";
import "./styles/post.css";
import {TiDeleteOutline} from "react-icons/ti";

const Post = () => {
	const [images, setImages] = useState([]);
	const [tags, setTags] = useState("");
	const [allTags, setAllTags] = useState([]);
	const graveImg = (e) => {
		const [file] = e.target.files;
		let imgFile = URL.createObjectURL(file);
		setImages((prev) => [
			...prev,
			{
				img: imgFile,
				id: Math.floor(Math.random() * 100),
			},
		]);
	};

	const postData = (e) => {
		e.preventDefault();
		console.log(123);
		console.log(tags);
	};

	const submitTags = (e) => {
		e.preventDefault();
		setAllTags((prev) => [
			...prev,
			{
				id: Math.floor(Math.random() * 100),
				tags,
			},
		]);
	};

	console.log(images);

	return (
		<div className="postContainer">
			<div className="postformWrapper">
				<h2>Post Product!.</h2>
				<div className="postform">
					<InputComp placeholder={"title"} classname={"loginInput"} />
					<textarea
						placeholder="description"
						className="posttextarea"
					></textarea>

					<div className="postinputGroup">
						<InputComp placeholder="price" classname="halfInput" />
						<InputComp placeholder="brand" classname="halfInput" />
					</div>
					<SelectComp />

					<Tags setTags={setTags} submitTags={submitTags} />

					<div className="postImage">
						{images.length < 4 && (
							<input
								type="file"
								id="img"
								multiple
								accept="image/*"
								onChange={graveImg}
							/>
						)}

						<div className="imgGroup">
							{images.map((img, i) => (
								<ShowImage image={img} key={i} />
							))}
						</div>
					</div>

					<ButtonComp
						click={postData}
						text={"Post"}
						classname={"postBtn"}
					/>
				</div>
			</div>
		</div>
	);
};

const SelectComp = () => {
	return (
		<div className="postinputGroup selectGroupStyle">
			<div>
				<label for="Quality">Quality : </label>

				<select name="quality" id="quality">
					<option value="Extraordinay">Extraordinay</option>
					<option value="Good">Good</option>
					<option value="Medium">Medium</option>
					<option value="Realiable">Realiable</option>
				</select>
			</div>
			<div>
				<label for="Categories">Categories : </label>

				<select name="" id="categories">
					<option value="Fashion">Fashion</option>
					<option value="Electronics">Electronics</option>
					<option value="BabyFashion">BabyFashion</option>
					<option value="Gadget">Gadget</option>
					<option value="MenFashion">MenFashion</option>
					<option value="LadiesFashion">LadiesFashion</option>
					<option value="All">Gadget</option>
				</select>
			</div>
		</div>
	);
};

const Tags = ({setTags, submitTags}) => {
	return (
		<form className="tagsWrapper" onSubmit={submitTags}>
			<input
				onChange={(e) => setTags(e.target.value)}
				placeholder={"tags"}
				className={"loginInput "}
			/>
		</form>
	);
};
const ShowImage = ({image}) => {
	return (
		<div className="chossenImgWrapper">
			<img src={image.img} width={100} height={80} />
			<div className="imageDelIcon">
				<TiDeleteOutline className="delIcon" />
			</div>
		</div>
	);
};

export default Post;

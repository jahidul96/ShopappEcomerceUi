import React, {useState} from "react";
import {ButtonComp, InputComp} from "../components/Reuse";
import "./styles/post.css";
import {TiDeleteOutline} from "react-icons/ti";

let initialimgValue = localStorage.getItem("images")
	? JSON.parse(localStorage.getItem("images"))
	: [];

let initialTags = localStorage.getItem("tags")
	? JSON.parse(localStorage.getItem("tags"))
	: [];

const Post = () => {
	const [images, setImages] = useState(initialimgValue);
	const [tag, setTag] = useState("");
	const [allTags, setAllTags] = useState(initialTags);

	const graveImg = (e) => {
		const [file] = e.target.files;
		let imgFile = URL.createObjectURL(file);
		let newImages = [
			...images,
			{
				img: imgFile,
				id: Math.floor(Math.random() * 1000),
			},
		];
		setImages(newImages);
		localStorage.setItem("images", JSON.stringify(newImages));
	};

	const postData = (e) => {
		e.preventDefault();
		console.log(123);
	};

	const submitTags = (e) => {
		e.preventDefault();
		let newTags = [
			...allTags,
			{
				id: Math.floor(Math.random() * 1000),
				tag,
			},
		];
		setAllTags(newTags);
		localStorage.setItem("tags", JSON.stringify(newTags));
	};

	const deleteImage = (id) => {
		let delImg = images.filter((image) => image.id !== id);
		setImages(delImg);
		localStorage.setItem("images", JSON.stringify(delImg));
	};

	const deleteTag = (id) => {
		let delTag = allTags.filter((tag) => tag.id !== id);
		setAllTags(delTag);
		localStorage.setItem("tags", JSON.stringify(delTag));
	};

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

					{allTags.length ? (
						<div className="postTagsStyle">
							{allTags.map((data) => (
								<SingleTag
									data={data}
									deleteTag={deleteTag}
									key={data.id}
								/>
							))}
						</div>
					) : (
						""
					)}

					{allTags.length < 5 && (
						<Tags setTag={setTag} submitTags={submitTags} />
					)}

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
								<ShowImage
									image={img}
									key={i}
									deleteImage={deleteImage}
								/>
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
				<label>Quality : </label>

				<select name="quality" id="quality">
					<option value="Extraordinay">Extraordinay</option>
					<option value="Good">Good</option>
					<option value="Medium">Medium</option>
					<option value="Realiable">Realiable</option>
				</select>
			</div>
			<div>
				<label>Categories : </label>

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

const SingleTag = ({data, deleteTag}) => {
	return (
		<div className="singleTagWrapper">
			<p>{data.tag}</p>
			<div className="tagDelIconWrapper">
				<TiDeleteOutline
					className="delIcon"
					onClick={() => deleteTag(data.id)}
				/>
			</div>
		</div>
	);
};

const Tags = ({setTag, submitTags}) => {
	return (
		<form className="tagsWrapper" onSubmit={submitTags}>
			<input
				onChange={(e) => setTag(e.target.value)}
				placeholder={"tags"}
				className={"loginInput "}
			/>
		</form>
	);
};
const ShowImage = ({image, deleteImage}) => {
	return (
		<div className="chossenImgWrapper">
			<img src={image.img} width={100} height={80} />
			<div className="imageDelIcon">
				<TiDeleteOutline
					onClick={() => deleteImage(image.id)}
					className="delIcon"
				/>
			</div>
		</div>
	);
};

export default Post;

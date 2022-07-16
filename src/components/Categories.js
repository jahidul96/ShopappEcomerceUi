import "./styles/categories.css";
import {Link, useNavigate} from "react-router-dom";

export default function Categories({catagoriesData}) {
	const navigate = useNavigate();

	const gotoDetailsPage = (title) => {
		navigate(`/product/${title}`);
	};
	return (
		<div className="categories">
			<h2>Categories</h2>
			<div className="categoriesFlexItemWrapper">
				{catagoriesData.map((data) => (
					<div
						key={data.id}
						className="categoriesItemElement"
						onClick={() => gotoDetailsPage(data.title)}
					>
						<img src={data.image} alt={data.title} />
						<p>{data.title}</p>
					</div>
				))}
			</div>
		</div>
	);
}

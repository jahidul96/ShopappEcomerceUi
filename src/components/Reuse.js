import "./styles/reuse.css";

export const InputComp = ({classname, value, graveValue, placeholder}) => (
	<input
		onChange={graveValue}
		
		className={classname}
		placeholder={placeholder}
	/>
);

export const ButtonComp = ({text, classname, click}) => (
	<button onClick={click} className={classname}>
		{text}
	</button>
);

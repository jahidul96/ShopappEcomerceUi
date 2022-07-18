import "./styles/reuse.css";

export const InputComp = ({classname, placeholder}) => (
	<input className={classname} placeholder={placeholder} />
);

export const ButtonComp = ({text, classname}) => (
	<button className={classname}>{text}</button>
);

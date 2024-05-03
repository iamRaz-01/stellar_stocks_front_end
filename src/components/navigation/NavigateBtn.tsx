import "../../assets/css/Navigation.css";

interface Navibtn {
	text: string;
	icon: string;
	isActive: boolean;
	clickEvent: any;
	index: number;
}
export const NavigateBtn = (props: Navibtn) => {
	const { text, icon, isActive, clickEvent, index } = props;
	return (
		<button
			className={`naviBtn  ${isActive && "activeBtn"}`}
			onClick={() => {
				clickEvent(index);
			}}>
			<span className="material-symbols-outlined">{icon}</span>{" "}
			<p className="btnText">{text}</p>
		</button>
	);
};

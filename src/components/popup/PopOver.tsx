import { useState } from "react";
interface popOverProps {
	renderComponent: React.ReactElement;
	visibleComponent: React.ReactElement;
}
export const PopOver = (props: popOverProps) => {
	const [isActive, setActive] = useState(false);
	const { renderComponent, visibleComponent } = props;
	return (
		<div
			className={`pop-over-container`}
			onClick={() => {
				setActive(true);
			}}
			onMouseLeave={() => {
				setActive(false);
			}}>
			{visibleComponent}
			<div
				onMouseLeave={() => {
					setActive(false);
				}}
				className={`pop-content  ${isActive ? "pop-active" : ""}`}>
				{renderComponent}
			</div>
		</div>
	);
};

import { useState } from "react";
import "../../assets/css/Navigation.css";
import Logo from "../../assets/images/stellarstocksLogo.png";
import { NavigateBtn } from "./NavigateBtn";
import { PopOver } from "../popup/PopOver";

export const Navigator = () => {
	const [currentTab, switchTab] = useState(0);
	const arr = [
		{ text: "DashBoard ", icon: "dashboard" },
		{ text: "Create", icon: "edit_square" },
		{ text: "Bills", icon: "receipt_long " },
		{ text: "Invoice ", icon: "inventory " },
		{ text: "Products ", icon: "inventory_2 " },
		{ text: "Ask Ai", icon: "neurology " },
	];

	const navigateTabs = (index: number) => {
		switchTab(index);
	};
	const btns = arr.map((value, index) => {
		return (
			<PopOver
				renderComponent={<div> render</div>}
				visibleComponent={
					<NavigateBtn
						key={index}
						text={value.text}
						icon={value.icon}
						isActive={index === currentTab}
						clickEvent={navigateTabs}
						index={index}
					/>
				}
			/>
		);
	});

	return (
		<div className="Navigation">
			<div className="logo-container">
				<img src={Logo} alt="logo" />
			</div>
			{btns}
		</div>
	);
};

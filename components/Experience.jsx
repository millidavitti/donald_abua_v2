import React, { useEffect, useReducer, useRef } from "react";
import home from "../styles/Home.module.css";

function reducer(state, action) {
	switch (action.type) {
		case "tab":
			return { ...state, tabs: { ...state.tabs, current: action.id } };
	}
}

export default function Experience({ experienceData }) {
	const init = {
		tabs: {
			current: JSON.parse(experienceData)[0]._id,
		},
	};
	const exp = useRef();
	const [state, dispatch] = useReducer(reducer, init);
	useEffect(() => {
		dispatch({
			type: "tab",
			id: JSON.parse(experienceData)[0]._id,
		});
	}, [experienceData]);

	// Finds eperience based tab selection
	const experience = JSON.parse(experienceData).find(
		(exp) => exp._id === state.tabs.current,
	);

	function highlight(event) {
		const { id } = event.target;

		dispatch({ type: "tab", id });
		exp.current.classList.toggle(home.slideIn);
		exp.current.classList.add(home.slideIn);
		setTimeout(() => exp.current.classList.toggle(home.slideIn), 300);
	}

	return (
		<>
			<div className={home.tabs}>
				{/* TO DO!: Connect to api */}

				{JSON.parse(experienceData).map((exp) => (
					<p
						key={exp.id}
						className={`${home.tab} pointer ${
							state.tabs.current === exp._id ? home.deskTabHighlight : ""
						}`}
						onClick={highlight}
						id={exp._id}
					>
						{exp.work}
					</p>
				))}
			</div>

			{/* Experience */}
			<div className={home.experience} ref={exp}>
				<div className={home.experienceHeader}>
					<p className={home.roleCompany}>
						{experience?.role} <span>@ {experience?.work}</span>
					</p>
					<p className={home.roleDuration}>
						{experience?.date.start} - {experience?.date.end}
					</p>
				</div>
				<ul className={home.roleResponsibility}>
					{experience?.contributions.map((cont, index) => (
						<li key={index}>{cont}</li>
					))}
				</ul>
			</div>
		</>
	);
}

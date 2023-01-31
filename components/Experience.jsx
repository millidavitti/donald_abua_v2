import React, { useReducer, useRef, useState } from "react";
import home from "../styles/Home.module.css";
/**
 click on the tab
 highlight the left border
 switch experience
 */

/**
  click the tab
  Select the corresponding tab based on Id
  */

function reducer(state, action) {
	switch (action.type) {
		case "tab":
			return { ...state, tabs: { ...state.tabs, current: action.id } };
	}
}
const init = {
	tabs: {
		current: "tab-1",
	},
};
export default function Experience() {
	const [state, dispatch] = useReducer(reducer, init);
	const exp = useRef();
	const experiences = [
		{
			id: "tab-1",
			work: "Google",
			role: "FullStack",
			date: { start: "Dec,10", end: "Present" },
			contribution: [
				"Write modern, performant, maintainable code for a diverse array of client and internal projects",
				"Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
				"Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
			],
		},
		{
			id: "tab-2",
			work: "Microsoft",
			role: "React",
			date: { start: "January 2021", end: "April 2022" },
			contribution: [
				"Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern",
				"Helped solidify a brand direction for blistabloc that spans both packaging and web",
				"Interfaced with clients on a weekly basis, providing technological expertise",
			],
		},
		{
			id: "tab-3",
			work: "Nulo",
			role: "Fullstack",
			date: { start: "January 2021", end: "April 2022" },
			contribution: [
				"Developed and shipped highly interactive web applications for Apple Music using Ember.js",
				"Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
				"Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
				"Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps",
			],
		},
		{
			id: "tab-4",
			work: "MonogoDB",
			role: "React",
			date: { start: "January 2021", end: "April 2022" },
			contribution: [
				"Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern",
				"Helped solidify a brand direction for blistabloc that spans both packaging and web",
				"Interfaced with clients on a weekly basis, providing technological expertise",
			],
		},
	];
	const experience = experiences.find((exp) => exp.id === state.tabs.current);

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

				{experiences.map((exp) => (
					<p
						key={exp.id}
						className={`${home.tab} pointer ${
							state.tabs.current === exp.id ? home.deskTabHighlight : ""
						}`}
						onClick={highlight}
						id={exp.id}
					>
						{exp.work}
					</p>
				))}
			</div>

			{/* Experience */}
			<div className={home.experience} ref={exp}>
				<div className={home.experienceHeader}>
					<p className={home.roleCompany}>
						{experience.role} <span>@ {experience.work}</span>
					</p>
					<p className={home.roleDuration}>
						{experience.date.start} - {experience.date.end}
					</p>
				</div>
				<ul className={home.roleResponsibility}>
					{experience.contribution.map((cont, index) => (
						<li key={index}>{cont}</li>
					))}
				</ul>
			</div>
		</>
	);
}

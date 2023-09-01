import React, { useReducer, useState } from "react";
import Container from "./Container";
import LandingPageTemplate from "./LandingPageTemplate";
import LandingPage from "./LandingPage";
import Section from "./Section";
import home from "../styles/Home.module.css";
import { Portal } from "./Portal";

export default function LandingPageTemplates({ landingPageTemplateData }) {
	const [url, setUrl] = useState();
	const [isModalActive, setIsModalActive] = useState(false);

	return (
		<>
			<Section id='funnels'>
				<Container className={home.otherProjContainer}>
					<div className={home.opHead}>
						<h2>Landing Page Templates</h2>
						<p>for sales funnels</p>
					</div>
					<div className={home.opGrid}>
						{JSON.parse(landingPageTemplateData).map((project) => (
							<div
								key={project.name}
								onClick={() => {
									setUrl(project.link);
									setIsModalActive(true);
								}}
							>
								<LandingPageTemplate data={project} />
							</div>
						))}
					</div>
				</Container>
			</Section>
			{isModalActive && (
				<Portal portal='#portal'>
					<div id='overlay' onClick={() => setIsModalActive(false)}>
						<div id='modal'>
							<LandingPage url={url} />
						</div>
					</div>
				</Portal>
			)}
		</>
	);
}

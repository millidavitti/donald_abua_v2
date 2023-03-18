/* eslint-disable @next/next/no-img-element */
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import Container from "./Container";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import home from "../styles/Home.module.css";
import Frame from "./Frame";

export default function Aboutme({ aboutmeData }) {
	const photoRef = useRef();
	const aboutMeRef = useRef();
	const aboutMeRefInView = useInView(aboutMeRef, { amount: 0.1 });
	const photoRefInView = useInView(photoRef, { amount: 0.2 });

	return (
		<Section className={home.aboutSection} id='about'>
			<Container className={home.aboutContainer}>
				<SectionHeader pos={"01"} heading={"About Me"} />
				{/* <Frame> */}
				<article
					ref={aboutMeRef}
					className={home.aboutArticle}
					data-inview={aboutMeRefInView}
				>
					{JSON.parse(aboutmeData)
						.aboutMe.split(". ")
						.map((pgraph, i) => (
							<p key={i}>{pgraph}.</p>
						))}
					<p>Here are a few technologies I’ve been working with recently:</p>
					<ul>
						{JSON.parse(aboutmeData).toolChain.map((tool) => (
							<li key={tool}>{tool}</li>
						))}
					</ul>
				</article>
				{/* </Frame> */}
				<figure
					ref={photoRef}
					className={home.aboutFig}
					data-inview={photoRefInView}
				>
					<img
						src='https://res.cloudinary.com/torch-cms-media/image/upload/v1673611182/avatar_vyu2q3.jpg'
						alt='Mr Donald'
					/>
				</figure>
			</Container>
		</Section>
	);
}

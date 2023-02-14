/* eslint-disable @next/next/no-img-element */
import Section from "../components/Section";
import Container from "../components/Container";
import home from "../styles/Home.module.css";
import SectionHeader from "../components/SectionHeader";
import Featured from "../components/Featured";
import OtherProjects from "../components/OtherProjects";
import Experience from "../components/Experience";

import { features, others } from "../utils/mock";
import { useEffect, useRef } from "react";
import Observer from "../components/Observer";

export default function Home() {
	const aboutSection = useRef();
	const aboutMe = useRef();
	const photo = useRef();
	const experience = useRef();
	const featuredSection = useRef();
	const featured = useRef([]);

	function featureRefs(idx, el) {
		return (featured.current[idx] = el);
	}

	return (
		<>
			{/* Hero Section */}
			<Section className={home.heroSection}>
				<Container className={home.heroContainer}>
					<p>Hi, my name is</p>

					<p>
						Donald Abua.<br></br>
						<span>I build things for the web.</span>
					</p>

					<article>
						<p>
							I’m a software engineer specializing in building (and occasionally
							designing) exceptional digital experiences. Currently, I’m focused
							on building accessible, human-centered products at Upstatement.
						</p>
					</article>

					<a
						href='https://medium.com/@abuadonald'
						target='_blank'
						rel='noreferrer'
					>
						<button className={home.button} type='button'>
							Check out my blog!
						</button>
					</a>
				</Container>
			</Section>

			{/* About ME */}
			<Observer
				parent={aboutSection}
				elem={aboutMe}
				classList={home.slideUp}
				config={{ threshold: 0.12 }}
			>
				<Section ref={aboutSection} className={home.aboutSection} id='about'>
					<Container className={home.aboutContainer}>
						<SectionHeader pos={"01"} heading={"About Me"} />
						<article ref={aboutMe} className={home.aboutArticle}>
							<p>
								Hello! My name is Donald and I enjoy creating things that live
								on the internet. My interest in web development started back in
								2012 when I decided to try editing custom Tumblr themes — turns
								out hacking together a custom reblog button taught me a lot
								about HTML & CSS! <br />
								<br /> Fast-forward to today, and I’ve had the privilege of
								working at an advertising agency, a start-up, a huge
								corporation, and a student-led design studio. My main focus
								these days is building accessible, inclusive products and
								digital experiences at Upstatement for a variety of clients.{" "}
								<br />
								<br />I also recently launched a course that covers everything
								you need to build a web app with the Spotify API using Node &
								React.
								<br />
								<br />
								Here are a few technologies I’ve been working with recently:
							</p>
							<ul>
								<li>JavaScript (ES6+)</li>
								<li>React</li>
								<li>Node.js</li>
								<li>MongoDB</li>
								<li>Next JS</li>
								<li>Strapi (Headless CMS)</li>
							</ul>
						</article>
						<Observer
							parent={photo}
							elem={photo}
							classList={home.scale}
							config={{ threshold: 0.4 }}
						>
							<figure ref={photo} className={home.aboutFig}>
								<img
									src='https://res.cloudinary.com/torch-cms-media/image/upload/v1673611182/avatar_vyu2q3.jpg'
									alt='Mr Donald'
								/>
							</figure>
						</Observer>
					</Container>
				</Section>
			</Observer>
			{/* where I've worked */}
			<Section className={home.workSection} id='experience'>
				<Observer parent={experience} elem={experience} classList={home.scale}>
					<Container
						ref={experience}
						className={home.experienceContainer}
						config={{ threshold: [0.05, 0.35] }}
					>
						<SectionHeader pos={"02"} heading={"Where I've worked"} />
						{/* Workplace */}
						<div className={home.experiences}>
							<Experience />
						</div>
					</Container>
				</Observer>
			</Section>
			{/* Notable Projects */}

			<Section ref={featuredSection} className={home.featuredSection} id='work'>
				<Container className={home.featuredContainer}>
					<SectionHeader pos={"03"} heading={"Some Things I’ve Built"} />
					<Observer
						parent={featured}
						elem={featured}
						classList={home.slideUp}
						config={{ threshold: 0.1 }}
					>
						{features.map((feature, index) =>
							index % 2 ? (
								<Featured
									ref={featureRefs.bind(null, index)}
									key={index}
									data={feature}
									id={index}
								/>
							) : (
								<Featured
									ref={featureRefs.bind(null, index)}
									key={index}
									flip={true}
									data={feature}
									id={index}
								/>
							),
						)}
					</Observer>
				</Container>
			</Section>

			{/* Other Noteable Projects */}
			<Section>
				<Container className={home.otherProjContainer}>
					<div className={home.opHead}>
						<h2>Other Noteworthy Projects</h2>
						<p>view the archive</p>
					</div>
					<div className={home.opGrid}>
						{others.map((project) => (
							<a key={project.name} href={project.link}>
								<OtherProjects data={project} />
							</a>
						))}
					</div>
				</Container>
			</Section>
			{/* What next */}
			<Section id='contact'>
				<Container className={home.contact}>
					<p>04. What&apos;s next?</p>
					<article>
						<h2>Get In touch</h2>
						<p>
							Although I’m not currently looking for any new opportunities, my
							inbox is always open. Whether you have a question or just want to
							say hi, I’ll try my best to get back to you!
						</p>
						<a href='mailto:abuadonald@gmail.com'>
							<button type='button' className={home.button}>
								Say Hello
							</button>
						</a>
					</article>
				</Container>
			</Section>
		</>
	);
}

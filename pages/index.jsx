/* eslint-disable @next/next/no-img-element */
import Section from "../components/Section";
import Container from "../components/Container";
import home from "../styles/Home.module.css";
import SectionHeader from "../components/SectionHeader";
import { FolderSimple, GithubLogo, Link } from "phosphor-react";
import Featured from "../components/Featured";
import ToolChain from "../components/ToolChain";
import OtherProjects from "../components/OtherProjects";
import Experience from "../components/Experience";
// import Link as NextLink from 'next/link'

export default function Home() {
	return (
		<>
			{/* <h1>Web porfolio</h1> */}
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

					<button className={home.button}>Check out my blog!</button>
				</Container>
			</Section>
			{/* About ME */}
			<Section className={home.aboutSection} id='about'>
				<Container className={home.aboutContainer}>
					<SectionHeader pos={"01"} heading={"About Me"} />
					<article>
						<p>
							Hello! My name is Donald and I enjoy creating things that live on
							the internet. My interest in web development started back in 2012
							when I decided to try editing custom Tumblr themes — turns out
							hacking together a custom reblog button taught me a lot about HTML
							& CSS! <br />
							<br /> Fast-forward to today, and I’ve had the privilege of
							working at an advertising agency, a start-up, a huge corporation,
							and a student-led design studio. My main focus these days is
							building accessible, inclusive products and digital experiences at
							Upstatement for a variety of clients. <br />
							<br />I also recently launched a course that covers everything you
							need to build a web app with the Spotify API using Node & React.
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
					<figure>
						<img
							src='https://res.cloudinary.com/torch-cms-media/image/upload/v1673611182/avatar_vyu2q3.jpg'
							alt='Mr Donald'
						/>
					</figure>
				</Container>
			</Section>
			{/* where I've worked */}
			<Section className={home.workSection} id='experience'>
				<Container className={home.workContainer}>
					<SectionHeader pos={"02"} heading={"Where I've worked"} />
					{/* Workplace */}
					<div className={home.experiences}>
						<Experience />
					</div>
				</Container>
			</Section>
			{/* Notable Projects */}
			<Section className={home.featuredSection} id='work'>
				<Container className={home.featuredContainer}>
					<SectionHeader pos={"03"} heading={"Some Things I’ve Built"} />
					<Featured />
					<Featured flip={true} />
					<Featured />
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
						<OtherProjects />
						<OtherProjects />
						<OtherProjects />
						<OtherProjects />
						<OtherProjects />
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

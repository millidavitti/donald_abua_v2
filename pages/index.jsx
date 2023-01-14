/* eslint-disable @next/next/no-img-element */
import Section from "../components/Section";
import Container from "../components/Container";
import home from "../styles/Home.module.css";
import SectionHeader from "../components/SectionHeader";
export default function Home() {
	return (
		<>
			{/* Hero Section */}
			<Section className={home.heroSection}>
				<Container className={home.heroContainer}>
					<h1>Web porfolio</h1>
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

					<button>Check out my blog!</button>
				</Container>
			</Section>
			{/* About ME */}
			<Section className={home.aboutSection}>
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
			<Section>
				<Container>
					<SectionHeader pos={"02"} heading={"Where I've worked"} />
				</Container>
			</Section>
		</>
	);
}

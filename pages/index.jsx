/* eslint-disable @next/next/no-img-element */
import Section from "../components/Section";
import Container from "../components/Container";
import home from "../styles/Home.module.css";
import Experience from "../components/Experience";
import Aboutme from "../components/Aboutme";
import FeatureProjects from "../components/FeatureProjects";
import OtherProjects from "../components/OtherProjects";
import LandingPageTemplates from "../components/LandingPageTemplates";

// Controllers
import aboutmeController from "../serverless/controllers/aboutme.controller";
import experienceController from "../serverless/controllers/experience.controller";
import featureProjectsController from "../serverless/controllers/featureProjects.controller";
import otherProjectsController from "../serverless/controllers/otherProjects.controller";
import landingPageTemplatesController from "../serverless/controllers/landingPageTemplates.controller";

export default function Home({
	aboutmeData,
	experienceData,
	featureProjectData,
	otherProjectData,
	landingPageTemplateData,
}) {
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
							I&apos;m a software engineer with two years of experience,
							specializing in web development with a strong background in Git,
							Shell, React, Next.js, JavaScript, CI/CD, collaboration, HTML, and
							CSS. Currently, I&apos;m focused on building accessible,
							management-centered products at Flexisaf.
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
			<Aboutme aboutmeData={aboutmeData} />
			{/* where I've worked */}
			<Experience experienceData={experienceData} />
			{/* Notable Projects */}
			<FeatureProjects featureProjectData={featureProjectData} />
			{/* Other Noteable Projects */}
			<OtherProjects otherProjectData={otherProjectData} />{" "}
			{/* Other Noteable Projects */}
			<LandingPageTemplates landingPageTemplateData={landingPageTemplateData} />
			{/* What next */}
			<Section id='contact'>
				<Container className={home.contact}>
					<p>04. What&apos;s next?</p>
					<article>
						<h2>Get In touch</h2>
						<p>
							I’m currently looking for new opportunities, my inbox is always
							open. Whether you have a question or just want to say hi, I’ll try
							my best to get back to you!
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

export async function getServerSideProps() {
	const aboutmeData = await aboutmeController();
	const experienceData = await experienceController();
	const featureProjectData = await featureProjectsController();
	const otherProjectData = await otherProjectsController();
	const landingPageTemplateData = await landingPageTemplatesController();

	return {
		props: {
			aboutmeData,
			experienceData,
			featureProjectData,
			otherProjectData,
			landingPageTemplateData,
		},
	};
}

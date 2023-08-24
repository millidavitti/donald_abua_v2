import React, { useEffect } from "react";

export default function LandingPage({ url }) {
	useEffect(() => {
		document.body.style.overflow = "hidden";
		document.body.style.paddingBottom = "30px";
		document.querySelector(".desk-menu").style.display = "none";

		return () => {
			document.body.style.overflow = "auto";
			document.body.style.paddingBottom = "initial";
			document.querySelector(".desk-menu").style.display = "initial";
		};
	}, []);

	return (
		<>
			<div style={{ height: "100vh" }}>
				<h1>Freelance Website</h1>
				<iframe
					width='100%'
					height='100%'
					style={{ marginTop: "30px", marginBottom: "200px" }}
					src={url}
					title='Website'
					className='iframe-container'
				></iframe>
			</div>
		</>
	);
}

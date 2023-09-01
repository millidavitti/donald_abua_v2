import React, { useEffect } from "react";

export default function LandingPage({ url }) {
	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	return (
		<>
			<iframe
				width='100%'
				height='100%'
				src={url}
				title='Website'
				className='iframe-container'
			></iframe>
		</>
	);
}

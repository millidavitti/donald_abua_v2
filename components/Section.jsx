import React from "react";

export default function Section({ children, className, id }) {
	return (
		<section className={`section ${className}`} id={id}>
			{children}
		</section>
	);
}

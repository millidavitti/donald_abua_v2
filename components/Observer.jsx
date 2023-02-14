import React, { cloneElement, isValidElement, useEffect, useRef } from "react";

export default function Observer({
	children,
	elem,
	parent,
	classList,
	config,
}) {
	// About Me
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				if (entry.isIntersecting) {
					elem?.current.classList.add(classList);
				} else elem?.current.classList.remove(classList);
			},
			{
				root: null,
				threshold: config?.threshold,
			},
		);
		parent?.current && observer.observe(parent.current);
	});
	return <div>{children}</div>;
}

function childrenProps(children, props) {
	if (Array.isArray(children)) return addPropsToReactElement(children, props);
	return children.map((childElement) =>
		addPropsToReactElement(childElement, props),
	);
	function addPropsToReactElement(element, props) {
		if (isValidElement(element)) return cloneElement(element, props);
		return element;
	}
}

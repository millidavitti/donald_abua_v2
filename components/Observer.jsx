import React, { cloneElement, isValidElement, useEffect } from "react";

export default function Observer({
	children,
	elem,
	parent,
	classList,
	config,
}) {
	// About Me
	useEffect(() => {
		const view = window.innerWidth;
		const root = parent.current;
		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				if (Array.isArray(elem.current)) {
					for (const el of elem.current) {
						if (entry.isIntersecting) {
							if (el.id == entry.target.id) {
								el.classList.add(classList);
							} else if (
								el.getBoundingClientRect().bottom < 0 ||
								el.getBoundingClientRect().top > view
							) {
								console.log(entry);
								el.classList.remove(classList);
							}
						}
					}
					return;
					// Single Elements
				} else if (entry.isIntersecting) {
					elem?.current.classList.add(classList);
				} else elem?.current.classList.remove(classList);
			},
			{
				root: null,
				threshold: config?.threshold,
			},
		);
		if (Array.isArray(parent.current))
			parent.current.forEach((elem) => observer.observe(elem));
		else parent.current && observer.observe(parent.current);
		return () => {
			if (Array.isArray(root)) root.forEach((elem) => observer.unobserve(elem));
			else root && observer.unobserve(root);
		};
	});
	return <>{children}</>;
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

function isElemVisible(element, view, threshold = 1) {
	// Overflow-y Support Only
	if (threshold < 0 || threshold > 1)
		throw new Error("Input values between 0 and 1");

	const top = element.getBoundingClientRect().top;
	const bottom = element.getBoundingClientRect().bottom;
	const height = element.offsetHeight;
	let ratio;

	if (top < 0) {
		ratio = Math.abs((height + top) / height);
	} else if (bottom > view.clientHeight && top < view.clientHeight)
		ratio = Math.abs((height - (bottom - view.clientHeight)) / height);
	else if (top >= view.clientHeight) ratio = 0;
	else ratio = 1;

	if (
		(top < 0 || bottom < 0 || bottom > view.clientHeight) &&
		ratio < threshold
	)
		return { isVisible: false, ratio };
	else return { isVisible: true, ratio };
}

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
		const view = document.documentElement;
		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				if (Array.isArray(elem.current)) {
					console.log("IS an array");
					for (const el of elem.current) {
						if (entry.isIntersecting && el.id == entry.target.id) {
							console.log(entry);
							el.classList.add(classList);
						} else if (
							entry.boundingClientRect.bottom < 0 ||
							entry.boundingClientRect.top > view.clientHeight
						)
							el.classList.remove(classList);
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

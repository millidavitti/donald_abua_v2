import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children, portal }) => {
	const ref = useRef(null);
	const [mounted, setMounted] = useState(false);
	console.log("first");

	useEffect(() => {
		ref.current = document.querySelector(portal);
		setMounted(true);
	}, [portal]);

	return mounted ? createPortal(children, ref.current) : null;
};

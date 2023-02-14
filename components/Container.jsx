import React from "react";
import { forwardRef } from "react";

export default forwardRef(function Container({ children, className }, ref) {
	return (
		<div className={`container ${className}`} ref={ref}>
			{children}
		</div>
	);
});

import React from "react";

export default function Frame({ children }) {
	return <div style={{ overflow: "hidden" }}>{children}</div>;
}

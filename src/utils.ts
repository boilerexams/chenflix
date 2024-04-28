import { useEffect } from "react";
import posthog from "posthog-js";

export function useTitle(title: string) {
	useEffect(() => {
		setTitle(title);
		if (!import.meta.env.DEV) {
			posthog.capture("$pageview");
		}
	}, [title]);
}

export function setTitle(title: string) {
	document.title = `${import.meta.env.DEV ? "[DEV]" : ""} ${title}`;
}

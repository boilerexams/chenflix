import ReactDOM from "react-dom/client";
import Home from "~/pages/index.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/shared/Layout.tsx";
import Course from "./pages/courses/Course.tsx";
import { courses } from "./coursedata/courses.ts";
import posthog from "posthog-js";

posthog.init(import.meta.env.VITE_POSTHOG_API_KEY, {
	api_host: "https://us.i.posthog.com",
	autocapture: false,
	capture_pageview: false,
});

const router = createBrowserRouter([
	{
		children: [
			{
				path: "/",
				element: <Home />,
				errorElement: <div>Page not found</div>,
			},
			{
				path: "/",
				element: <Layout />,
				errorElement: <div>Layout not found!</div>,
				children: [
					{
						path: "/courses/:abbreviation",
						element: <Course />,
						loader: ({ params }) => {
							const found: Course | undefined = courses.find(
								(course) => course.abbreviation === params.abbreviation,
							);
							return found ?? null;
						},
						errorElement: <div>Course not found</div>,
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />,
);

import { useLoaderData } from "react-router-dom";
import CourseEvent from "../../components/CourseEvent";
import { useState } from "react";

export default function Course() {
	const course: Course = useLoaderData() as Course;
	const [search, setSearch] = useState("");

	return (
		<div>
			<h1 className="text-center text-3xl font-bold">{course.name}</h1>
			<h2 className="text-center text-stone-400">{course.semester}</h2>
			<div className="mt-4 flex w-full flex-row justify-center px-4">
				<input
					className="w-full max-w-4xl rounded-md bg-stone-900 text-stone-200 transition duration-100 ease-in focus:border-transparent focus:ring-2 focus:ring-red-500"
					type="text"
					placeholder="Search lectures"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>

			<div className="relative mx-auto flex h-auto max-w-4xl flex-col items-center gap-3 p-4">
				{course.events.map(
					(event) =>
						JSON.stringify(event)
							.toLocaleLowerCase()
							.includes(search.toLocaleLowerCase()) && (
							<CourseEvent
								key={`${event.date} ${event.description}`}
								event={event}
							/>
						),
				)}
			</div>
		</div>
	);
}

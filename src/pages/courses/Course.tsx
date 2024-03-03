import { useLoaderData } from "react-router-dom";
import CourseEvent from "../../components/CourseEvent";

export default function Course() {
	const course: Course = useLoaderData() as Course;
	return (
		<div>
			<p className="text-center text-3xl font-bold">{course.name}</p>
			<div className="relative mx-auto flex h-auto max-w-4xl flex-col items-center gap-3 p-4">
				{course.events.map((event) => (
					<CourseEvent
						key={`${event.date} ${event.description}`}
						event={event}
					/>
				))}
			</div>
		</div>
	);
}

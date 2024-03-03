import CoursePreview from "../components/CoursePreview";
import { courses } from "../coursedata/courses";

export default function Home() {
	return (
		<div>
			<div className="mx-auto grid w-full grid-cols-1 gap-10 md:grid-cols-2">
				{courses.map((course) => (
					<CoursePreview key={course.id} course={course} />
				))}
			</div>
		</div>
	);
}

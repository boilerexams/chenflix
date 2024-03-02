import CoursePreview from "../components/CoursePreview";
import { courses } from "../coursedata/courses";

function App() {
	return (
		<div>
			<div className="canvas-container"></div>
			{/* <div className="mx-auto grid w-full grid-cols-1 gap-10 md:grid-cols-2">
				{courses.map((course) => (
					<CoursePreview course={course} />
				))}
			</div> */}
			
			
		</div>
	);
}

export default App;

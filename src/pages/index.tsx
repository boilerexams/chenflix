import Footer from "~/components/Footer";
import CoursePreview from "../components/CoursePreview";
import { courses } from "../coursedata/courses";
import Capybara from "../three/capy";

export default function Home() {
	return (
		<div className="bg-black">
			<div className="min-h-screen bg-black text-white">
				{/* <Capybara /> */}
				<img
					className="absolute left-1/2 top-4 w-40 -translate-x-1/2"
					src="images/chenflix.png"
					alt="Chenflix"
				/>
				<div className="mx-auto grid w-full grid-cols-1 gap-5 gap-x-48 overflow-auto pt-24 sm:grid-cols-2">
					{courses.map((course) => (
						<CoursePreview key={course.id} course={course} />
					))}
				</div>
				<div className="w-full p-4 pt-32 lg:absolute bg-black">
					<Footer />
				</div>
			</div>
		</div>
	);
}

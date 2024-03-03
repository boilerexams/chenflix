import { Link, Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<div className="min-h-screen bg-black p-4 text-white">
			<div className="mx-auto w-fit">
				<Link to="/">
					<img src="/images/chenflix.png" alt="Chenflix" className="w-40" />
				</Link>
			</div>
			<div className="mx-auto mt-8 w-full max-w-7xl">
				<Outlet />
			</div>
		</div>
	);
}

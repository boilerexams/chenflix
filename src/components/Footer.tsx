export default function Footer() {
	return (
		<footer className="z-20 mt-10 w-full pt-6 text-center text-stone-300">
			<div className="flex items-center justify-center p-1 text-xl">
				<a
					href="https://www.math.purdue.edu/~chenjk/"
					className="mb-1 font-semibold ease-in hover:opacity-80"
				>
					Chenflix Original
				</a>
			</div>
			<div className="flex items-center justify-center pt-1">
				<p className="mb-1">A</p>
				<a target="_blank" href="https://www.boilerexams.com/">
					<img
						src="/footer/BoilerExamsLogoWHITE.png"
						alt="Made by Boilerexams"
						className="w-28 p-2"
					/>
				</a>
				<p className="mb-1">Project</p>
			</div>
			<div className="flex items-center justify-center pt-3">
				<a
					target="_blank"
					href="https://github.com/boilerexams/chenflix"
					className="mb-3"
				>
					<img src="/footer/github-mark-white.png" className="w-8" />
				</a>
			</div>
			<div className="flex items-center justify-center pt-2">
				Support:
				<a className="ml-1" href="mailto:chenjk@purdue.edu">
					chenjk@purdue.edu
				</a>
			</div>
			<div>
				<p className="mb-3 p-5 text-sm ">Copyright &copy; 2024 Chenflix</p>
			</div>
		</footer>
	);
}

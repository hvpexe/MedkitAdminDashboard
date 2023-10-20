function About() {
	return (
		<div>
			<div className="max-w-screen-xl px-8 mx-auto flex flex-col gap-12 lg:flex-row items-start items-center pt-20 pb-10">
				{/* <!--Left Col--> */}
				<div className="flex flex-col w-full lg:w-9/24 justify-center items-start text-center">
					<img src="about1.png" alt=""/>
				</div>
				{/* <!--Right Col--> */}
				<div className="h-full lg:w-15/24">
					<p className="text-lg font-medium w-5/6">
						We are a group of FPT University students who have developed an
						innovative solution called "Dr. Med" aimed at providing medical
						benefits to everyone.
					</p>
				</div>
			</div>
			<div className="max-w-screen-xl px-8 mx-auto flex flex-col gap-12 lg:flex-row items-start items-center pb-20 ">
				<div className="h-full lg:w-15/24">
					<p className="text-lg font-medium w-5/6 text-right ml-auto mr-0">
						Our goal is to make healthcare more accessible and empower
						individuals to take control of their own well-being.
					</p>
				</div>
				<div className=" flex flex-col w-full lg:w-9/24 justify-center items-start text-center">
					<img src="about2.png" alt=""/>
				</div>
			</div>
		</div>
	);
}
export default About

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Download() {
	return (
		<div>
			<div className="max-w-screen-xl px-8 mx-auto flex justify-center flex-col gap-12 lg:flex-row items-center pt-20 pb-10">
				<div className="mockup-phone">
					<div className="camera"></div>
					<div className="display">
						<div
							className="artboard artboard-demo phone-1 bg-gradient-to-br from-rose-300 to-stone-300"
						>
							<div class="mt-4 flex items-center justify-center ">
								<a
									href="https://drive.google.com/drive/mobile/folders/117h5BapGmXTEKFeXxiCLJLuf83iMDhnx?sort=13&direction=a&fbclid=IwAR2eK7OjserYigcOv0j4X3cBKByRyV6u0m8CZR4ZNfkhCUTidvZzUcUZyig_aem_Abdm-5jaqDg8rtuvGg4cW3Eq3eZxonsXOcN8YN7lPPu7MvyrNOxLfDlAYar5h0g256s"
									class="py-4 px-6  bg-red-500 rounded-lg text-white rounded-fulltransition duration-300"
								>
									Download App
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Download;

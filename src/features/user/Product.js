import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const INITIAL_ORDER_OBJ = {
	name: "",
	phone: "",
	address: "",
	payment: 0,
	quantity: 0,
};

function Product() {
	const [amount, setAmount] = useState(1);

	const handleChangeAmount = (e) => {
		setAmount(e.target.value);
	};

	useEffect(() => {
		localStorage.setItem("data", amount);
	}, [amount]);

	return (
		<div>
			<div className="max-w-screen-xl px-8 mx-auto flex flex-col gap-8 lg:flex-row items-start py-12">
				{/* <!--Left Col--> */}
				<div className="flex flex-col w-full lg:w-9/24 justify-center items-start text-center">
					<img src="product1.png" alt="product" />
					<div className="flex justify-center gap-4 mt-8 w-full">
						<div>
							<img src="product2.png" className="" alt="product" />
						</div>
						<div>
							<img src="product3.png" className="" alt="product" />
						</div>
						<div>
							<img src="product4.png" className="" alt="product" />
						</div>
					</div>
				</div>
				{/* <!--Right Col--> */}
				<div className="w-full lg:w-15/24 relative ">
					<h1 className="text-5xl font-semibold mt-6">Family’s Medical Kit</h1>
					<div className="text-4xl font-medium mt-6 text-purple-900">
						<span className="border-t-4 border-purple-900">150.000</span>
						<span>VND</span>
					</div>
					<div className="text-lg mt-4">
						<p>
							This box contain: 1 Paracetamol box, 1 Oresol box, 1 Pantenol
							cream, 1 Betadine, 1 eugika, 1 decolgen, 1efferalgan, 3 bandages,
							Medicated Oil, some medical instruments.
						</p>
						<p>Weight: 1.5kg</p>
						<p>Area: 60cm * 30cm * 30cm</p>
						<p>
							If you need any changes made to the box, please chat with us
							before making a purchase.
						</p>
					</div>
					<div className="mt-4 text-2xl gap-4">
						<span className="">Quantity: </span>
						<input
							className="ml-2 text-center"
							type="number"
							value={amount}
							onChange={handleChangeAmount}
							style={{ width: "50px" }}
							min="1"
						/>
					</div>
					<div className="flex justify-center mt-8">
						<Link
							to={"/cart"}
							className="bg-red-500 text-white h-14 w-52 text-xl font-semibold rounded-xl text-center flex justify-center flex-col"
						>
							Add to cart
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Product;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputText from "../../components/Input/InputText";
import TextAreaInput from "../../components/Input/TextAreaInput";
import ErrorText from "../../components/Typography/ErrorText";

const INITIAL_ORDER_OBJ = {
	name: "",
	phone: "",
	address: "",
	payment: 0,
	quantity: 0,
};

function Cart() {
	var amount = localStorage.getItem("data");

	let navigate = useNavigate();
	// useEffect(() => {
	// 	console.log("reload");
	// 	if (isNaN(amount) || amount <= 0) {
	// 		return navigate("/home");
	// 	}
	// }, [amount]);

	var total = amount * 150000;
	const totalFormat = total.toLocaleString("it-IT", {
		style: "currency",
		currency: "VND",
	});

	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [order, setOrder] = useState(INITIAL_ORDER_OBJ);

	const createNewOrder = () => {
		if (order.name.trim() === "") return setErrorMessage("Name is required!");
		else if (order.phone.trim() === "")
			return setErrorMessage("Phone is required!");
		else if (order.address.trim() === "")
			return setErrorMessage("Address is required!");
		else {
			let newOrder = {
				name: order.name,
				phone: order.phone,
				address: order.address,
				payment: order.payment,
				quantity: amount,
			};
			console.log(newOrder);
		}
	};

	const updateFormValue = ({ updateType, value }) => {
		setErrorMessage("");
		setOrder({ ...order, [updateType]: value });
	};

	return (
		<div className="bg-mintcream">
			<div className="max-w-screen-xl px-8 mx-auto flex flex-col gap-8 lg:flex-row items-start pt-16 pb-20">
				{/* <!--Left Col--> */}
				<div className="flex flex-col w-full lg:w-9/24 justify-center items-start text-center">
					<h1 className="text-4xl font-bold">Cart</h1>
					<div>
						<img
							className="mt-4"
							src="product1.png"
							width="500"
							height="600"
							alt=""
						/>
						<div className="mt-4 text-2xl flex justify-center w-full">
							<span className="">Quantity: </span>
							<span className="ml-2">{amount}</span>
						</div>
					</div>
				</div>
				{/* <!--Right Col--> */}
				<div className="w-full lg:w-15/24 text-left">
					<h1 className="text-3xl font-medium text-center">Information</h1>

					<div className="w-7/12 mx-auto ">
						<InputText
							type="text"
							defaultValue={order.name}
							updateType="name"
							containerStyle=""
							labelTitle="Name"
							updateFormValue={updateFormValue}
							placeholder="Your name"
						/>
						<InputText
							type="text"
							defaultValue={order.phone}
							updateType="phone"
							containerStyle="mt-4"
							labelTitle="Phone"
							updateFormValue={updateFormValue}
							placeholder="Your phone"
						/>
						<TextAreaInput
							type="text"
							defaultValue={order.address}
							updateType="address"
							containerStyle="mt-4"
							labelTitle="Address"
							updateFormValue={updateFormValue}
							placeholder="Your address"
						/>
						<label
							className="block text-md font-medium mb-1 mt-4"
							htmlFor="payment"
						>
							Payment
						</label>
						<input
							className="h-4 w-4"
							type="radio"
							id="COD"
							name="payment"
							value="COD"
							checked
						/>
						<span className="text-lg ml-1">COD</span> <br />
						<div className="text-2xl font-medium mt-3 text-purple-900">
							Total: {totalFormat}
						</div>
						<button
							className="bg-red-500 text-white h-14 w-52 text-xl font-semibold rounded-xl text-center mt-4"
							onClick={createNewOrder}
						>
							Order
						</button>
						<ErrorText styleClass="text-xl font-semibold mt-4">
							{errorMessage}
						</ErrorText>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;

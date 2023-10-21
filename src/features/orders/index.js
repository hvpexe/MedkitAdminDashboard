import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { RECENT_TRANSACTIONS } from "../../utils/dummyData";
import FunnelIcon from "@heroicons/react/24/outline/FunnelIcon";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import SearchBar from "../../components/Input/SearchBar";
import { getOrdersContent } from "./ordersSlice";

const TopSideButtons = ({ applySearch }) => {
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		if (searchText == "") {
		} else {
			applySearch(searchText);
		}
	}, [searchText]);

	return (
		<div className="inline-block float-right">
			<SearchBar
				searchText={searchText}
				styleClass="mr-4"
				setSearchText={setSearchText}
			/>
			<div className="dropdown dropdown-bottom dropdown-end">
				<label tabIndex={0} className="btn btn-sm btn-outline">
					<FunnelIcon className="w-5 mr-2" />
					Filter
				</label>
				<ul
					tabIndex={0}
					className="dropdown-content menu p-2 text-sm shadow bg-base-100 rounded-box w-52"
				>
					<div className="divider mt-0 mb-0"></div>
				</ul>
			</div>
		</div>
	);
};

function Orders() {
	const { orders } = useSelector((state) => state.order);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getOrdersContent());
	}, []);

	// const [orders, setOrder] = useState(orders1);

	// Search according to name
	// const applySearch = (value) => {
	//   let filteredOrders = RECENT_TRANSACTIONS.filter((t) => {
	//     return (
	//       t.email.toLowerCase().includes(value.toLowerCase()) ||
	//       t.email.toLowerCase().includes(value.toLowerCase())
	//     );
	//   });
	//   setOrder(filteredOrders);
	// };

	const getPayment = (index) => {
		if (index === 0) return <div className="badge badge-primary">COD</div>;
		else return <div className="badge badge-accent">Card</div>;
	};
	const getStatus = (index) => {
		if (index === 0) return <div className="badge badge-success">Paid</div>;
		else return <div className="badge badge-info">Not Paid</div>;
	};

	return (
		<>
			<TitleCard
				title="Recent Orders"
				topMargin="mt-2"
				// TopSideButtons={
				//   <TopSideButtons
				//     applySearch={applySearch}
				//     // applyFilter={applyFilter}
				//     // removeFilter={removeFilter}
				//   />
				// }
			>
				{/* Team Member list in table format loaded constant */}
				<div className="overflow-x-auto w-full">
					<table className="table w-full">
						<thead>
							<tr>
								<th>Order ID</th>
								<th>Name</th>
								<th>Phone Number</th>
								<th>Address</th>
								<th>Quantity</th>
								<th>Total</th>
								<th>Order Date</th>
								<th>Payment</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{orders.map((l, k) => {
								return (
									<tr key={k}>
										<td className="min-w-[3rem] max-w-[10rem] whitespace-normal">
											{l.id}
										</td>
										<td>
											<div className="font-bold">{l.custormerName}</div>
										</td>
										<td>{l.phoneNumber}</td>
										<td className="min-w-[10rem] max-w-[14rem] whitespace-normal">{l.address}</td>
										<td>{l.quantity}</td>
										<td className="font-bold">{l.total} VND</td>
										<td>{moment(l.sellDate).format("YYYY/MM/DD hh:mm:ss")}</td>
										<td>{getPayment(l.payment)}</td>
										<td>{getStatus(l.status)}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</TitleCard>
		</>
	);
}

export default Orders;

import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import axios from "axios";

const BILLS = [
	{
		invoiceNo: "#4567",
		amount: "23,989",
		description: "Product usages",
		status: "Pending",
		generatedOn: moment(new Date())
			.add(-30 * 1, "days")
			.format("DD MMM YYYY"),
		paidOn: "-",
	},

	{
		invoiceNo: "#4523",
		amount: "34,989",
		description: "Product usages",
		status: "Pending",
		generatedOn: moment(new Date())
			.add(-30 * 2, "days")
			.format("DD MMM YYYY"),
		paidOn: "-",
	},

	{
		invoiceNo: "#4453",
		amount: "39,989",
		description: "Product usages",
		status: "Paid",
		generatedOn: moment(new Date())
			.add(-30 * 3, "days")
			.format("DD MMM YYYY"),
		paidOn: moment(new Date())
			.add(-24 * 2, "days")
			.format("DD MMM YYYY"),
	},

	{
		invoiceNo: "#4359",
		amount: "28,927",
		description: "Product usages",
		status: "Paid",
		generatedOn: moment(new Date())
			.add(-30 * 4, "days")
			.format("DD MMM YYYY"),
		paidOn: moment(new Date())
			.add(-24 * 3, "days")
			.format("DD MMM YYYY"),
	},

	{
		invoiceNo: "#3359",
		amount: "28,927",
		description: "Product usages",
		status: "Paid",
		generatedOn: moment(new Date())
			.add(-30 * 5, "days")
			.format("DD MMM YYYY"),
		paidOn: moment(new Date())
			.add(-24 * 4, "days")
			.format("DD MMM YYYY"),
	},

	{
		invoiceNo: "#3367",
		amount: "28,927",
		description: "Product usages",
		status: "Paid",
		generatedOn: moment(new Date())
			.add(-30 * 6, "days")
			.format("DD MMM YYYY"),
		paidOn: moment(new Date())
			.add(-24 * 5, "days")
			.format("DD MMM YYYY"),
	},

	{
		invoiceNo: "#3359",
		amount: "28,927",
		description: "Product usages",
		status: "Paid",
		generatedOn: moment(new Date())
			.add(-30 * 7, "days")
			.format("DD MMM YYYY"),
		paidOn: moment(new Date())
			.add(-24 * 6, "days")
			.format("DD MMM YYYY"),
	},

	{
		invoiceNo: "#2359",
		amount: "28,927",
		description: "Product usages",
		status: "Paid",
		generatedOn: moment(new Date())
			.add(-30 * 8, "days")
			.format("DD MMM YYYY"),
		paidOn: moment(new Date())
			.add(-24 * 7, "days")
			.format("DD MMM YYYY"),
	},
];

const getOriginalMedicineContent = async () => {
	const response = await axios.get("api/OriginalMedicine", {});
	return response;
};

function OriginalMedicine() {
	const [originalMedicines, setOriginalMedicines] = useState();

    useEffect(() => {
        // kiểm tra xem originMedicine đã đc thiết lập chưa
        if (originalMedicines === undefined) {
            getOriginalMedicineContent()
            .then((data) => {
                setOriginalMedicines(data.data);
                console.log("Dữ liệu từ API:", originalMedicines);
            })
            .catch((error) => {
                console.error("Lỗi trong quá trình lấy dữ liệu:", error);
            });
        }
    }, [originalMedicines]);

	const getStatus = (status) => {
		if (status === 1)
			return <div className="badge badge-success">Active</div>;
		else return <div className="badge badge-ghost">Deactive</div>;
	};

	return (
		<>
			<TitleCard title="Original Medicine" topMargin="mt-2">
				{/* Invoice list in table format loaded constant */}
				<div className="overflow-x-auto w-full">
					<table className="table w-full">
						<thead>
							<tr>
								<th>Medicine ID</th>
								<th>Name</th>
								<th>Use</th>
								<th>Dosage And Administration</th>
								<th>SideEffects And Interactions</th>
								<th>Storage And Expiry</th>
                                <th>Number</th>
                                <th>Unit</th>
                                <th>Note</th>
                                <th>Status</th>
                                <th></th>
							</tr>
						</thead>
						<tbody>
							{originalMedicines != null ? (
								originalMedicines.map((l, k) => {
									return (
										<tr key={k}>
											<td className="min-w-[3rem] max-w-[12rem] whitespace-normal">{l.id}</td>
											<td className="min-w-[10em] max-w-[18rem] whitespace-normal">{l.name}</td>
											<td className="min-w-[12rem] max-w-[25rem] whitespace-normal">{l.uses}</td>
											<td className="min-w-[10rem] max-w-[20rem] whitespace-normal">{l.dosageAndAdministration}</td>
											<td className="min-w-[14rem] max-w-[30rem] whitespace-normal">{l.sideEffectsAndInteractions}</td>
											<td className="min-w-[14rem] max-w-[30rem] whitespace-normal">{l.storageAndExpiry}</td>
											<td>{l.numbers}</td>
											<td>{l.unit}</td>
											<td className="min-w-[8rem] max-w-[16rem] whitespace-normal">{l.notes}</td>
											<td>{getStatus(l.medicineStatus)}</td>
										</tr>
									);
								})
							) : (
								<div>Empty</div>
							)}
						</tbody>
					</table>
				</div>
			</TitleCard>
		</>
	);
}

export default OriginalMedicine;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { openModal } from "../common/modalSlice";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import {
	CONFIRMATION_MODAL_CLOSE_TYPES,
	MODAL_BODY_TYPES,
} from "../../utils/globalConstantUtil";
import { getOriginalMedicinesContent } from "./originalMedicinesSlice";

const TopSideButtons = () => {
	const dispatch = useDispatch();

	const openAddNewOriginalMedicineModal = () => {
		dispatch(
			openModal({
				title: "Add New Original Medicine",
				bodyType: MODAL_BODY_TYPES.MEDICINE_ADD_NEW,
			})
		);
	};

	return (
		<div className="inline-block float-right">
			<button
				className="btn px-6 btn-sm normal-case btn-primary"
				onClick={() => openAddNewOriginalMedicineModal()}
			>
				Add New
			</button>
		</div>
	);
};

function OriginalMedicine() {
	const { originalMedicines } = useSelector((state) => state.originalMedicine);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getOriginalMedicinesContent());
	}, []);

	const getStatus = (status) => {
		if (status === 1) return <div className="badge badge-success">Active</div>;
		else return <div className="badge badge-ghost">Deactive</div>;
	};

	const deleteCurrentOriginalMedicine = (index) => {
		dispatch(
			openModal({
				title: "Confirmation",
				bodyType: MODAL_BODY_TYPES.CONFIRMATION,
				extraObject: {
					message: `Are you sure you want to delete this original medicine?`,
					type: CONFIRMATION_MODAL_CLOSE_TYPES.MEDICINE_DELETE,
					index,
				},
			})
		);
	};

	return (
		<>
			<TitleCard
				title="Original Medicine"
				topMargin="mt-2"
				TopSideButtons={<TopSideButtons />}
			>
				{/* Invoice list in table format loaded constant */}
				<div className="overflow-x-auto w-full">
					<table className="table w-full">
						<thead>
							<tr>
								<th>Medicine ID</th>
								<th>Name</th>
								<th>Use</th>
								<th className="min-w-[10rem] max-w-[20rem] whitespace-normal">
									Dosage And Administration
								</th>
								<th className="min-w-[10rem] max-w-[20rem] whitespace-normal">
									SideEffects And Interactions
								</th>
								<th className="min-w-[10rem] max-w-[20rem] whitespace-normal">
									Storage And Expiry
								</th>
								<th>Number</th>
								<th className="min-w-0 whitespace-normal">Unit</th>
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
											<td className="min-w-[3rem] max-w-[10rem] whitespace-normal">
												{l.id}
											</td>
											<td className="min-w-[8em] max-w-[18rem] whitespace-normal">
												{l.name}
											</td>
											<td className="min-w-[12rem] max-w-[25rem] whitespace-normal">
												{l.uses}
											</td>
											<td className="min-w-[10rem] max-w-[20rem] whitespace-normal">
												{l.dosageAndAdministration}
											</td>
											<td className="min-w-[12rem] max-w-[20rem] whitespace-normal">
												{l.sideEffectsAndInteractions}
											</td>
											<td className="min-w-[12rem] max-w-[20rem] whitespace-normal">
												{l.storageAndExpiry}
											</td>
											<td>{l.numbers}</td>
											<td className="min-w-0 whitespace-normal">{l.unit}</td>
											<td className="min-w-[8rem] max-w-[16rem] whitespace-normal">
												{l.notes}
											</td>
											<td>{getStatus(l.medicineStatus)}</td>
											<td>
												<button
													className="btn btn-square btn-ghost"
													onClick={() => deleteCurrentOriginalMedicine(l.id)}
												>
													<TrashIcon className="w-5" />
												</button>
											</td>
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

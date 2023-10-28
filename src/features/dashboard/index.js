import DashboardStats from "./components/DashboardStats";
import AmountStats from "./components/AmountStats";
import PageStats from "./components/PageStats";

import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
import UserChannels from "./components/UserChannels";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import { useDispatch } from "react-redux";
import { showNotification } from "../common/headerSlice";
import DoughnutChart from "./components/DoughnutChart";
import { useEffect, useState } from "react";
import axios from "axios";

const STATS_DATA = [
	{
		title: "Users",
		value: "1",
		icon: <UserGroupIcon className="w-8 h-8" />,
		description: "",
	},
	{
		title: "Total Sales",
		value: "150.000 VND",
		icon: <CreditCardIcon className="w-8 h-8" />,
		description: "",
	},
	{
		title: "Orders",
		value: "2",
		icon: <CircleStackIcon className="w-8 h-8" />,
		description: "",
	},
	{
		title: "Active Users",
		value: "1",
		icon: <UsersIcon className="w-8 h-8" />,
		description: "",
	},
	{
		title: "Users in this month",
		value: "1",
		icon: <UserGroupIcon className="w-8 h-8" />,
		description: "",
	},
	{
		title: "Total Sales in this month",
		value: "150.000 VND",
		icon: <CreditCardIcon className="w-8 h-8" />,
		description: "",
	},
	{
		title: "Orders in this month",
		value: "2",
		icon: <CircleStackIcon className="w-8 h-8" />,
		description: "",
	},
];

function Dashboard() {
	const dispatch = useDispatch();
	const [statsData, setStatsData] = useState(STATS_DATA);
	
	useEffect(() => {
		const fetchData = async () => { 
		await axios
			.get("api/Order/dashboard")
			.then((res) => {
				if (res.status === 200) {
					let newData = statsData;
					newData[0].value = res.data.numberofUser;
					newData[1].value = `${res.data.price} VND`;
					newData[2].value = res.data.numberofOrder;
					newData[3].value = res.data.numberofActiveUser;
					newData[4].value = res.data.numberofUser;
					newData[5].value = `${res.data.price} VND`;
					newData[6].value = res.data.numberofOrder;
					setStatsData(newData);
				} else {
				}
			})
		}
		fetchData().catch(err => console.log(err))
	}, []);


	return (
		<>
			{/** ---------------------- Different stats content 1 ------------------------- */}
			<div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
				{statsData.map((d, k) => {
					return <DashboardStats key={k} {...d} colorIndex={k} />;
				})}	
			</div>

			{/** ---------------------- Different charts ------------------------- */}
			<div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
				<LineChart />
				<BarChart />
			</div>

			{/** ---------------------- Different stats content 2 ------------------------- */}

			<div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
				<AmountStats />
				<PageStats />
			</div>

			{/** ---------------------- User source channels table  ------------------------- */}

			<div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
				<UserChannels />
				<DoughnutChart />
			</div>
		</>
	);
}

export default Dashboard;

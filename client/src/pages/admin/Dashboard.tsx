import {Route} from "@tanstack/react-location";
import {Helmet} from "react-helmet-async";
import {FiHome} from "react-icons/fi";
import React, {VFC, useEffect} from "react";
import axios from "axios";

import {RouteGenerics} from "../index";

const Page: VFC = () => {
	useEffect(() => {
		axios.get("/index.php/api").then(response => console.log(response.data)).catch(console.error);
	});
	return <>
		<Helmet>
			<title>Dashboard - Blitz CI3</title>
		</Helmet>
		<p>Dashboard</p>
	</>;
};

const route: Route<RouteGenerics> = {
	path: "/",
	element: <Page />,
	meta: {
		name: "Dashboard",
		icon: FiHome,
	},
};

export default route;

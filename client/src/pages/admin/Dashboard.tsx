import {Route} from "@tanstack/react-location";
import {Helmet} from "react-helmet-async";
import {FiHome} from "react-icons/fi";
import React, {useEffect, VFC} from "react";

import {RouteGenerics} from "../index";
import {client} from "utils";

const Page: VFC = () => {
	useEffect(() => {
		client.get("/").then(response => console.log(response.data)).catch(console.error);
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

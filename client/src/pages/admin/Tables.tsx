import {Route} from "@tanstack/react-location";
import {Helmet} from "react-helmet-async";
import {FiDatabase} from "react-icons/fi";
import React, {VFC} from "react";

import {RouteGenerics} from "../index";

const Page: VFC = () => {
	return <>
		<Helmet>
			<title>Tables - Blitz CI3</title>
		</Helmet>
		<p>Tables</p>
	</>;
};

const route: Route<RouteGenerics> = {
	path: "tables",
	element: <Page />,
	meta: {
		name: "Tables",
		icon: FiDatabase,
	},
};

export default route;

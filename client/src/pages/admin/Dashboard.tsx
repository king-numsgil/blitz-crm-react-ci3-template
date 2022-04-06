import {Route} from "@tanstack/react-location";
import {Helmet} from "react-helmet-async";
import {FiHome} from "react-icons/fi";
import React, {useEffect, VFC} from "react";
import {Flex} from "@chakra-ui/react";

import {ProductCard, ShowcaseCard, UserCard} from "components/card";
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
		<Flex direction="row" justifyContent="space-evenly">
			<UserCard />
			<UserCard />
			<UserCard />
			<UserCard />
			<UserCard />
		</Flex>
		<Flex direction="row" justifyContent="space-evenly" py={4}>
			<ShowcaseCard />
			<ProductCard />
		</Flex>
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

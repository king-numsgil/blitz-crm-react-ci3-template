import {Route} from "@tanstack/react-location";
import {Helmet} from "react-helmet-async";
import React, {VFC} from "react";

import {SimpleLogin} from "components/layout";
import {RouteGenerics} from "./index";

const Page: VFC = () => {
	return <>
		<Helmet>
			<title>Login - Blitz CI3</title>
		</Helmet>
		<SimpleLogin onSubmit={data => new Promise<void>(resolve => {
			console.log(data);
			setTimeout(resolve, 5000);
		})} />
	</>;
};

const route: Route<RouteGenerics> = {
	path: "login",
	element: <Page />,
};

export default route;

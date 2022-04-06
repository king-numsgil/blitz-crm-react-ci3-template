import {Outlet, Route} from "@tanstack/react-location";
import React from "react";

import {RouteGenerics} from "../index";
import {SidebarWithHeader} from "components/layout";
import Dashboard from "./Dashboard";
import Tables from "./Tables";

const route: Route<RouteGenerics> = {
	path: "admin",
	element: <SidebarWithHeader><Outlet /></SidebarWithHeader>,
	children: [
		Dashboard,
		Tables,
	],
};

export default route;

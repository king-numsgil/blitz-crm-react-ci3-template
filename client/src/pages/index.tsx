import {MakeGenerics, Navigate, Route} from "@tanstack/react-location";
import {IconType} from "react-icons";
import React from "react";

import Login from "./Login";
import Admin from "./admin";

export type RouteGenerics = MakeGenerics<{
	RouteMeta: {
		name: string;
		icon: IconType;
	}
}>;

export const routes: Array<Route<RouteGenerics>> = [
	{
		path: "/",
		element: <Navigate to="./admin/" replace />,
	},
	Login,
	Admin,
];

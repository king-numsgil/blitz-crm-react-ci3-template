import {FiBell, FiChevronDown, FiMenu} from "react-icons/fi";
import {useNavigate, useLocation} from "@tanstack/react-location";
import React, {FC, ReactText} from "react";
import {IconType} from "react-icons";
import {
	Avatar,
	Box,
	BoxProps,
	CloseButton,
	Drawer,
	DrawerContent,
	Flex,
	FlexProps,
	HStack,
	Icon,
	IconButton,
	Link,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Text,
	useColorModeValue,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";

import {ColorModeToggle} from "./ColorModeButton";
import {RouteGenerics, routes} from "pages";

// from https://chakra-templates.dev/

interface LinkItemProps {
	name: string;
	icon: IconType;
	target: string;
}

function flatenRoutes(): Array<LinkItemProps> {
	const links = new Array<LinkItemProps>();
	const admin = routes.find(route => route.path === "admin");
	admin?.children?.forEach(route => {
		if (route.meta?.name !== undefined && route.meta?.icon !== undefined) {
			let path = route.path;
			if (path === "/") {
				path = "";
			}
			links.push({name: route.meta.name, icon: route.meta.icon, target: `/admin/${path}`});
		}
	});
	return links;
}

export const SidebarWithHeader: FC = ({children}) => {
	const {isOpen, onOpen, onClose} = useDisclosure();
	const links = flatenRoutes();
	return <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
		<SidebarContent
			links={links}
			onClose={onClose}
			display={{base: "none", md: "block"}}
		/>
		<Drawer
			autoFocus={false}
			isOpen={isOpen}
			placement="left"
			onClose={onClose}
			returnFocusOnClose={false}
			onOverlayClick={onClose}
			size="full"
		>
			<DrawerContent>
				<SidebarContent links={links} onClose={onClose} />
			</DrawerContent>
		</Drawer>
		<MobileNav onOpen={onOpen} />
		<Box ml={{base: 0, md: 60}} p={4}>
			{children}
		</Box>
	</Box>;
};

interface SidebarContentProps extends BoxProps {
	links: Array<LinkItemProps>;
	onClose: () => void;
}

const SidebarContent: FC<SidebarContentProps> = ({links, onClose, ...rest}) => {
	return <Box
		transition="0.5s ease"
		bg={useColorModeValue("white", "gray.900")}
		borderRight="1px"
		borderRightColor={useColorModeValue("gray.200", "gray.700")}
		w={{base: "full", md: 60}}
		pos="fixed"
		h="full"
		{...rest}
	>
		<Flex h={20} alignItems="center" mx={8} justifyContent="space-between">
			<Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
				Logo
			</Text>
			<CloseButton display={{base: "flex", md: "none"}} onClick={onClose} />
		</Flex>
		{links.map((link) => (
			<NavItem key={link.name} icon={link.icon} target={link.target}>
				{link.name}
			</NavItem>
		))}
	</Box>;
};

interface NavItemProps extends FlexProps {
	icon: IconType;
	children: ReactText;
	target: string;
}

const NavItem: FC<NavItemProps> = ({icon, children, target, ...rest}) => {
	const navigate = useNavigate<RouteGenerics>();
	const location = useLocation<RouteGenerics>();
	let isActive = location.current.pathname === target;

	return <Link
		href={`#${target}`}
		onClick={e => {
			e.preventDefault();
			navigate({to: target});
		}}
		style={{textDecoration: "none"}}
		_focus={{boxShadow: "none"}}
	>
		<Flex
			align="center"
			p={4}
			mr={4}
			borderRightRadius="lg"
			role="group"
			cursor="pointer"
			bg={isActive ? "cyan.700" : undefined}
			_hover={{
				bg: "cyan.400",
				color: "white",
			}}
			{...rest}
		>
			{icon && (
				<Icon
					mr={4}
					fontSize={16}
					_groupHover={{
						color: "white",
					}}
					as={icon}
				/>
			)}
			{children}
		</Flex>
	</Link>;
};

interface MobileProps extends FlexProps {
	onOpen: () => void;
}

const MobileNav: FC<MobileProps> = ({onOpen, ...rest}) => {
	return <Flex
		ml={{base: 0, md: 60}}
		px={{base: 4, md: 4}}
		height={20}
		alignItems="center"
		bg={useColorModeValue("white", "gray.900")}
		borderBottomWidth="1px"
		borderBottomColor={useColorModeValue("gray.200", "gray.700")}
		justifyContent={{base: "space-between", md: "flex-end"}}
		transition="0.5s ease"
		{...rest}
	>
		<IconButton
			display={{base: "flex", md: "none"}}
			onClick={onOpen}
			variant="outline"
			aria-label="open menu"
			icon={<FiMenu />}
		/>

		<Text
			display={{base: "flex", md: "none"}}
			fontSize="2xl"
			fontFamily="monospace"
			fontWeight="bold"
		>
			Logo
		</Text>

		<HStack spacing={{base: 0, md: 6}}>
			<IconButton
				size="lg"
				variant="ghost"
				aria-label="open menu"
				icon={<FiBell />}
			/>
			<ColorModeToggle />
			<Flex alignItems="center">
				<Menu>
					<MenuButton
						py={2}
						transition="all 0.3s"
						_focus={{boxShadow: "none"}}
					>
						<HStack>
							<Avatar
								size="sm"
								src={
									'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
								}
							/>
							<VStack
								display={{base: "none", md: "flex"}}
								alignItems="flex-start"
								spacing="1px"
								ml={2}
							>
								<Text fontSize="sm">Justina Clark</Text>
								<Text fontSize="xs" color="gray.600">
									Admin
								</Text>
							</VStack>
							<Box display={{base: "none", md: "flex"}}>
								<FiChevronDown />
							</Box>
						</HStack>
					</MenuButton>
					<MenuList
						bg={useColorModeValue("white", "gray.900")}
						borderColor={useColorModeValue("gray.200", "gray.700")}
					>
						<MenuItem>Profile</MenuItem>
						<MenuItem>Settings</MenuItem>
						<MenuItem>Billing</MenuItem>
						<MenuDivider />
						<MenuItem>Sign out</MenuItem>
					</MenuList>
				</Menu>
			</Flex>
		</HStack>
	</Flex>;
};

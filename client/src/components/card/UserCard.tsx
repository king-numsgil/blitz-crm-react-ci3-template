import {Box, Text, Image, Link, useColorModeValue} from "@chakra-ui/react";
import React, {FC} from "react";

export const UserCard: FC = props => <Box
		w="xs"
		bg={useColorModeValue("white", "gray.800")}
		shadow="lg"
		rounded="lg"
		overflow="hidden"
		mx="auto"
	>
		<Image
			w="full"
			h={56}
			fit="cover"
			src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
			alt="avatar"
		/>
		<Box py={5} textAlign="center">
			<Link
				display="block"
				fontSize="2xl"
				color={useColorModeValue("gray.800", "white")}
				fontWeight="bold"
			>
				John Doe
			</Link>
			<Text
				fontSize="sm"
				color={useColorModeValue("gray.700", "gray.200")}
			>
				Software Engineer
			</Text>
		</Box>
	</Box>;

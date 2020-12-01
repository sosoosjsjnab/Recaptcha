import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Image width="1280px" height="100px" src="https://uploads.quarkly.io/5fc6ad8fcae167001e070f6f/images/top_hj.png?v=2020-12-01T20:55:19.778Z" margin="-10px 0px 0px 0px" />
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="p" font="--headline2" margin="20px 0 0 0" text-align="center">
				Please show you're not a robot
				<br />
				<br />
			</Text>
			<Text as="p" font="--headline3" margin="20px 0 0 0" text-align="center" />
			<Text font="40px " />
			<Image width="530px" height="134px" src="https://uploads.quarkly.io/5fc6ad8fcae167001e070f6f/images/NOTrobot.jpg?v=2020-12-01T20:55:19.783Z" />
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});
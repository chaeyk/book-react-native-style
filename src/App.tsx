import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Button from "./components/Button";
import { Contents, Footer, Header } from "./components/Layout";
import ShadowBox from "./components/ShadowBox";
import { textStyles, viewStyles } from "./styles";

const Container = styled.View`
	flex: 1;
	background-color: #ffffff;
	align-items: center;
	justify-content: center;
`;

const App = () => {
	return (
		<Container>
			{/* <Text style={[textStyles.text, { color: 'green' }]}>Inline Styling - Text</Text>
			<Text style={[textStyles.text, { color: 'error' }]}>Inline Styling - Error</Text> */}
			{/* <Header />
			<Contents />
			<Footer /> */}
			{/* <ShadowBox /> */}
			<Button title="Hanbit" />
			<Button title="React Native" />
		</Container>
	);
};

export default App;

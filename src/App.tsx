import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import Button from "./components/Button";
import Input from "./components/Input";
import { Contents, Footer, Header } from "./components/Layout";
import ShadowBox from "./components/ShadowBox";
import { textStyles, viewStyles } from "./styles";
import { darkTheme, lightTheme } from './components/theme';

interface IViewProps {
	theme: typeof darkTheme | typeof lightTheme;
}

const Container = styled.View`
	flex: 1;
	background-color: ${(props: IViewProps) => props.theme.background};
	align-items: center;
	justify-content: center;
`;

const App = () => {
	const [isDark, setIsDark] = useState(false);
	const _toggleSwitch = () => setIsDark(!isDark);

	return (
		<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
			<Container>
				<Switch value={isDark} onValueChange={_toggleSwitch} />
				{/* <Text style={[textStyles.text, { color: 'green' }]}>Inline Styling - Text</Text>
				<Text style={[textStyles.text, { color: 'error' }]}>Inline Styling - Error</Text> */}
				{/* <Header />
				<Contents />
				<Footer /> */}
				{/* <ShadowBox /> */}
				<Button title="Hanbit" />
				<Button title="React Native" />
				<Input borderColor="#3498db" />
				<Input borderColor="#9b59b6" />
			</Container>
		</ThemeProvider>
	);
};

export default App;

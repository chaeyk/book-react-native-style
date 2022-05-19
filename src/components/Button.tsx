import React from 'react';
import styled from 'styled-components/native';
import { darkTheme, lightTheme } from './theme';

const ButtonContainer = styled.TouchableOpacity`
	background-color: ${(props: IButtonProps) => props.title === 'Hanbit' ? props.theme.blue : props.theme.purple};
	border-radius: 15px;
	padding: 15px 40px;
	margin: 10px 0px;
	justify-content: center;
`;

const Title = styled.Text`
	font-size: 20px;
	font-weight: 600;
	color: #fff
`;

interface IButtonProps {
	title: string;
	theme: typeof darkTheme | typeof lightTheme;
}

const Button = (props: IButtonProps) => {
	return (
		<ButtonContainer title={props.title}>
			<Title>{props.title}</Title>
		</ButtonContainer>
	)
}

Button.defaultProps = {
	theme: lightTheme,
}

export default Button;

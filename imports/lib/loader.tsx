import React from 'react';
import { Spinner, ISpinnerProps } from '@chakra-ui/core'
import styled from '@emotion/styled';

const SpinWrapper = styled.section`
	margin: auto;
    display: flex;
    align-items: center;
    vertical-align: middle;
    width: 100%;
    height: 100%;
    justify-content: center;
    background: rgba( 255, 255, 255, .8 );
    position: fixed;
    top: -5%;
    left: 0%;
`


export const Loader: React.FC<ISpinnerProps> = (props) => {
	const { size, thickness } = props
	return (
		<SpinWrapper>
		<Spinner
			thickness={thickness || '4px'}
			speed="0.65s"
			emptyColor="gray.200"
			color="gray.700"
			size={size || "xl"}
			{...props}
			/>
		</SpinWrapper>
	)
}







export default function useLoader(status: boolean, Component?: React.Component) {
	if (status === true) {
		return Component ? Component : Loader
	}
}

import React from 'react';
import { Spinner, ISpinnerProps } from '@chakra-ui/core'



const Loader: React.FC<ISpinnerProps> = (props) => {
	const { size, thickness } = props
	return (
		<Spinner
			thickness={thickness || '4px'}
			speed="0.65s"
			emptyColor="gray.200"
			color="gray.700"
			size={size || "lg"}
			{...props}
		/>
	)
}







export default function useLoader(status: boolean, Component: React.Component) {
	if (status === true) {
		return Component ? Component : Loader
	}
}

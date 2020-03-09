import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Wrapper = styled.section`
    padding: 1rem 1.5rem;
`
export const MainWrapper = styled.main`
	display: flex;
	background: ${(props) => (props.bgColor ? props.bgColor : 'white')};
	flex-direction: column;
	padding: ${(props) => (props.padding ? props.padding : props.theme.constants.defaultPadding)};
	padding-bottom: calc(${(props) =>
        props.paddingBottom ? props.paddingBottom : props.footerHeight || props.theme.constants.footerHeight} + .3rem);
	width: 100%;
    ${(props) => props.border && css`border-bottom: ${props.theme.constants.border};`}
	${(props) =>
        props.showHeader &&
        css`
			padding-top: calc(${props.headerHeight || props.theme.constants.headerHeight} + 0.1rem);
		`};
	/* min-height: calc(100% - (${(props) => props.theme.constants.headerHeight})); */
`;

Wrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}


export default Wrapper
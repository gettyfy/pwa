import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { TabbedNav } from '/imports/ui/components'

const PageWrapper = styled.section`
    padding: 1rem 1.1rem;
`

export default class Wrapper extends React.Component {

	static propTypes = {
		children: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node
		]).isRequired
	}

	render() {
		return (
			<PageWrapper>
				{this.props.children}
				<TabbedNav />
			</PageWrapper>
		)
	}
}


// export const MainWrapper = styled.main`
// 	display: flex;
// 	background: ${(props) => (props.bgColor ? props.bgColor : 'white')};
// 	flex-direction: column;
// 	padding: ${(props) => (props.padding ? props.padding : props.theme.constants.defaultPadding)};
// 	padding-bottom: calc(${(props) =>
//         props.paddingBottom ? props.paddingBottom : props.footerHeight || props.theme.constants.footerHeight} + .3rem);
// 	width: 100%;
//     ${(props) => props.border && css`border-bottom: ${props.theme.constants.border};`}
// 	${(props) =>
//         props.showHeader &&
//         css`
// 			padding-top: calc(${props.headerHeight || props.theme.constants.headerHeight} + 0.1rem);
// 		`};
// 	/* min-height: calc(100% - (${(props) => props.theme.constants.headerHeight})); */
// `;



import React from 'react'
import styled from '@emotion/styled'
import PropTypes, { string } from 'prop-types'
import { TabbedNav } from '/imports/ui/components'

interface IPageWrapper {
	layoutWrapper?: string,
	theme?: {
		custom: { defaultWrapper: string, tabNavHeight: string }
	}
}

const PageWrapper = styled.section<IPageWrapper>`
    padding: ${props => props.layoutWrapper ? props.layoutWrapper : props.theme.custom.defaultWrapper};
    padding-bottom: calc(${props => props.theme.custom.tabNavHeight} + 1.7rem);
	
`

export default class Wrapper extends React.Component<{ layoutWrapper: string }> {

	static propTypes = {
		layoutWrapper: PropTypes.string,
		children: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node
		]).isRequired
	}

	render() {
		const { layoutWrapper } = this.props
		return (
			<PageWrapper layoutWrapper={layoutWrapper}>
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



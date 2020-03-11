import React from 'react';
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Box, Heading, Icon } from '@chakra-ui/core'
import * as Analytics from '/imports/ui/analytics';


const ActionCardRow = styled.section`
  flex-direction: row;
  width: 100%;
  display: flex;
  flex: 1 1 50%;
  text-align: left;
  min-height: 13rem;
  justify-content: space-between;
  margin-top: 1rem;
 

`

interface IActionCard {
    analyticName: string,
    cardBg: string,
    cardLink: string,
    name: string,
    iconColor: string,
    cardHeading: string,
    cardSubHeading: string
    children?: any
}

const ActionCard: React.FC<IActionCard> = (props) => {
    const { analyticName, cardBg, cardLink, name, iconColor, cardHeading, cardSubHeading } = props

    const handleClick = (analyticName: string): any => {
        // we will write the handle analytics here
        Analytics.track(analyticName, {
            action: `Click LinkTo ${props.cardSubHeading}`
        })

    }
    return (
        <Box mt="2" textAlign="left" p="5" pl="6" w="48%" as="button" bg={cardBg}>
            <Link to={cardLink}>
                <Box w="100%" onClick={handleClick(analyticName)}>

                    <Icon name={name} mb="6" color={iconColor} size="20px" {...props}></Icon>
                    <Box mb="3" w="65%">
                        <Heading as="h2" size="sm">{cardHeading}</Heading>
                    </Box>
                    <Heading as="h6" size="xs">{cardSubHeading}</Heading>
                </Box>
            </Link>
        </Box>
    )

}


// export the components as modules to be resuable by other component
export { ActionCardRow, ActionCard }
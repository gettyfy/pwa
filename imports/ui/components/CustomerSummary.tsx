import React from 'react';
import styled from '@emotion/styled'
import { Flex, Box, Icon, Text} from '@chakra-ui/core'



const SummaryRow = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`

interface ISummaryList {
   name: string,
   phone: any,
   email: any,
   location: any,
   iconName: string,
   iconSize: any
}


const SummaryList: React.FC<ISummaryList> = (props) => {
    const { name,phone,email,location, iconName, iconSize } = props


    return (
        <SummaryRow  >
        <Flex flexDirection="row">
            <Box>
                <Icon name={iconName} size={iconSize} />

            </Box>
            <Box ml="2" mt="1">
    <Text fontSize="xs">{name}</Text>
            </Box>
        </Flex>

        <Flex>
            <Box>
                <Icon name="phone" size="12px" />

            </Box>
            <Box ml="2" mt="1">
                <Text fontSize="xs">{phone}</Text>
            </Box>
        </Flex>

        <Flex>
            <Box>
                <Icon name="at-sign" size="12px" />

            </Box>
            <Box ml="2" mt="1">
                <Text fontSize="xs">{email}</Text>
            </Box>
        </Flex>

        <Flex>
            <Box>
                <Icon name="calendar" size="12px" />

            </Box>
            <Box ml="2" mt="1">
                <Text fontSize="xs">{location}</Text>
            </Box>
        </Flex>
        </SummaryRow>

    )




}

export { SummaryList, SummaryRow }
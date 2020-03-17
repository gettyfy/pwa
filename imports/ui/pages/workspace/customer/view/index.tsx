// import React, { Fragment } from 'react';
import React  from 'react';
// import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import {Stack, Text } from "@chakra-ui/core";


import { withTracker } from 'meteor/react-meteor-data';
import { PageHeader } from '/imports/ui/components'

//imports for API call
import { Meteor } from 'meteor/meteor'
import { Customers } from '/imports/api/collections'


const StyledCustomers = styled.main`
  display: flex;
  flex-direction: column;
`

const LineDivider = styled.div`
    height: .8px;
    padding: 0px;
    margin: 0;
    margin-left: calc(-${ props => props.theme.custom.defaultBox});
    margin-right: calc(-${ props => props.theme.custom.defaultBox});
    background: #eee;
`


 const CustomerView: React.FC = (props: any) => {
    
    
    console.log(props.customer);
     return (
         <StyledCustomers>
             <PageHeader useHeader useTitle title=" Details" />
           
             <Stack spacing={3}>
              <Text fontSize="md">Name:{props.customer ? props.customer.customerName : ''}</Text>
                 <Text fontSize="md">Address:{props.customer ? props.customer.customerAddress : ''}</Text>
                 <Text fontSize="md">Email:{props.customer ? props.customer.customerEmail : ''}</Text>
                 <Text fontSize="md">Phone:{props.customer ? props.customer.customerNumber : ''}</Text>
                  </Stack>
             <LineDivider />
         </StyledCustomers>
       

     );
}









export default withTracker((props: any) => {
    const id = props.match.params.id;
    return {
        customer: Customers.findOne({ _id: id }),
    };
})(CustomerView);

import React from 'react';
// import { Icon, Box } from "@chakra-ui/core";
import { withTracker } from 'meteor/react-meteor-data';
import styled from '@emotion/styled'
import { PageHeader, LinkButton } from '/imports/ui/components'

import { CustomerStyle, CustomerList } from '/imports/ui/components'
// Make the Detail Page Available in routes

//imports for API call
import { Meteor } from 'meteor/meteor'
import { Customers } from '/imports/api/collections'
import { ICustomer } from '/imports/api/schema';
import path from '/imports/ui/router';
import { Box } from '@chakra-ui/core';


const StyledCustomers = styled.main`
  display: flex;
  flex-direction: column;
`
interface CustomerProps {
  customers: ICustomer[]
}


class Customer extends React.Component<CustomerProps> {

  render() {
    console.log(this.props)
    const { customers } = this.props
    return (

      <StyledCustomers>
        <PageHeader title="Your Customers" />

        <Box pb="4" >
          <LinkButton buttonLink={`${path.workspace.createCustomer}/`} buttonName="Add new Customer" analyticName="" buttonColor="#0B69FF" color="#FFF" />
        </Box >

        {customers.map((val, index) => {
          return (
            <CustomerList
              key={[val.customerName, index].join('-')}
              LinkCard={`${path.workspace.customerView}/view/${val._id}`}
              customerName={val.customerName}
              iconName="info-outline"
              PhoneNumber={val.phonenumber}
            />

          )
        })}


      </StyledCustomers>


    )
  }
}



export default withTracker(() => {
  Meteor.subscribe('customers')
  console.log(Customers.find().fetch())
  return {
    customers: Customers.find().fetch()
  };
})(Customer);

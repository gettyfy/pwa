import React from 'react';
import { useHistory } from 'react-router-dom'
import styled from '@emotion/styled'
import { FormButton, PageHeader } from '/imports/ui/components'
import Path from '/imports/ui/router';
import { Meteor } from 'meteor/meteor'

const StyledRecord = styled.main`
  display: flex;
  flex-direction: column;
`


const Review = (props) => {
  const history = useHistory()

  console.log(props)

  const handleSubmit = () => {
    Meteor.call('transaction.insert', props.data)
    history.push(`${Path.workspace.createTransaction}/success`)
  }

  return (
    <React.Fragment>
      <PageHeader title="Review" subTitle="Review this transaction" />
      <p>{JSON.stringify(props.data)}</p>

      <FormButton handleAction={() => handleSubmit()} buttonName="Submit" />


    </React.Fragment>
  )
}


export default Review
import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Wrapper = styled.section`
    padding: 1rem 1.5rem;
`

Wrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}


export default Wrapper
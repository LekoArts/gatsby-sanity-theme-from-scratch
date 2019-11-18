import React from 'react'
import { graphql } from 'gatsby'

const Events = ({ data }) => {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Events

export const query = graphql`
  query {
    allSanityEvent {
      nodes {
        location
        name
        externalLink
        description
        date
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'
import List from '../components/list'

const Events = ({ data }) => <List events={data.allSanityEvent.nodes} />

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

import React from 'react'
import List from 'gatsby-theme-events/src/components/list'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

const Events = ({ data }) => (
  <Layout>
    <Helmet title="Events - Meetup 🎉" />
    <List events={data.allSanityEvent.nodes} />
  </Layout>
)

export default Events

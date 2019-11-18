import React from 'react'
import { Styled } from 'theme-ui'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <Styled.h1>Welcome to Meetup!</Styled.h1>
    <Styled.p>
      This meetup is for anyone interested in anything on the web. We organise
      talks, workshops, coding nights, and social events. We also encourage,
      support, and help community members, especially those underrepresented in
      tech, contribute with their own content. If you're interested in giving
      talks please let us know!
    </Styled.p>
    <Styled.p>The next upcoming event will be:</Styled.p>
    <div>TODO</div>
    <Styled.p>
      You can find all upcoming and past events here:{' '}
      <Styled.a as={Link} to="/events">
        Events
      </Styled.a>
    </Styled.p>
  </Layout>
)

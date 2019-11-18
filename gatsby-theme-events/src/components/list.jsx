/** @jsx jsx */
import React from 'react'
import { Styled, jsx } from 'theme-ui'
import ListItem from './list-item'

const List = ({ events }) => {
  return (
    <section sx={{ variant: `list.default` }}>
      <Styled.h2>Upcoming Events</Styled.h2>
      <ul>
        {events.map(event => (
          <li key={event.name}>
            <ListItem event={event} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default List

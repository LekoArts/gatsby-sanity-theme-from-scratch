/** @jsx jsx */
import { Global, css } from '@emotion/core'
import Helmet from 'react-helmet'
import { Styled, Flex, jsx } from 'theme-ui'
import { Link } from 'gatsby'

const Layout = ({ children, title = "Meetup 🎉" }) => {
  return (
    <Styled.root>
      <Global
        styles={css({
          '*': {
            boxSizing: `inherit`,
          },
          body: {
            margin: 0,
            padding: 0,
            boxSizing: `border-box`,
            textRendering: `optimizeLegibility`,
          },
        })}
      />
      <Helmet title={title} />
      <div sx={{ variant: `containers.default` }}>
        <Flex as="header" sx={{ justifyContent: `space-between`, mb: 5 }}>
          <Link to="/" sx={{ textDecoration: `none`, color: `text` }}>
            <h1>Meetup</h1>
          </Link>
          <Flex as="nav" sx={{ alignItems: `center` }}>
            <Styled.a href="https://twitter.com/lekoarts_de">Twitter</Styled.a>
            <Styled.a as={Link} to="/events" sx={{ ml: 3 }}>
              Events
            </Styled.a>
          </Flex>
        </Flex>
        <main>{children}</main>
        <footer sx={{ mt: 5 }}>
          &copy; {new Date().getFullYear()}. All rights reserved.{' '}
          <Styled.a href="https://github.com/LekoArts/gatsby-sanity-theme-from-scratch">
            Link to repository
          </Styled.a>
        </footer>
      </div>
    </Styled.root>
  )
}

export default Layout

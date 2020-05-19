import React, { useContext } from "react"
import { Router } from "@reach/router"
import { Container, Flex, Heading, Button } from "theme-ui"
import { IdentityContext } from "../../identity-context"
import Dash from "../components/dashboard"

let DashLoggedOut = props => {
  const { identity: netlifyIdentity } = useContext(IdentityContext)

  return (
    <Container>
      <Flex sx={{ flexDirection: "column", padding: 3 }}>
        <Heading as="h1">Get Stuff Done</Heading>
        <Button
          sx={{ marginTop: 2 }}
          onClick={() => {
            netlifyIdentity.open()
          }}
        >
          Log In
        </Button>
      </Flex>
    </Container>
  )
}

export default props => {
  const { user } = useContext(IdentityContext)

  if (!user) {
    return (
      <Router>
        <DashLoggedOut path="/app" />
      </Router>
    )
  }
  return (
    <Router>
      <Dash path="/app" />
    </Router>
  )
}

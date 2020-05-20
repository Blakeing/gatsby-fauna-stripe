import React, { useContext } from "react"
import { Container, Flex, NavLink, Button } from "theme-ui"
import { Link } from "@reach/router"
import { IdentityContext } from "../../identity-context"

export default () => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext)

  fetch("/.netlify/functions/create-manage-link", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${user.token.access_token}`,
    },
  })
    .then(res => res.json())
    .then(res => console.log(JSON.stringify(res, null, 2)))
    .catch(err => console.error(JSON.stringify(err, null, 2)))

  return (
    <Container>
      <Flex as="nav">
        <NavLink as={Link} to="/" p={2}>
          Home
        </NavLink>
        <NavLink as={Link} to={"/app"} p={2}>
          Dashboard
        </NavLink>
        {user && (
          <NavLink
            href="#!"
            p={2}
            onClick={() => {
              netlifyIdentity.logout()
            }}
          >
            Log out {user.user_metadata.full_name}
          </NavLink>
        )}
      </Flex>
      {/* <Flex>
        <Button
          onClick={() => {
            redirectToManage()
          }}
        >
          Manage Account
        </Button>
      </Flex> */}
      <Flex>{user.token.access_token}</Flex>
      <Flex>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </Flex>
    </Container>
  )
}
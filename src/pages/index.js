import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {
  IdentityModal,
  useIdentityContext,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"
import "@reach/tabs/styles.css"

const IndexPage = () => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = useState(false)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>

      <Link to="/page-2/">Go to page 2</Link>
      {identity && identity.isLoggedIn && (
        <pre>{JSON.stringify(identity, null, 2)}</pre>
      )}
      {!dialog && <button onClick={() => setDialog(true)}>Log In</button>}
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={user => console.log("hello ", user?.user_metadata)}
        onSignup={user => console.log("welcome ", user?.user_metadata)}
        onLogout={() => console.log("bye ")}
      />
    </Layout>
  )
}

export default IndexPage

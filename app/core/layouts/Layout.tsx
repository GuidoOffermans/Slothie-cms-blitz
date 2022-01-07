import { Head, BlitzLayout } from "blitz"

const Layout: BlitzLayout<{title?: string}> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "slothie-cms"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  )
}

export default Layout

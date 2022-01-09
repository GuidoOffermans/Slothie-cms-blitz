import { BlitzPage, Link, Routes } from "blitz"

import Layout from "app/core/layouts/Layout"

const Home: BlitzPage = () => {
  return (
    <div className="container">
      <main>
        <h2>Home Page</h2>
        <Link href={Routes.Admin()}>
          <a className="text-indigo-600 hover:text-indigo-900 hover:bg-stone-200">
            Go to the Admin Page
          </a>
        </Link>
      </main>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home

import { BlitzPage } from "blitz"

import Layout from "app/core/layouts/Layout"

const Admin: BlitzPage = () => {
  return (
    <div className="container">
      <main>
        <h2>Admin Page</h2>
      </main>
    </div>
  )
}

Admin.suppressFirstRenderFlicker = true
Admin.getLayout = (page) => <Layout title="Admin">{page}</Layout>

export default Admin

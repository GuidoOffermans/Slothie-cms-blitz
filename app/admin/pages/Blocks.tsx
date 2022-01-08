import { BlitzPage } from "blitz"

import AdminLayout from "../../admin/layouts/AdminLayout"

const BlocksPage: BlitzPage = () => {
  return <h2>Blocks Page</h2>
}

BlocksPage.suppressFirstRenderFlicker = true
BlocksPage.getLayout = (page) => <AdminLayout title="Blocks pages">{page}</AdminLayout>

export default BlocksPage

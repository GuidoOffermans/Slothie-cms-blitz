import { BlitzPage } from "blitz"

import AdminLayout from "../../admin/layouts/AdminLayout"

const ManagePages: BlitzPage = () => {
  return <h2>Pages Page</h2>
}

ManagePages.suppressFirstRenderFlicker = true
ManagePages.getLayout = (page) => <AdminLayout title="Manage pages">{page}</AdminLayout>

export default ManagePages

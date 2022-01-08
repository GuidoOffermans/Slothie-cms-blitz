import { BlitzPage } from "blitz"
import AdminLayout from "../../admin/layouts/AdminLayout"

const Admin: BlitzPage = () => {
  return <h2>Admin Page</h2>
}

Admin.suppressFirstRenderFlicker = true
Admin.getLayout = (page) => <AdminLayout title="Admin">{page}</AdminLayout>

export default Admin

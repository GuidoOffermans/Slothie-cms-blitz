import { BlitzPage } from "blitz"

import AdminLayout from "../../admin/layouts/AdminLayout"
import ActionHeader from "../components/headings/ActionHeader"

const ManagePages: BlitzPage = () => {
  return <ActionHeader title={"test"} actionName={"click"} />
}

ManagePages.suppressFirstRenderFlicker = true
ManagePages.getLayout = (page) => <AdminLayout title="Manage pages">{page}</AdminLayout>

export default ManagePages

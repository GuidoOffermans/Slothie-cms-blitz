import { BlitzPage } from "blitz"

import AdminLayout from "../../admin/layouts/AdminLayout"
import ActionPageHeading from "../components/headings/ActionPageHeading"
import PageTable from "../components/tables/PageTable"

const ManagePages: BlitzPage = () => {
  return (
    <div className="p-4">
      <ActionPageHeading title={"Edit your pages here"} actionName={"click"} />
      <div className="py-4" />
      <PageTable />
    </div>
  )
}

ManagePages.suppressFirstRenderFlicker = true
ManagePages.getLayout = (page) => <AdminLayout title="Manage pages">{page}</AdminLayout>

export default ManagePages

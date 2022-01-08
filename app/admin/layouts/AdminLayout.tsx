import { BlitzLayout, Head, Routes } from "blitz"
import AdminDashboard from "../components/AdminDashboard"

const AdminLayout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "slothie-cms-admin"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  )
}

AdminLayout.authenticate = false
AdminLayout.redirectAuthenticatedTo = ({ session }) =>
  session.role === "ADMIN" ? Routes.Admin() : Routes.Home()

export default AdminLayout

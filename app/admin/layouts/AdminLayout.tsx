import { BlitzLayout, Head, Routes } from "blitz"
import { useState } from "react"

import NavbarModal from "../components/NavbarModal"
import AdminSidebar from "../components/AdminSidebar"
import NavHamburgerButton from "../components/NavHamburgerButton"
import AdminProfile from "../components/AdminProfile"

const AdminLayout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const user = {
    userName: "Guido Offermans",
    userImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  }

  return (
    <>
      <Head>
        <title>{title || "slothie-cms-admin"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <NavbarModal sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
          <AdminProfile user={user} />
        </NavbarModal>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <AdminSidebar>
            <AdminProfile user={user} />
          </AdminSidebar>
        </div>

        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white">
            <NavHamburgerButton onclick={() => setSidebarOpen(true)} srText="Open sidebar" />
          </div>

          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="py-4">{children}</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

AdminLayout.authenticate = false
AdminLayout.redirectAuthenticatedTo = ({ session }) =>
  session.role === "ADMIN" ? Routes.Admin() : Routes.Home()

export default AdminLayout

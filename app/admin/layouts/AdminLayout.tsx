import { BlitzLayout, Head, Routes } from "blitz"
import { useState } from "react"

import MobileNavModal from "../components/MobileNavModal"
import AdminSidebar from "../components/AdminSidebar"
import MobileTopNav from "../components/MobileTopNav"
import MainSection from "../components/MainSection"
import AsideSection from "../components/AsideSection"
import NavLogo from "../components/NavLogo"

const AdminLayout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const user = {
    name: "Guido Offermans",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  }

  return (
    <>
      <Head>
        <title>{title || "slothie-cms-admin"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-full flex">
        <MobileNavModal
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          user={user}
        />
        {/*<AdminSidebar user={user} />*/}

        <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
          <MobileTopNav setMobileMenuOpen={setMobileMenuOpen} />

          <main className="flex-1 flex overflow-hidden">
            <AdminSidebar user={user} />
            {/*<AsideSection />*/}
            <MainSection>{children}</MainSection>
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

import NavLogo from "./NavLogo"
import AdminNav from "./AdminNav"
import AdminProfile from "./AdminProfile"

const AdminSidebarItems = ({ user }) => {
  return (
    <>
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <NavLogo />
        <AdminNav />
      </div>
      <AdminProfile user={user} />
    </>
  )
}

export default AdminSidebarItems

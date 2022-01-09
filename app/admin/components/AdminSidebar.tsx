import NavLogo from "./NavLogo"
import AdminNav from "./AdminNav"
import AdminProfile from "./AdminProfile"

const AdminSidebar = ({ user }) => {
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-20">
        <div className="flex-1 flex flex-col min-h-0 overflow-y-auto bg-stone-100">
          <div className="flex-1">
            <NavLogo />
            <AdminNav />
          </div>
          <AdminProfile user={user} />
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar

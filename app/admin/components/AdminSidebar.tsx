import AdminNav from "./AdminNav"
import NavLogo from "./NavLogo"

const AdminSidebar = ({ children }) => {
  return (
    <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <NavLogo />
        <AdminNav />
      </div>
      {children}
    </div>
  )
}

export default AdminSidebar

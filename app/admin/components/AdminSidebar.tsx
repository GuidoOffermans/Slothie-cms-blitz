const AdminSidebar = ({ children }) => {
  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
        {children}
      </div>
    </div>
  )
}

export default AdminSidebar

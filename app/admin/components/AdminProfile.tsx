const AdminProfile = ({ user }) => {
  return (
    <div className="flex-shrink-0 flex pb-5">
      <a href="#" className="flex-shrink-0 w-full">
        <img className="block mx-auto h-10 w-10 rounded-full" src={user.image} alt="" />
        <div className="sr-only">
          <p>{user.name}</p>
          <p>Account settings</p>
        </div>
      </a>
    </div>
  )
}

export default AdminProfile

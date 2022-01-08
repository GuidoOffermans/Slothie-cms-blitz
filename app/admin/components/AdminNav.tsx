import React from "react"
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/outline"

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: InboxIcon, current: false },
  { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const AdminNav = () => {
  return (
    <nav className="mt-5 px-2 space-y-1">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current
              ? "bg-gray-100 text-gray-900"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
          )}
        >
          <item.icon
            className={classNames(
              item.current ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500",
              "mr-4 flex-shrink-0 h-6 w-6"
            )}
            aria-hidden="true"
          />
          {item.name}
        </a>
      ))}
    </nav>
  )
}

export default AdminNav

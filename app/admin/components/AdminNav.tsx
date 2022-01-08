import React from "react"
import { CubeIcon, DocumentTextIcon, HomeIcon } from "@heroicons/react/outline"
import { Link, Routes } from "blitz"

const navigation = [
  { name: "Dashboard", href: Routes.Admin(), icon: HomeIcon, current: true },
  { name: "Pages", href: Routes.ManagePages(), icon: DocumentTextIcon, current: false },
  { name: "Blocks", href: Routes.BlocksPage(), icon: CubeIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const AdminNav = () => {
  return (
    <nav className="mt-5 px-2 space-y-1">
      {navigation.map((item) => (
        <Link key={item.name} href={item.href}>
          <a
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
        </Link>
      ))}
    </nav>
  )
}

export default AdminNav

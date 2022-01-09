import React from "react"
import { Link, useRouter } from "blitz"

import { navigation } from "./Navigation"

const ActiveLink = ({ href, item }) => {
  const router = useRouter()

  const activeLinkClass =
    router.pathname === href.pathname
      ? "bg-gray-200 text-gray-900"
      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
  const linkClassName = `group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium ${activeLinkClass}`

  const activeIconClass =
    router.pathname === href.pathname ? "text-gray-700" : "text-gray-400 group-hover:text-gray-500"
  const iconClassName = `h-6 w-6 ${activeIconClass}`

  return (
    <Link href={href}>
      <a
        className={linkClassName}
        // aria-current={item.current ? 'page' : undefined}
      >
        <item.icon className={iconClassName} aria-hidden="true" />
        <span className="mt-2">{item.name}</span>
      </a>
    </Link>
  )
}

const AdminNav = () => {
  return (
    <nav aria-label="Sidebar" className="py-6 flex flex-col items-center space-y-3">
      {navigation.map((item) => (
        <ActiveLink key={item.name} href={item.href} item={item} />
      ))}
    </nav>
  )
}

export default AdminNav

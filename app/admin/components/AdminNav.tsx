import React from "react"
import { Link, useRouter } from "blitz"

import { navigation } from "./Navigation"

const ActiveLink = ({ href, item }) => {
  const router = useRouter()

  const activeLinkClass =
    router.pathname === href.pathname
      ? "bg-stone-300 text-stone-900"
      : "text-stone-600 hover:bg-stone-200 hover:text-stone"
  const linkClassName = `group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium ${activeLinkClass}`

  const activeIconClass =
    router.pathname === href.pathname
      ? "text-stone-700"
      : "text-stone-400 group-hover:text-stone-500"
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

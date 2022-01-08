import { MenuIcon } from "@heroicons/react/outline"

const NavHamburgerButton = ({ onclick, srText }) => {
  return (
    <button
      type="button"
      className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
      onClick={onclick}
    >
      <span className="sr-only">{srText}</span>
      <MenuIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  )
}

export default NavHamburgerButton

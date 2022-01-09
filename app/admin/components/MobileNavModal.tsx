import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"

import { navigation } from "./Navigation"
import { Link } from "blitz"

const MobileNavModal = ({ mobileMenuOpen, setMobileMenuOpen, user }) => {
  return (
    <Transition.Root show={mobileMenuOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setMobileMenuOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-stone-600 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute top-0 right-0 -mr-12 pt-4">
                <button
                  type="button"
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </Transition.Child>
            <div className="pt-5 pb-4">
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=stone"
                  alt="Workflow"
                />
              </div>
              <nav aria-label="Sidebar" className="mt-5">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        className="group p-2 rounded-md flex items-center text-base font-medium text-stone-800 hover:bg-stone-50 hover:text-stone-900"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon
                          className="mr-4 h-6 w-6 text-stone-500 group-hover:text-stone-700"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-stone-200 p-4 hover:bg-stone-50">
              <a href="#" className="flex-shrink-0 group block">
                <div className="flex items-center">
                  <div>
                    <img className="inline-block h-10 w-10 rounded-full" src={user.image} alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-stone-700 group-hover:text-stone-900">
                      {user.name}
                    </p>
                    <p className="text-sm font-medium text-stone-500 group-hover:text-stone-700">
                      Account Settings
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </Transition.Child>
        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* Force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default MobileNavModal

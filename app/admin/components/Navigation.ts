import { Routes } from "blitz"
import { CubeIcon, DocumentTextIcon, HomeIcon } from "@heroicons/react/outline"

export const navigation = [
  { name: "Dashboard", href: Routes.Admin(), icon: HomeIcon },
  { name: "Pages", href: Routes.ManagePages(), icon: DocumentTextIcon },
  { name: "Blocks", href: Routes.BlocksPage(), icon: CubeIcon },
]

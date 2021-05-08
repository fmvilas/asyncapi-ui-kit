import { Logo } from "./Logo";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
  return (
    <div className="fixed px-1 z-40 inset-0 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 lg:block xl:w-72 hidden">
      <Logo />
      <SidebarMenu />
    </div>
  )
}

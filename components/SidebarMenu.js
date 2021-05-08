import IconBookOpen from './icons/BookOpen'
import IconServer from './icons/Server'

export default function SidebarMenu({}) {
  return (
    <div id="navWrapper" className="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0">
      <nav id="nav" className="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 sticky?lg:h-(screen-18)">
        <ul>
          <li>
            <a href="/docs" className="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-4 text-gray-900">
              
              Overview
            </a>
          </li>
          <li>
            <a href="/docs" className="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-4 text-gray-500">
              Connecting to a server
            </a>
          </li>
          <li className="mt-8">
            <h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">Operations</h5>
            <ul>
              <li>
                <a className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500" href="/docs/installation">
                  <span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                  <span className="relative">Installation</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

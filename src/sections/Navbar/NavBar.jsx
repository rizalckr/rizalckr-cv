import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import DarkMode from '../../components/DarkMode'
import { Link } from 'react-scroll'
import logo from '../../assets/logo.svg'

export default function HeadNavBar() {
  return (
     <Disclosure as="nav" className="sticky top-0 bg-gray-800 ">
      <div className=" px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Logo"
                title='Logo'
                src={logo}
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link to='home' activeClass="active" activeStyle={{ color:'#ffee57' }} spy={true} offset={-500} smooth={true} duration={500} className='navbarstyle cursor-pointer text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white'
                >Home
                </Link>
                <Link to='projects' activeClass="active" activeStyle={{ color:'#ffee57' }} offset={0} spy={true} smooth={true} duration={500} className='navbarstyle cursor-pointer text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white'
                >Projects
                </Link>
                <Link to='skills' activeClass="active" activeStyle={{ color:'#ffee57' }} offset={0} spy={true} smooth={true} duration={500} className='navbarstyle cursor-pointer text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white'
                >Skills
                </Link>
                <Link to='contact' activeClass="active" activeStyle={{ color:'#ffee57' }} offset={0} spy={true} smooth={true} duration={500} className='navbarstyle cursor-pointer text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white'
                >Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <DarkMode aria-hidden="true" />
            </div>

          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton>
               <div className="grid">
                <Link to='home' activeClass="active" activeStyle={{ color:'#ffee57' }} spy={true} offset={-500} smooth={true} duration={500} className='navbarstyle cursor-pointer text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white'
                >Home
                </Link>
                <Link to='projects' activeClass="active" activeStyle={{ color:'#ffee57' }} offset={1} spy={true} smooth={true} duration={500} className='navbarstyle cursor-pointer text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white'
                >Projects
                </Link>
                <Link to='skills' activeClass="active" activeStyle={{ color:'#ffee57' }} offset={1} spy={true} smooth={true} duration={500} className='navbarstyle cursor-pointer text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white'
                >Skills
                </Link>
                <Link to='contact' activeClass="active" activeStyle={{ color:'#ffee57' }} offset={1} spy={true} smooth={true} duration={500} className='navbarstyle cursor-pointer text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white'
                >Contact
                </Link>
              </div>
            </DisclosureButton>

        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

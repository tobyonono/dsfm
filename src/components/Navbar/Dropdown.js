import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FaCaretDown } from "react-icons/fa";
import { BrowserRouter, Route, Link, NavLink, useMatch} from "react-router-dom";





const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }
  
  const Dropdown = () => {

    const isOnOurStory= (useMatch("/our-story"));
    const isOnMissionstatement = (useMatch("/mission-statement"))
    const isOnCodeOfPractice= (useMatch("/code-of-practice"))
    console.log(((isOnOurStory || isOnMissionstatement) ? true: false))

    return (
      <Menu as="div" className="relative inline-block text-left">
        <div>
            
          <Menu.Button className={ (isOnOurStory || isOnMissionstatement || isOnCodeOfPractice) ? `opacity-100 inline-flex w-full justify-center px-4 py-2 shadow-sm `: `inline-flex w-full justify-center px-4 py-2 shadow-sm opacity-50`}>
            ABOUT
            <FaCaretDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        </div>
  
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm">
            <div className="py-1">
            <li className='active:border-blue-400 mr-2'>
                        <NavLink to='/our-story' className={({ isActive }) =>
                            isActive ? 'text-gray-900 block px-4 py-2 text-sm' : 'text-gray-700 block px-4 py-2 text-sm'
                            
                        }>

                            <button className="pointer-events-auto ">
                                <span>OUR STORY</span>
                            </button>
                        </NavLink>
                    </li>
                    <li className='active:border-blue-400 mr-2'>
                        <NavLink to='/mission-statement' className={({ isActive }) =>
                             isActive ? 'text-gray-900 block px-4 py-2 text-sm' : 'text-gray-700 block px-4 py-2 text-sm'
                        }>
                            <button className="pointer-events-auto ">
                                <span>MISSION STATEMENT</span>
                            </button>
                        </NavLink>
                    </li>
                    <li className='active:border-blue-400 mr-2'>
                        <NavLink to='/code-of-practice' className={({ isActive }) =>
                             isActive ? 'text-gray-900 block px-4 py-2 text-sm' : 'text-gray-700 block px-4 py-2 text-sm'
                        }>
                            <button className="pointer-events-auto ">
                                <span>Code Of Practice</span>
                            </button>
                        </NavLink>
                    </li>

             
             
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    )
  }

  export default Dropdown;
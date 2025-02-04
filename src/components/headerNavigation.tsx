import { useState } from "react";
import SideNav from "./sideNav";

const HeaderNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className='sticky top-0 w-[100%]  overflow-hidden text-[16px] bg-white z-50 shadow'>
        <div className='  min-w-[400px]  font-custom flex flex-row justify-between items-center p-6   '>
          <div className=''>
            <img src='/LSQ Logo.svg' alt='logo' />
          </div>
          <button
            onClick={() => setOpen((state) => !state)}
            type='button'
            className='hover:text-gray-500 inline-flex items-center p-2 ml-1 text-sm    rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          >
            <span className='sr-only '>Open main menu</span>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
            <svg
              className='hidden w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>{" "}
          <div className={`${open ? "hidden" : "hidden"}  md:block w-2/6`}>
            <div className='flex flex-row   justify-center  rounded-lg'>
              <input
                placeholder='Search for anything'
                type='text'
                className='flex-1 px-2  outline-none rounded-l-md text-[14px] border-mainblue-0 border-opacity-10 border-[1px] border-r-0 '
              />
              <p className='bg-primary-0 w-[56px] flex justify-center items-center px-3 py-2 rounded-r-lg'>
                <img src='/searchicone.svg' alt='search icone' />
              </p>
            </div>
          </div>
          <ul
            className={` ${open ? "absolute top-10 bg-white" : "hidden"} md:flex flex-col md:flex-row justify-evenly items-center w-2/6`}
          >
            <li>
              <a href='/' className='text-mainblue-0 underline text-lg'>
                Docs
              </a>
            </li>
            <li>
              <a href='/'>
                <img src='/icones/np_notification_2425223_000000 1 (1).svg' />
              </a>
            </li>

            <div className='flex flex-row items-center space-x-3'>
              <li>
                <a href='/'>
                  <img
                    src='/images/image 4.png'
                    className='w-[48px] h-[48px] rounded-full'
                  />
                </a>
              </li>
              <li className='relative'>
                <button
                  className=' flex flex-row space-x-2 text-mainblue-0 items-center hover:text-gray-300 p-2 text-lg'
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span>Adedeji</span>
                  <img src='/icones/np_dropdown_615120_000000 1.svg' alt='' />
                </button>
                {dropdownOpen && (
                  <ul className='absolute bg-white mt-2 w-[150%] p-2 rounded shadow-sm'>
                    <li>
                      <a
                        href='/'
                        className='block whitespace-normal px-4 py-2 hover:bg-gray-100 rounded-md'
                      >
                        link 1
                      </a>
                    </li>
                    <li>
                      <a
                        href='/'
                        className='block px-4 py-2 hover:bg-gray-100 rounded-md'
                      >
                        link 2
                      </a>
                    </li>
                    <li>
                      <a
                        href='/'
                        className='block px-4 py-2 hover:bg-gray-100 rounded-md'
                      >
                        link 3
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </div>
          </ul>
        </div>

        <div className='md:hidden'>{open && <SideNav />}</div>
      </header>
    </>
  );
};

export default HeaderNavbar;

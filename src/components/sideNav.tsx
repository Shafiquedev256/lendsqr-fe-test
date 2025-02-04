import { useLocation } from "react-router-dom";
const SideNav = () => {
  const location = useLocation();
  return (
    <section className=''>
      <ul className='shadow2 space-y-2 h-[100%] overflow-y-scroll w-[283px] bg-white  text-[16px] text-mainblue-0   py-4 font-custom'>
        <li className='mx-3 text-[16px] text-mainblue-0 flex flex-row items-center space-x-3 py-2 px-4'>
          <img src='/icones/briefcase 1.svg' alt='' />
          <span>Switch Organization</span>
        </li>
        <li className='border-l-4 border-l-white hover:opacity-100 hover:bg-[#39CDCC] border-0 hover:border-l-4 hover:border-l-[#39CDCC] hover:bg-opacity-5 text-[16px] py-2 px-4 text-mainblue-0 opacity-60 flex flex-row items-center space-x-3'>
          <img src='/icones/home 1.svg' alt='' />
          <span>Dashboard</span>
        </li>
        <li className='py-2 px-4 mt-4 text-[12px] text-[#545F7D]'>CUSTOMERS</li>
        <li
          className={`${location.pathname == "/dashboard/user" && "opacity-100 bg-[#39CDCC] border-0 border-l-4 border-l-[#39CDCC] bg-opacity-5 "} border-l-4 border-l-white hover:opacity-100 hover:bg-[#39CDCC] border-0 hover:border-l-4 hover:border-l-[#39CDCC] hover:bg-opacity-5  py-2 px-4 opacity-60 flex flex-row space-x-3`}
        >
          <img src='/icones/user-friends 1.svg' alt='' />
          <span>Users</span>
        </li>
        <li className='border-l-4 border-l-white hover:opacity-100 hover:bg-[#39CDCC] border-0 hover:border-l-4 hover:border-l-[#39CDCC] hover:bg-opacity-5 py-2 px-4 opacity-60 flex flex-row space-x-3'>
          <img src='/icones/users 1.svg' alt='' />
          <span>Guarantors</span>
        </li>
        <li className='border-l-4 border-l-white hover:opacity-100 hover:bg-[#39CDCC] border-0 hover:border-l-4 hover:border-l-[#39CDCC] hover:bg-opacity-5 py-2 px-4 opacity-60 flex flex-row space-x-3'>
          <img src='/icones/sack 1.svg' alt='' />
          <span>Loans</span>
        </li>
        <li className='border-l-4 border-l-white hover:opacity-100 hover:bg-[#39CDCC] border-0 hover:border-l-4 hover:border-l-[#39CDCC] hover:bg-opacity-5 py-2 px-4 opacity-60 flex flex-row space-x-3'>
          <img src='/icones/handshake-regular 1.svg' alt='' />
          <span>Decision Models</span>
        </li>
        <li className='border-l-4 border-l-white hover:opacity-100 hover:bg-[#39CDCC] border-0 hover:border-l-4 hover:border-l-[#39CDCC] hover:bg-opacity-5 py-2 px-4 opacity-60 flex flex-row space-x-3'>
          <img src='/icones/piggy-bank 1.svg' alt='' />
          <span> Savings</span>
        </li>
        <li className='border-l-4 border-l-white hover:opacity-100 hover:bg-[#39CDCC] border-0 hover:border-l-4 hover:border-l-[#39CDCC] hover:bg-opacity-5 py-2 px-4 opacity-60 flex flex-row space-x-3'>
          <img src='/icones/Group 104.svg' alt='' />
          <span> Loan Requests</span>
        </li>
        <li className='border-l-4 border-l-white hover:opacity-100 hover:bg-[#39CDCC] border-0 hover:border-l-4 hover:border-l-[#39CDCC] hover:bg-opacity-5 py-2 px-4 opacity-60 flex flex-row space-x-3'>
          <img src='/icones/user-check 1.svg' alt='' />
          <span> Whitelist</span>
        </li>
        <li className='border-l-4 border-l-white hover:opacity-100 hover:bg-[#39CDCC] border-0 hover:border-l-4 hover:border-l-[#39CDCC] hover:bg-opacity-5 py-2 px-4 opacity-60 flex flex-row space-x-3'>
          <img src='/icones/user-times 1.svg' alt='' />
          <span>Karma</span>
        </li>
        <li className='py-2 px-4 mt-4 text-[12px] text-[#545F7D]'>
          BUSINESSES
        </li>
        <li className='border-l-4 border-l-white hover:opacity-100 hover:bg-[#39CDCC] border-0 hover:border-l-4 hover:border-l-[#39CDCC] hover:bg-opacity-5 py-2 px-4 opacity-60 flex flex-row space-x-3'>
          <img src='/icones/briefcase 1 (1).svg' alt='' />
          <span>Organization</span>
        </li>
        <li className='border-l-4 border-l-white hover:opacity-100 hover:bg-[#39CDCC] border-0 hover:border-l-4 hover:border-l-[#39CDCC] hover:bg-opacity-5 py-2 px-4 opacity-60 flex flex-row space-x-3'>
          <img src='/icones/Group 104.svg' alt='' />
          <span>Loan Products</span>
        </li>
        <li className='border-l-4 border-l-white hover:opacity-100 hover:bg-[#39CDCC] border-0 hover:border-l-4 hover:border-l-[#39CDCC] hover:bg-opacity-5 py-2 px-4 opacity-60 flex flex-row space-x-3'>
          <img src='/icones/np_bank_148501_000000 1.svg' alt='' />
          <span>Savings Products</span>
        </li>
        <li className='border-l-4 border-l-white hover:opacity-100 hover:bg-[#39CDCC] border-0 hover:border-l-4 hover:border-l-[#39CDCC] hover:bg-opacity-5 py-2 px-4 opacity-60 flex flex-row space-x-3'>
          <img src='/icones/coins-solid 1.svg' alt='' />
          <span>Fees and Charges</span>
        </li>
        <li className='border-l-4 border-l-white hover:opacity-100 hover:bg-[#39CDCC] border-0 hover:border-l-4 hover:border-l-[#39CDCC] hover:bg-opacity-5 py-2 px-4 opacity-60 flex flex-row space-x-3'>
          <img src='/icones/icon.svg' alt='' />
          <span>Transactions</span>
        </li>
        <li className='border-l-4 border-l-white hover:opacity-100 hover:bg-[#39CDCC] border-0 hover:border-l-4 hover:border-l-[#39CDCC] hover:bg-opacity-5 py-2 px-4 opacity-60 flex flex-row space-x-3'>
          <img src='/icones/galaxy 1.svg' alt='' />
          <span>Services</span>
        </li>
        <li className='border-l-4 border-l-white hover:opacity-100 hover:bg-[#39CDCC] border-0 hover:border-l-4 hover:border-l-[#39CDCC] hover:bg-opacity-5 py-2 px-4 opacity-60 flex flex-row space-x-3'>
          <img src='/icones/user-cog 1.svg' alt='' />
          <span> Service Account</span>
        </li>
        <li className='border-l-4 border-l-white hover:opacity-100 hover:bg-[#39CDCC] border-0 hover:border-l-4 hover:border-l-[#39CDCC] hover:bg-opacity-5 py-2 px-4 opacity-60 flex flex-row space-x-3'>
          <img src='/icones/scroll 1.svg' alt='' />
          <span>Settlements</span>
        </li>
        <li className='hover:opacity-100 hover:bg-[#39CDCC] border-0 border-l-4 border-l-white hover:border-l-4 hover:border-l-[#39CDCC] hover:bg-opacity-5 py-2 px-4 opacity-60 flex flex-row space-x-3'>
          <img src='/icones/chart-bar 2.svg' alt='' />
          <span>Reports</span>
        </li>
        <li className='py-2 px-4 mt-4 text-[12px] text-[#545F7D]'>SETTINGS</li>
        <li className='border-l-4 border-l-white hover:opacity-100 hover:bg-[#39CDCC] border-0 hover:border-l-4 hover:border-l-[#39CDCC] hover:bg-opacity-5 py-2 px-4 opacity-60 flex flex-row space-x-3'>
          <img src='/icones/sliders-h 1.svg' alt='' />
          <span>Preferences</span>
        </li>
        <li className='border-l-4 border-l-white hover:opacity-100 hover:bg-[#39CDCC] border-0 hover:border-l-4 hover:border-l-[#39CDCC] hover:bg-opacity-5 py-2 px-4 opacity-60 flex flex-row space-x-3'>
          <img src='/icones/badge-percent 1.svg' alt='' />
          <span>Fees and Pricing</span>
        </li>
        <li className='border-l-4 border-l-white hover:opacity-100 hover:bg-[#39CDCC] border-0 hover:border-l-4 hover:border-l-[#39CDCC] hover:bg-opacity-5 py-2 px-4 opacity-60 flex flex-row space-x-3'>
          <img src='/icones/clipboard-list 1.svg' alt='' />
          <span> Audit Logs</span>
        </li>
      </ul>
    </section>
  );
};

export default SideNav;

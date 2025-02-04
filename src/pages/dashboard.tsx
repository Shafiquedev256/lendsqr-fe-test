import HeaderNavbar from "../components/headerNavigation";
import SideNav from "../components/sideNav";
import Table_of_users from "../components/tableofUsers";

const Dashboard = () => {
  return (
    <>
      <HeaderNavbar />
      <div className='w-[100%] min-w-24  overflow-hidden'>
        <div className='bg-[#FBFBFB] h-[85vh]  flex flex-row'>
          {/** side nav bar Borrower nav */}
          <div className='hidden md:block'>
            <SideNav />
          </div>

          {/**scrolls */}
          <section className='p-4 md:p-8 font-custom h-[100%] overflow-y-scroll'>
            <div className=' '>
              <div className='text-[24px] text-mainblue-0 flex-1 py-4'>
                Users
              </div>
              <div className='flex space-x-3 md:flex-row justify-center items-center flex-col '>
                <div className=' shadow3 w-[240px] m-2 h-[160px] p-3 rounded shadow-sm bg-white'>
                  <div className='flex items-center py-2'>
                    <img src='/icones/icon (1).svg' alt='' />
                  </div>
                  <p className='text-[14px] text-[#545F7D]'>USERS</p>
                  <p className='text-[24px] font-bold text-[#213F7D]'>2,453</p>
                </div>
                <div className=' shadow3 w-[240px] m-2 h-[160px] p-3 rounded shadow-sm bg-white'>
                  <div className='flex items-center py-2'>
                    <img src='/icones/icon (2).svg' alt='' />
                  </div>
                  <p className='text-[14px] text-[#545F7D]'>ACTIVE USERS</p>
                  <p className='text-[24px] font-bold text-[#213F7D]'>2,453</p>
                </div>
                <div className=' shadow3 w-[240px] m-2 h-[160px] p-3 rounded shadow-sm bg-white'>
                  <div className='flex items-center py-2'>
                    <img src='/icones/icon (3).svg' alt='' />
                  </div>
                  <p className='text-[14px] text-[#545F7D] uppercase'>
                    Users with Loans
                  </p>
                  <p className='text-[24px] font-bold text-[#213F7D]'>12,453</p>
                </div>
                <div className=' shadow3 w-[240px] m-2 h-[160px] p-3 rounded shadow-sm bg-white'>
                  <div className='flex items-center py-2'>
                    <img src='/icones/icon (4).svg' alt='' />
                  </div>
                  <p className='text-[14px] text-[#545F7D] uppercase'>
                    Users with Savings
                  </p>
                  <p className='text-[24px] font-bold text-[#213F7D]'>
                    102,453
                  </p>
                </div>
              </div>
              <Table_of_users />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

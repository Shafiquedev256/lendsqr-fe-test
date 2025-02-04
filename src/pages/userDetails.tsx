import { Link } from "react-router-dom";
import HeaderNavbar from "../components/headerNavigation";
import SideNav from "../components/sideNav";
import { useEffect, useState } from "react";
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const UserDetails = () => {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const userInLocalStorage = localStorage.getItem("userDetails");
    if (userInLocalStorage) {
      setUser(JSON.parse(userInLocalStorage));
    }
  }, []);
  return (
    <>
      {user && (
        <>
          <HeaderNavbar />
          <div className='w-[100%] min-w-24 font-custom overflow-hidden'>
            <div className='bg-[#FBFBFB] h-[85vh]  flex flex-row'>
              <div className='hidden md:block'>
                <SideNav />
              </div>
              <section className='p-4 md:p-8  font-custom h-[100%] w-[100%] overflow-y-scroll'>
                <Link
                  to={"/dashboard/user"}
                  className='flex flex-row space-x-2 items-center'
                >
                  <img src='/icones/np_back_3007750_000000 1.svg' alt='' />{" "}
                  <div className='text-[#545F7D] text-[16px]'>
                    Back to Users
                  </div>
                </Link>
                <div className='py-3 flex md:flex-row flex-col justify-between items-center w-[100%]'>
                  <div className='text-[24px] text-mainblue-0'>
                    User Details
                  </div>
                  <div>
                    <span className='text-[14px] text-[#E4033B] text-center p-2 m-2 rounded-md border-[1px] border-[#E4033B]'>
                      BLACKLIST USER
                    </span>
                    <span className='text-[14px] text-primary-0 text-center p-2 m-2 rounded-md border-[1px] border-primary-0'>
                      ACTIVATE USER
                    </span>
                    <span></span>
                  </div>
                </div>

                <div className='bg-white p-2 shadow2'>
                  <div>
                    <div className='flex md:flex-row flex-col space-x-4 items-center'>
                      <img src='/icones/avatar (1).svg' alt='' />
                      <div className='flex flex-col space-y-1'>
                        <h3 className='text-mainblue-0 text-[22px]'>
                          {user.username}
                        </h3>
                        <p className='text-[14px] text-[#545F7D]'>
                          {user.address.zipcode}
                        </p>
                      </div>
                      <div className='border-0 px-4 mx-4 border-opacity-10 h-[100%] border-x-2 border-[#545F7D] flex flex-col items-center'>
                        <div>User’s Tier</div>
                        <div className='flex flex-row space-x-2 items-center'>
                          <img
                            src='/icones/np_star_1208084_000000 1.svg'
                            alt='staricone'
                          />
                          <img
                            src='/icones/np_star_1171151_000000 1.svg'
                            alt='staricone'
                          />
                          <img
                            src='/icones/np_star_1171151_000000 1.svg'
                            alt='staricone'
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className='text-mainblue-0 text-[22px]'>
                          ₦200,000.00
                        </h3>
                        <p className='text-[12px] text-mainblue-0'>
                          9912345678/Providus Bank
                        </p>
                      </div>
                    </div>
                  </div>
                  <ul className='flex flex-row  justify-between pt-6 px-4 text-[12px]'>
                    <li className='text-primary-0 border-0 border-b-2 border-b-primary-0'>
                      General Details
                    </li>
                    <li className='hover:text-primary-0 hover:border-b-primary-0 border-0 border-b-2 border-b-white'>
                      Documents
                    </li>
                    <li className='hover:text-primary-0 hover:border-b-primary-0 border-0 border-b-2 border-b-white'>
                      Bank Details
                    </li>
                    <li className='hover:text-primary-0 hover:border-b-primary-0 border-0 border-b-2 border-b-white'>
                      Loans
                    </li>
                    <li className='hover:text-primary-0 hover:border-b-primary-0 border-0 border-b-2 border-b-white'>
                      Savings
                    </li>
                    <li className='hover:text-primary-0 hover:border-b-primary-0 border-0 border-b-2 border-b-white'>
                      App and System
                    </li>
                  </ul>
                </div>

                <section>
                  <div className='bg-white w-[100%] overflow-y-scroll font-custom shadow2 my-6 p-4 rounded'>
                    <div>
                      <h3 className='text-[16px] text-mainblue-0'>
                        Personal Information
                      </h3>
                      <table className='w-[100%] text-left h-[100%]'>
                        <tr className='text-[10px] font-light p-10 text-[#545F7D] opacity-70'>
                          <th className='pt-5'>FULL NAME</th>
                          <th className='pt-5'>PHONE NUMBER</th>
                          <th className='pt-5'>EMAIL ADDRESS</th>
                          <th className='pt-5'>BVN</th>
                          <th className='pt-5'>GENDER</th>
                        </tr>
                        <tr className='my-6 text-[16px] text-mainblue-0'>
                          <td>{user.name}</td>
                          <td>{user.phone}</td>
                          <td>{user.email}</td>
                          <td>{user.phone}</td>
                          <td>Male</td>
                        </tr>
                        <tr className='uppercase text-[10px] font-light py-2 text-[#545F7D] opacity-70'>
                          <th className='pt-5'>Marital status</th>
                          <th className='pt-5'>Children</th>
                          <th className='pt-5'>Type of residence</th>
                        </tr>
                        <tr className='my-6 border-b border-gray-200 text-[16px] text-mainblue-0'>
                          <td className='pb-5'>Single</td>
                          <td className='pb-5'>None</td>
                          <td className='pb-5'>Parent’s Apartment</td>
                        </tr>
                      </table>
                    </div>
                    <div>
                      <h3 className='text-[16px] text-mainblue-0 pt-4'>
                        Education and Employment
                      </h3>
                      <table className='w-[100%] text-left h-[100%]'>
                        <tr className='text-[10px] uppercase font-light p-10 text-[#545F7D] opacity-70'>
                          <th className='pt-5'>level of education</th>
                          <th className='pt-5'>employment status</th>
                          <th className='pt-5'>sector of employment</th>
                          <th className='pt-5'>Duration of employment</th>
                        </tr>
                        <tr className='my-6 text-[15px] text-mainblue-0'>
                          <td>B.Sc</td>
                          <td>Employed</td>
                          <td>FinTech</td>
                          <td>2 years</td>
                        </tr>
                        <tr className='uppercase text-[10px] font-light py-2 text-[#545F7D]'>
                          <th className='pt-5'>office email</th>
                          <th className='pt-5'>Monthly income</th>
                          <th className='pt-5'>loan repayment</th>
                        </tr>
                        <tr className='my-6 border-b border-gray-200 text-[16px] text-mainblue-0'>
                          <td className='pb-5'>{user.email}</td>
                          <td className='pb-5'>₦200,000.00- ₦400,000.00</td>
                          <td className='pb-5'>40,000</td>
                        </tr>
                      </table>
                    </div>
                    <div>
                      <h3 className='text-[16px] text-mainblue-0 pt-4'>
                        Socials
                      </h3>
                      <table className='w-[100%] text-left h-[100%]'>
                        <tr className='text-[10px] uppercase font-light p-10 text-[#545F7D] opacity-70'>
                          <th className='pt-5'>Twitter</th>
                          <th className='pt-5'>Facebook</th>
                          <th className='pt-5'>Instagram</th>
                        </tr>
                        <tr className='my-6 text-[15px] text-mainblue-0'>
                          <td>@grace_effiom</td>
                          <td>Grace Effiom</td>
                          <td>@grace_effiom</td>
                        </tr>
                      </table>
                    </div>
                    <div>
                      <h3 className='text-[16px] text-mainblue-0 pt-4'>
                        Guarantor
                      </h3>
                      <table className='w-[100%] text-left h-[100%]'>
                        <tr className='text-[10px] uppercase font-light p-10 text-[#545F7D] opacity-70'>
                          <th className='pt-5'>full Name</th>
                          <th className='pt-5'>Phone Number</th>
                          <th className='pt-5'>Email Address</th>
                          <th className='pt-5'>Relationship</th>
                        </tr>
                        <tr className='my-6 text-[15px] text-mainblue-0'>
                          <td>Debby Ogana</td>
                          <td>07060780922</td>
                          <td>debby@gmail.com</td>
                          <td>Sister</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </section>
              </section>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserDetails;

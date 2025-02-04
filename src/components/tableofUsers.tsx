import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TableOfUsers = () => {
  const [users, setUsers] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeUserId, setActiveUserId] = useState<number | null>(null);
  const navigate = useNavigate();
  const [filter, setFilter] = useState(false);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (err) {
        setError("Failed to fetch users. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  const togglePopup = (userId: number) => {
    setActiveUserId(activeUserId === userId ? null : userId);
  };
  return (
    <section className='my-6 relative'>
      {filter && <FilterForm />}

      <div className='md:w-full w-[110%] overflow-scroll bg-white shadow-md p-4 rounded'>
        {loading && <p className='text-gray-500 px-4'>Loading users...</p>}
        {error && <p className='text-red-500 px-4'>{error}</p>}

        {!loading && !error && users.length > 0 && (
          <table className='w-full border-collapse'>
            {/* Table Header */}
            <thead>
              <tr className='uppercase text-[12px] text-[#545F7D]'>
                <th
                  onClick={() => setFilter((state) => !state)}
                  className='px-4 py-2 text-left'
                >
                  <span>Organization</span>
                  <img
                    src='/icones/filter-results-button.svg'
                    alt='Filter'
                    className='inline-block ml-2'
                  />
                </th>
                <th
                  onClick={() => setFilter((state) => !state)}
                  className='px-4 py-2 text-left'
                >
                  <span>Username</span>
                  <img
                    src='/icones/filter-results-button.svg'
                    alt='Filter'
                    className='inline-block ml-2'
                  />
                </th>
                <th
                  onClick={() => setFilter((state) => !state)}
                  className='px-4 py-2 text-left'
                >
                  <span>Email</span>
                  <img
                    src='/icones/filter-results-button.svg'
                    alt='Filter'
                    className='inline-block ml-2'
                  />
                </th>
                <th
                  onClick={() => setFilter((state) => !state)}
                  className='px-4 py-2 text-left'
                >
                  <span>Phone Number</span>
                  <img
                    src='/icones/filter-results-button.svg'
                    alt='Filter'
                    className='inline-block ml-2'
                  />
                </th>
                <th
                  onClick={() => setFilter((state) => !state)}
                  className='px-4  text-left'
                >
                  <span>Date Joined</span>
                  <img
                    src='/icones/filter-results-button.svg'
                    alt='Filter'
                    className='inline-block ml-2'
                  />
                </th>
                <th
                  onClick={() => setFilter((state) => !state)}
                  className='px-4 py-2 text-left'
                >
                  <span>Status</span>
                  <img
                    src='/icones/filter-results-button.svg'
                    alt='Filter'
                    className='inline-block ml-2'
                  />
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {users.map((user: any, index: any) => (
                <tr
                  key={user.id}
                  className='border-b border-gray-200 hover:bg-gray-50'
                >
                  <td className='p-4 td'>{user.company?.name || "N/A"}</td>
                  <td className='px-4 py-2 td'>{user.username}</td>
                  <td className='px-4 py-2 td'>{user.email}</td>
                  <td className='px-4 py-2 td'>{user.phone}</td>
                  <td className='px-4 py-2 td'>
                    {new Date().toLocaleDateString()}
                  </td>
                  <td className='px-4 py-2 td relative flex'>
                    <span
                      className={`py-2 px-4  rounded-[100px] w-[100px] text-[12px] ${index % 2 === 0 ? "bg-green-200 text-green-600" : "bg-red-200 text-red-600"}`}
                    >
                      {index % 2 === 0 ? "Active" : "Inactive"}
                    </span>

                    {activeUserId === user.id && (
                      <ul className='absolute top-8 right-0 p-4 w-[180px] bg-white shadow-lg rounded-md z-10'>
                        <li
                          onClick={() => {
                            localStorage.setItem(
                              "userDetails",
                              JSON.stringify(user)
                            );
                            navigate("/user/details");
                          }}
                          className='py-2 px-3 hover:bg-gray-100 cursor-pointer flex flex-row space-x-2'
                        >
                          <img src='/icones/Group.svg' alt='icone' />{" "}
                          <span>View Details</span>
                        </li>
                        <li className='py-2 px-3 hover:bg-gray-100 cursor-pointer flex flex-row space-x-2'>
                          <img
                            src='/icones/np_delete-friend_3248001_000000 1.svg'
                            alt='icone'
                          />{" "}
                          <span>Blacklist User</span>
                        </li>
                        <li className='py-2 px-3 hover:bg-gray-100 cursor-pointer flex flex-row space-x-2'>
                          <img src='/icones/Vector (2).svg' alt='icone' />{" "}
                          <span>Activate User</span>
                        </li>
                      </ul>
                    )}

                    <img
                      src='/icones/ic-more-vert-18px.svg'
                      alt=''
                      onClick={() => togglePopup(user.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className='mt-5 flex flex-row justify-between px-6'>
        <div className=' flex flex-row space-x-3 items-center'>
          <span className='text-[14px] text-gray-500'>Showing</span>
          <div className='bg-gray-200 space-x-3 p-2 rounded flex flex-row items-center text-sm'>
            <p className='text-gray-500'>{users.length}</p>
            <img src='/icones/np_next_2236826_000000 2.png' alt='' />
          </div>
        </div>
        <div className='text-gray-500 flex items-center  flex-row space-x-2'>
          <p className='bg-gray-300 p-[2px] rounded text-gray-500'>
            <img src='/icones/np_next_2236826_000000 2 (1).svg' alt='' />
          </p>

          <span className='text-black'>1</span>
          <span>2</span>
          <span>3</span>
          <span>...</span>
          <span>15</span>
          <span>16</span>
          <p className='bg-gray-300 p-[2px] rounded text-gray-500'>
            <img src='/icones/np_next_2236826_000000 1.svg' alt='' />
          </p>
        </div>
      </div>
    </section>
  );
};

export default TableOfUsers;

const FilterForm = () => {
  return (
    <div className='absolute top-10 left-3  max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg'>
      <h2 className='text-xl font-semibold mb-4'>Filter</h2>
      <form className='space-y-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Organization
          </label>
          <select className='w-full p-2 border rounded-lg'>
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Username
          </label>
          <input
            type='text'
            className='w-full p-2 border rounded-lg'
            placeholder='User'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Email
          </label>
          <input
            type='email'
            className='w-full p-2 border rounded-lg'
            placeholder='Email'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Date
          </label>
          <input type='date' className='w-full p-2 border rounded-lg' />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Phone Number
          </label>
          <input
            type='tel'
            className='w-full p-2 border rounded-lg'
            placeholder='Phone Number'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Status
          </label>
          <select className='w-full p-2 border rounded-lg'>
            <option>Select</option>
          </select>
        </div>
        <div className='flex justify-between'>
          <button
            type='reset'
            className='px-6 py-2 border text-[14px] rounded-lg'
          >
            Reset
          </button>
          <button
            type='submit'
            className='px-6 py-2 bg-primary-0 text-[14px] text-white rounded-lg'
          >
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

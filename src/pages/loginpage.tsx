import { useState } from "react";
import { useNavigate } from "react-router-dom";

type User = {
  password: string;
  email: string;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [show, setSHow] = useState<"password" | "text">("password");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<null | string>(null);
  const handleLogin = (e: any) => {
    e.preventDefault();
    if (!password || !email) {
      setError("Please fill in all the fields!");
      setTimeout(() => {
        setError(null);
      }, 5000);
      return;
    }
    localStorage.setItem("user", JSON.stringify({ password, email }));
    navigate("/dashboard");
  };
  return (
    <>
      <div className='flex relative flex-row w-[100%] overflow-hidden h-screen font-custom items-center justify-center'>
        <div className=' bg-opacity-10 md:w-2/4 h-[100%]  flex flex-col justify-center items-center'>
          <div className='w-[100%] px-5  absolute top-[25px] left-[25px]'>
            <img src='/LSQ Logo.svg' alt='lendsqrlogo' />
          </div>
          <div className=' '>
            <img src='/images/pablo-sign-in 1.png' alt='pablo - sign-in ' />
          </div>
        </div>
        <div className='relative md:w-2/4 flex flex-col justify-center font-custom  items-center loginshadow h-[100%]'>
          {error && (
            <div className='absolute top-0 left-0 w-[100%] flex justify-items-center items-center'>
              <div className='text-red-600 bg-red-100  font-custom px-4 py-2 text-[14px]   text-center rounded-2xl '>
                {error}
              </div>
            </div>
          )}
          <div className=' w-[60%] mb-6'>
            <h1 className='text-3xl text-mainblue-0 font-bold mb-2'>
              Welcome!
            </h1>
            <p className='text-gray-500 text-sm'>Enter details to login</p>
          </div>
          <div className='w-[60%]'>
            <form onSubmit={handleLogin}>
              <input
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder='Email'
                type='email '
                className='text-sm border border-gray-300 w-[100%] rounded p-3 outline-none mb-6'
              />
              <div className='flex flex-row  justify-center border border-gray-300 mb-6 w-[100%] rounded p-3'>
                <input
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder='Password'
                  type={show}
                  className='flex-1 outline-none text-sm'
                />
                <span
                  className=' text-center text-sm text-primary-0'
                  onClick={() =>
                    setSHow((state) =>
                      state == "password" ? "text" : "password"
                    )
                  }
                >
                  {show == "text" ? "Hide" : "Show"}
                </span>
              </div>
              <p className='tracking-wider text-xs mb-6 text-primary-0'>
                FORGOT PASSWORD?
              </p>
              <button className='bg-primary-0 text-white p-2 text-center rounded-md w-[100%]'>
                LOG IN{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

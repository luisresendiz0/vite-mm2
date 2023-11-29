import { Outlet, Link } from "react-router-dom"
import { useStore } from "../../../store/store";

const MenuItem = ({to, text}: {to: string, text: string }) => {
  return (
    <li className="mb-2">
      <Link to={to}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        {text}
      </Link>
    </li>
  )
}

const Dashboard = () => {
  const signOut = useStore(store => store.signOut);
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-base-300">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Media Manager</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </button>
              <button className="flex ms-2 md:me-24 items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="Media Manager logo"
                />
                <span className="btn btn-ghost text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Media Manager</span>
              </button>
            </div>
            <div className="flex items-center">
              <button className="btn btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <button className="btn btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <aside className="fixed top-0 left-0 z-40 w-72 h-screen pt-20 transition-transform -translate-x-full bg-base-200 sm:translate-x-0 flex flex-col justify-between">
        <ul className="menu w-full">
          <MenuItem to="/app" text="Home" />
          <MenuItem to="/app/stores" text="Stores" />
          <MenuItem to="/app/brands" text="Brands" />
        </ul>
        <div className="p-4 flex justify-between">
          <div className="avatar">
            <div className="w-10 mr-2 mask mask-squircle">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div>
            <p className="font-bold">Luis Resendiz</p>
            <p className="text-sm">luis.resendiz@digitex.ltd</p>
          </div>
          <button className="btn btn-circle" onClick={signOut}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      </aside>
      <div className="mt-16 sm:ml-72 p-4">
        <Outlet />
      </div>
    </div>
  )
};

export default Dashboard;
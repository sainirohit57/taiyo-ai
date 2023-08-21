import { useState } from "react";
import { Link } from "react-router-dom";

type Props = { children: React.ReactNode };

const Drawer = ({ children }: Props): JSX.Element => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const openDrawer = () => {
    setIsMobileOpen(true);
  };

  const closeDrawer = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-4 p-4 md:p-0">
        <div className="relative md:col-span-2">
          {/* Desktop Drawer */}
          <aside className="hidden md:block w-full top-0 left-0 h-full bg-gray-300 text-black h-100vh">
            <nav className="pt-12">
              <ul>
                <li className="font-semibold text-lg px-4 hover:bg-gray-400">
                  <Link className="py-2 block" to="/">
                    Contact
                  </Link>
                </li>
                <li className="font-semibold text-lg px-4 hover:bg-gray-400">
                  <Link className="py-2 block" to="/charts-and-maps">
                    Charts and Maps
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden fixed top-0 left-0 z-50 h-12 w-12 bg-gray-900 text-white flex items-center justify-center"
            onClick={openDrawer}
          >
            {/* Drawer button */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile Drawer */}
          {isMobileOpen && (
            <div className="md:hidden fixed top-0 left-0 z-40 h-full w-64 bg-gray-900 text-white">
              <nav className="pt-20">
                <ul>
                  <li className="py-2 px-4 hover:bg-gray-800">
                    <Link to="/">Contact</Link>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-800">
                    <Link to="./charts-and-maps">Charts and Maps</Link>
                  </li>
                </ul>
              </nav>
              <button
                className="absolute top-4 right-4 text-gray-300"
                onClick={closeDrawer}
              >
                {/* Close button */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}

          {/* Semi-transparent background for mobile */}
          {isMobileOpen && (
            <div
              className="md:hidden fixed top-0 left-0 z-30 h-full w-full bg-black opacity-25"
              onClick={closeDrawer}
            ></div>
          )}
        </div>
        <div className="col-span-12 md:col-span-10">{children}</div>
      </div>
    </>
  );
};

export default Drawer;

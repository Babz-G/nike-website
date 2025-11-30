import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
export function Nav() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className="flex flex-wrap items-center justify-between">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>

      {/* Burger button */}
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className="rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 lg:hidden"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu list */}
      <div
        className={`${
          isMobileMenuShown === false && "hidden"
        } w-full lg:block lg:w-auto`}
      >
        <ul className="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-lg lg:flex-row lg:space-x-8 lg:border-none lg:bg-transparent">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`cursor-pointer rounded px-3 py-2 ${
                  i === 0
                    ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500 "
                    : "hover:bg-gray-100"
                }`}
                key={route}
              >
                <a>{route}</a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Cart button */}
      <div className="fixed bottom-4 left-4 lg:static">
        <div className="flex-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}

// import { TbShoppingBag } from "react-icons/tb";
// import NikeLogo from "../assets/nike-logo.svg?react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { useState } from "react";

// const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
// export function Nav() {
//   const [isMobileShown, setIsMobileShown] = useState(false);
//   return (
//     <nav className="flex flex-wrap items-center justify-between">
//       <a href="#">
//         <NikeLogo className="h-20 w-20" />
//       </a>
//       <button
//         onClick={() => setIsMobileShown(!isMobileMenuShown)}
//         className=" lg:hidden hover:bg-gray-100 p-2 focus:ring-2 focus:ring-gray-200 rounded-lg"
//       >
//         <RxHamburgerMenu size={25} />
//       </button>
//       <div
//         className={`${!isMobileMenuShown && "hidden"} w-full lg:w-auto lg:block`}
//       >
//         <ul className="lg:space-x-8 flex flex-col lg:flex-row border-gray-100 lg:border-none bg-gray-50 lg:bg-transparent text-lg rounded-lg border p-4">
//           {ROUTES.map((route, i) => {
//             return (
//               <li
//                 className={`px-3 py-2 cursor-pointer rounded ${i === 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"}`}
//                 key={route}
//               >
//                 {route}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//       <div className="fixed bottom-4 left-4 lg:static">
//         <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md">
//           <TbShoppingBag />
//         </div>
//       </div>
//     </nav>
//   );
// }

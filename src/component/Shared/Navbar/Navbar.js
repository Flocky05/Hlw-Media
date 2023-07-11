import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl "> Hlw Media</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end px-3">
          <a className="btn btn-ghost normal-case text-xl ">Blog</a>
          <a className="btn btn-ghost normal-case text-xl ">About</a>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          ></div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://scontent.fdac19-1.fna.fbcdn.net/v/t39.30808-1/358608611_3543955512592628_6554928721971659591_n.jpg?stp=dst-jpg_p240x240&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=aHcdYkMYLWIAX8ECL5u&_nc_ht=scontent.fdac19-1.fna&oh=00_AfDSSZ7ImrJQxku_xw5lULGOlWyFDI-GXaQocOKC2xJ1DQ&oe=64B2B6C8"
                alt=""
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

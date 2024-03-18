"use client";

import React, { FC, useEffect } from "react";

const PrimaryMenu: FC = () => {
  useEffect(() => {
    const init = async () => {
      const { Collapse, Dropdown, initTWE } = await import("tw-elements");
      initTWE({ Collapse, Dropdown });
    };
    init();
  }, []);

  return (
    <>
      <button
        aria-controls="primary-menu"
        aria-expanded="false"
        aria-label="Toggle navigation"
        className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
        data-twe-collapse-init
        data-twe-target="#primary-menu"
        type="button"
      >
        <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              fillRule="evenodd"
            />
          </svg>
        </span>
      </button>
      <div
        className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
        data-twe-collapse-item
        id="primary-menu"
      >
        <ul
          className="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
          data-twe-navbar-nav-ref
        >
          <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
            <a
              className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              data-twe-nav-link-ref
              href="#"
            >
              Home
            </a>
          </li>
          <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
            <a
              className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              data-twe-nav-link-ref
              href="#"
            >
              Explore
            </a>
          </li>
          <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
            <a
              className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              data-twe-nav-link-ref
              href="#"
            >
              Community
            </a>
          </li>
          <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
            <a
              className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              data-twe-nav-link-ref
              href="#"
            >
              News
            </a>
          </li>
          <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
            <a
              className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              data-twe-nav-link-ref
              href="#"
            >
              Events
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PrimaryMenu;

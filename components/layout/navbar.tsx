"use client";

import Image from "next/image";
import Link from "next/link";
import { useGeneralData } from "@/lib/api/GeneralApi";

export default function Navbar() {
  const { data, loading, error } = useGeneralData();

  if (loading) {
    return (
      <nav className="bg-neutral-primary fixed w-full top-0 z-20 p-4">
        <p className="text-heading">Loading...</p>
      </nav>
    );
  }

  if (error || !data) {
    return (
      <nav className="bg-neutral-primary fixed w-full top-0 z-20 p-4">
        <p className="text-red-500">Failed to load header</p>
      </nav>
    );
  }

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-default">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src={data.header.logo}
            alt="Logo"
            width={120}
            height={40}
            className="h-7 w-auto"
          />
        </Link>

        {/* CTA + Mobile button */}
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <button className="text-black bg-brand hover:bg-brand-strong shadow-xs font-medium rounded-base text-sm px-3 py-2">
            Get started
          </button>

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft"
          >
            <span className="sr-only">Open main menu</span>
            ☰
          </button>
        </div>

        {/* Menu */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col md:flex-row md:space-x-8 font-medium">

            {data.header.headerCategories.map((category) => (
              <li key={category.id} className="relative group">
                <Link
                  href={`/${category.slug}`}
                  className="block py-2 px-3 text-heading hover:text-fg-brand"
                >
                  {category.name.en}
                </Link>

                {/* Dropdown */}
                {category.children.length > 0 && (
                  <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-base min-w-[200px]">
                    {category.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          href={`/${category.slug}/${child.slug}`}
                          className="block px-4 py-2 text-sm text-heading hover:bg-neutral-tertiary"
                        >
                          {child.name.en}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>
  );
}

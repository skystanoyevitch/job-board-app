// import * as React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

export interface NavProps {
  navLinks: {
    id: number;
    name: string;
    url: string;
  }[];
}

export function Navbar(props: NavProps) {
  const router = useRouter();
  const handleClick = (e: any) => {
    // console.log("button clicked!");
    router.push("/AddJobPage");
  };
  return (
    <>
      <section className="w-full shadow-sm">
        <nav className="flex justify-between items-center p-4">
          <div className="flex space-x-8">
            {props.navLinks.map((link, i) => (
              <ul key={i}>
                <li>
                  <Link href={link.url}>{link.name}</Link>
                </li>
              </ul>
            ))}
          </div>

          <button
            type="button"
            className="btn btn-outline btn-primary dark:btn-outline dark:btn-accent "
            onClick={handleClick}
          >
            <span className="">Post Job for Free</span>
          </button>
        </nav>
      </section>
    </>
  );
}

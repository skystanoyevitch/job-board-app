import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export interface NavProps {
  navLinks: {
    id: number;
    name: string;
    url: string;
  }[];
}

export function Navbar(props: NavProps) {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

  return (
    <>
      <section className="w-full shadow-md z-0">
        <div className="md:hidden p-4">
          <button
            type="button"
            className="space-y-2"
            onClick={() => setOpenMenu((prevCheck) => !prevCheck)}
          >
            <span className="block w-5 h-0.5 bg-gray-600"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
            <span className="block w-8 h-0.5 bg-gray-600"></span>
          </button>
        </div>

        {openMenu && (
          <div className="z-10 container mx-auto w-2/3">
            <nav className="p-8 space-y-8 text-center flex flex-col">
              <div className="space-y-8 font-mono text-lg">
                {props.navLinks.map((link, i) => (
                  <ul key={i}>
                    <li>
                      <Link
                        href={link.url}
                        onClick={() => setOpenMenu(!openMenu)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  </ul>
                ))}

                <button
                  className="btn btn-primary btn-md"
                  onClick={() => setOpenMenu(!openMenu)}
                >
                  <Link href="/AddJobPage">
                    <span className="font-sans text-md">Post a Job</span>
                  </Link>
                </button>

                <button>
                  <Link className="btn btn-md btn-outline" href="/">
                    Login/Signup
                  </Link>
                </button>
              </div>
            </nav>
          </div>
        )}

        <nav className="hidden md:visible md:flex justify-between items-center p-4">
          <div className="flex font-mono lg:text-xl space-x-8">
            {props.navLinks.map((link, i) => (
              <ul key={i}>
                <li>
                  <Link href={link.url}>{link.name}</Link>
                </li>
              </ul>
            ))}
          </div>

          <div className="space-x-4">
            <Link className="btn btn-primary" href="/AddJobPage">
              Post Job for Free
            </Link>
            <Link className="btn btn-outline" href="/">
              Login/Signup{" "}
            </Link>
          </div>
        </nav>
      </section>
    </>
  );
}

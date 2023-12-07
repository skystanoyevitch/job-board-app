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

  const handleClick = (e: any) => {
    router.push("/AddJobPage");
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <section className="w-full shadow-sm z-0">
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
          <div className="h-[100vh] z-10 container mx-auto w-2/3">
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
              </div>

              <button
                type="button"
                className="btn btn-outline btn-primary dark:btn-outline dark:btn-accent"
                onClick={handleClick}
              >
                <span className="font-sans text-md">Post a Job</span>
              </button>
            </nav>
          </div>
        )}

        <nav className="hidden md:visible md:flex justify-between items-center p-4">
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

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const navLinks = [
  { id: 0, name: "Home", url: "/" },
  { id: 1, name: "Companies", url: "/AddCompaniesPage" },
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen">
      <Navbar navLinks={navLinks} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

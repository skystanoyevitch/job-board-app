import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const navLinks = [
  { id: 0, name: "Home", url: "/" },
  { id: 1, name: "Companies", url: "/AddCompaniesPage" },
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar navLinks={navLinks} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

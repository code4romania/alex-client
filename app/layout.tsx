import "./globals.css";
import Head from "next/head";
import Navbar from "../components/layout/navbar";
import Navheader from "../components/layout/navheader";

export const metadata = {
  title: "ALEX",
  description: "ALEX client",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-white">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body className="h-full">
        <div>
          <Navbar />
          <div className="lg:pl-72">
            <Navheader />
            <main className="py-5">
              {/* Content is placed here */}
              <div className="px-4 sm:px-2 lg:px-5">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

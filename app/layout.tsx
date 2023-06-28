import "./globals.css";
import Head from "next/head";

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
    <html lang="en" className="h-full">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body className="h-full">{children}</body>
    </html>
  );
}

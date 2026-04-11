import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../ImportBsJS";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRM Dashboard",
  description: "CRM UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>

        <div className="backgroundImage">

          {/* Navbar */}
          <Navbar />

          {/* Sidebar + Page Content */}
          <div className="dashboardLayout">

            <Sidebar />

            <main className="mainContent">
              {children}
            </main>

          </div>

        </div>

      </body>
    </html>
  );
}
import type { Metadata } from "next";

import 'aos/dist/aos.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

import './style.css';

export const metadata: Metadata = {
  title: "Car Rental System",
  description: "Developed by Irfan Ahmed (2025)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="">
          <div className="site-wrap" id="home-section">
            <Header />
            {children}
            <Footer />
        </div>
      </body>
    </html>
  );
}

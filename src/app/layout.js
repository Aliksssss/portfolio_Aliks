import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ParticlesComponent from "@/components/particles/Particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kryptonite Agency",
  description: "Sabemos como derrotar a Superman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar/>
          <ParticlesComponent></ParticlesComponent>
          {children}
          <Footer className='footer'/>
          </div>
      </body>
    </html>
  );
}

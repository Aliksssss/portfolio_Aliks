'use client'
import Link from "next/link"
import styles from './navbar.module.css'
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {

  const navLinks = [
    {
      id: "agencia",
      title: "Agencia",
      url: '/agencia'
    },
    {
      id: "central",
      title: "Central de medios",
      url: '/central'
    },
    {
      id: "consultora",
      title: "Consultora",
      url: '/consultoria'
    },
    {
      id: "clientes",
      title: "Clientes",
      url: '/clientes'
    },
    {
      id: "contacto",
      title: "Contacto",
      url: '/contacto'
    },
    {
      id: "nosotros",
      title: "Nosotros",
      url: '/nosotros'
    },
  ];

  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.logo && styles.container}>
        <Link href='/'><Image src='/kriptonite-logo.png' alt="Kryptonite" width={100} height={50} className="animate-flip-up animate-infinite animate-duration-[5000ms] animate-delay-1000 animate-ease-linear"/></Link>
        <span>Kryptonite Agency</span>
      </div>
      <div className={styles.container}>
        <div className={styles.links}>
          {
            navLinks.map((link => (
              <Link
                className={`${pathName === link.url && styles.active}`}
                key={link.id}
                href={link.url}>{link.title}</Link>
            )))
          }
        </div>
        <button className={styles.button} onClick={() => setIsOpen(prev => !prev)}>Menu</button>
        {isOpen &&
          <div className={styles.mobileLinks}>
            {navLinks.map((link => (
              <Link
                className={`${pathName === link.url && styles.active}`}
                key={link.id}
                href={link.url}>{link.title}</Link>
            )))}
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar
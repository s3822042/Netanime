import React from "react";
import Link from "next/link";
import { FooterLink } from "@/utils/helper";


interface FooterProps {
  footerLinks: FooterLink[];
}

const Footer: React.FC<FooterProps> = ({ footerLinks }) => {
  return (
    <footer className="bg-gray-800 p-4 fixed bottom-0 w-full">
      <div className="container w-full text-center text-white">
        {footerLinks.map(link => (
          <Link href={link.href}>
            <p className="text-white font-bold ml-4">{link.label}</p>
          </Link>
        ))}
      </div>
    </footer>
  );
};


export default Footer;

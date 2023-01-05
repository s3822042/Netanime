import React from "react";
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import { FooterLink } from "@/utils/helper";

interface BaseLayoutProps {
  children: React.ReactElement;
  showHeader?: boolean;
  showFooter?: boolean;
}


const footerLinks: FooterLink[] = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

const BaseLayout: React.FC<BaseLayoutProps> = ({
                                                 children,
                                                 showFooter = true,
                                                 showHeader = true
                                               }) => {
  return (
    <main>
      {showHeader && <Header />}

      <div className="app">{children}</div>

      {showFooter && <Footer footerLinks={footerLinks} />}
    </main>
  );
};

export default BaseLayout;

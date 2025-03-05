import React from "react";
import Logo from "../assets/images/logo-no-background.png";
import { footer } from "../data";
// import Link from "next/link";

const Footer = () => {
  const { social, copyright } = footer;
  
  // Navigation columns - you can move this to your data file
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Team", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Community", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top section with logo and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* <Link href="#" className="mb-6 md:mb-0"> */}
            <img src={Logo || "/placeholder.svg"} alt="Logo" className="h-12" />
          {/* </Link> */}
          
          <div className="flex gap-x-4">
            {social.map((item, index) => (
              <a 
                key={index} 
                href={item.href}
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-accent flex justify-center items-center transition-colors duration-300"
                aria-label={`Social media link ${index + 1}`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        
        {/* Middle section with navigation columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12 border-b border-gray-700 pb-12">
          {/* Newsletter subscription */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4 text-sm">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-700 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent hover:bg-accent/80 rounded px-4 py-2 text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          
          {/* Navigation columns */}
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-accent text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom section with copyright and additional links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            &copy; {copyright}
          </div>
          <div className="flex gap-x-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-accent transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import {
  resourcesLinks,
  platformLinks,
  communityLinks,
  banger,
  icons,
} from "../constants";

const Footer = () => {
  return (
    <div className="flex flex-col min-h-96">
      {/* Main Content Section */}
      <div className="flex-grow">
        {/* Other page content goes here */}
      </div>

      {/* Footer Section */}
      <footer className="py-10 border-t bg-neutral-100 text-neutral-800 border-neutral-300">
        <div className="px-4 mx-auto">
          <div className="grid grid-cols-1 gap-6 mr-0 sm:grid-cols-2 lg:grid-cols-7">
            {/* Popular Categories Section */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Popular Categories</h3>
              <ul className="space-y-2">
                {resourcesLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-neutral-900"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trending Searches Section */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Trending Searches</h3>
              <ul className="space-y-2">
                {platformLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-neutral-900"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Us Section */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">About Us</h3>
              <ul className="space-y-2">
                {communityLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-neutral-900"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* OLX Section */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">OLX</h3>
              <ul className="space-y-2">
                {banger.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-neutral-900"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us Section */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>

              {/* Social Media Icons Row */}
              <div className="flex mb-4 space-x-3">
                {icons.slice(2, 6).map((icon, index) => (
                  <img
                    key={index}
                    src={icon.src}
                    alt={icon.alt}
                    className="w-6 h-6 hover:opacity-75"
                  />
                ))}
              </div>

              {/* App Store and Other Icons */}
              <div className="flex w-20 h-20 gap-3">
                {[icons[6], icons[0], icons[7]].map((icon, index) => (
                  <img
                    key={index}
                    src={icon.src}
                    alt={icon.alt}
                    className="w-32 hover:opacity-75"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="w-full py-4 mt-16 -mb-10 text-white bg-teal-900">
          <div className="container flex justify-between px-4 mx-auto">
            <p className="text-sm">
              Free Classifieds in Pakistan. © 2006-2024 OLX
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

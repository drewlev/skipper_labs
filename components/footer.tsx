"use client";

import Link from "next/link";
// import { Mail, Twitter, Linkedin, Heart } from "lucide-react";
import Image from "next/image";
// const navigation = {
//   categories: [
//     {
//       id: "skipper",
//       name: "Skipper",
//       sections: [
//         {
//           id: "about",
//           name: "About",
//           items: [
//             { name: "About", href: "/about" },
//             { name: "Use Cases", href: "/use-cases" },
//             { name: "Pricing", href: "/pricing" },
//           ],
//         },
//         {
//           id: "product",
//           name: "Product",
//           items: [
//             { name: "Platform", href: "/platform" },
//             { name: "Dashboard", href: "/dashboard" },
//             { name: "Integrations", href: "/integrations" },
//           ],
//         },
//         {
//           id: "resources",
//           name: "Resources",
//           items: [
//             { name: "Blog", href: "/blog" },
//             { name: "Docs", href: "/docs" },
//             { name: "Changelog", href: "/changelog" },
//           ],
//         },
//         {
//           id: "company",
//           name: "Company",
//           items: [
//             { name: "Contact", href: "/contact" },
//             { name: "Terms", href: "/terms" },
//             { name: "Privacy", href: "/privacy" },
//           ],
//         },
//       ],
//     },
//   ],
// };

// const iconLinkStyle = `hover:-translate-y-1 border rounded-xl p-2.5 transition-transform`;

export function Footer() {
  return (
    <footer className="mx-auto w-full border-t border-ali/20 px-4 text-white p-4 bg-[#0a0e1a] flex flex-col gap-4">
      <div className="mx-auto grid max-w-7xl gap-6 p-10 pb-0 md:flex md:items-center md:justify-between">
        <Link href="/">
          <Image src="/skipperLogo.svg" alt="Skipper" width={100} height={100} />
        </Link>
        <p className="text-center text-xs text-primary/60 md:text-left text-white">
          Skipper helps you simplify operations, streamline communication, and
          stay organized. Built for growing teams who want clarity without
          complexity.
        </p>
      </div>
      {/* <div className="border-b border" /> */}

      {/* <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="border-b border" />
        <div className="py-10">
          {navigation.categories.map((category) => (
            <div
              key={category.name}
              className="grid grid-cols-2 gap-6 md:flex md:justify-between"
            >
              {category.sections.map((section) => (
                <div key={section.name} className="text-white">
                  <ul
                    role="list"
                    className="flex flex-col space-y-2"
                    aria-labelledby={`${category.id}-${section.id}-heading`}
                  >
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-slate-600 hover:text-black text-white"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="border-b border" />
      </div> */}

      <div className="flex flex-wrap justify-center gap-y-6 px-6">
        {/* <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="mailto:hello@skipper.app"
            aria-label="Email"
            className={iconLinkStyle}
          >
            <Mail className="h-5 w-5" />
          </Link>
          <Link
            href="https://twitter.com/skipper"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className={iconLinkStyle}
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/skipper"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className={iconLinkStyle}
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div> */}
      </div>

      <div className="mx-auto mb-10 mt-10 flex flex-col items-center text-center text-xs text-slate-600 dark:text-slate-400 md:max-w-7xl">
        <div className="flex items-center gap-1">
          <span>© {new Date().getFullYear()}</span>
          <span>Skipper, Inc.</span>
          {/* <span>— Built with</span>
          <Heart className="mx-1 h-4 w-4 animate-pulse text-red-600" />
          <span>by the Skipper team</span> */}
        </div>
      </div>
    </footer>
  );
}

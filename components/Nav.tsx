"use client";

import { useEffect, useState } from "react";
import { FiArchive } from "react-icons/fi";
import { navSections } from "@/data/nav";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionElements = navSections
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "border-b border-neutral-400 bg-nav-ivory shadow-archivum-sm"
          : "border-b border-transparent bg-nav-ivory/95"
      }`}
    >
      <nav
        aria-label="Primary"
        className="section-container flex h-16 items-center justify-between sm:h-20"
      >
        <a
          href="#hero"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80 sm:gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center border border-neutral-400 bg-white shadow-archivum-sm">
            <FiArchive
              className="h-5 w-5 text-archivum-red"
              aria-hidden="true"
            />
          </span>
          <span className="font-serif text-xl font-semibold text-deep-space-blue sm:text-2xl">
            Archivum
          </span>
        </a>

        <ul className="flex max-w-[58vw] items-center gap-0.5 overflow-x-auto sm:max-w-none sm:gap-1">
          {navSections.map(({ id, label }) => {
            const isActive = activeSection === id;

            return (
              <li key={id} className="shrink-0">
                <a
                  href={`#${id}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-sm px-2.5 py-1.5 text-sm font-medium transition-all duration-200 sm:px-3 sm:text-base ${
                    isActive
                      ? "bg-oxford-blue text-snow"
                      : "text-deep-space-blue hover:bg-neutral-100 hover:text-oxford-blue"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

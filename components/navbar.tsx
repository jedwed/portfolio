'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './theme-toggle';
import { GithubIcon, LinkedInIcon, MusicNoteIcon } from './icons';

const navItems = [
  { path: '/', text: 'Home' },
  { path: '/projects', text: 'Projects' },
  { path: '/blog', text: 'Blog' },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="md:overflow-y-auto w-full md:w-[15%] md:h-screen flex flex-row md:flex-col gap-5 items-center text-center py-3 justify-center">
      <div className="hidden md:block hover:text-purple-300">
        <Link href="/">
          <h1 className="font-bold text-xl">Edward Qian</h1>
        </Link>
      </div>
      <div className="hidden md:flex gap-2">
        <a
          href="https://github.com/jedwed"
          className="hover:text-purple-300"
          target="_blank"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/edward-q-6001b5221/"
          className="hover:text-purple-300"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
      </div>
      <div className="flex flex-row md:flex-col">
        {navItems.map(({ path, text }, index) => (
          <Link
            key={index}
            href={path}
            className={clsx(
              'flex items-center my-1 hover:text-purple-300',
              path === pathname && 'text-purple-600'
            )}
          >
            <MusicNoteIcon />
            {text}
          </Link>
        ))}
        <a
          href="https://jedwed.github.io/resume/resume.pdf"
          target="_blank"
          className="flex items-center my-1 hover:text-purple-300"
        >
          <MusicNoteIcon />
          Résumé
        </a>
      </div>
      <ThemeToggle />
    </div>
  );
}

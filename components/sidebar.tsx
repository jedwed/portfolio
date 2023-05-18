import Link from 'next/link';
import ThemeToggle from './theme-toggle';
import { GithubIcon, LinkedInIcon, MusicNoteIcon } from './icons';

const navItems = [
  { path: '/', text: 'Home' },
  { path: '/projects', text: 'Projects' },
  { path: '/blog', text: 'Blog' },
];

export default function Sidebar() {
  return (
    <div className="h-full w-[15%] flex flex-col gap-5 items-center text-center py-3 justify-center">
      <div>
        <Link href="/">
          <h1 className="font-bold text-xl">Edward Qian</h1>
        </Link>
      </div>
      <div className="flex gap-2">
        <a href="https://github.com/jedwed">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/edward-q-6001b5221/">
          <LinkedInIcon />
        </a>
      </div>
      <div className="flex flex-col">
        {navItems.map(({ path, text }, index) => (
          <Link key={index} href={path} className="flex items-center my-1">
            <MusicNoteIcon />
            {text}
          </Link>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          className="flex items-center my-1"
        >
          <MusicNoteIcon />
          Résumé
        </a>
      </div>
      <ThemeToggle />
    </div>
  );
}

'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
// import musicNoteIcon from '../public/music-note.svg';
// import githubIcon from '../public/github.svg';
// import linkedinIcon from '../public/linkedin.svg';

import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  MusicNoteIcon,
  SunIcon,
} from './icons';

const navItems = [
  { path: '/', text: 'Home' },
  { path: '/skills', text: 'Skills' },
  { path: '/projects', text: 'Projects' },
  { path: '/resume', text: 'Resume' },
];

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="h-full w-[15%] flex flex-col gap-5 items-center text-center py-3 justify-center">
      <div>
        {/* TODO: Logo */}
        <Link href="/">
          <h1 className="font-bold text-2xl">Edward Qian</h1>
        </Link>
      </div>
      <div className="flex flex-col">
        {navItems.map(({ path, text }, index) => (
          <Link key={index} href={path} className="flex items-center my-1">
            <MusicNoteIcon />
            {text}
          </Link>
        ))}
      </div>
      <div className="flex gap-2">
        <a href="https://github.com/jedwed">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/edward-q-6001b5221/">
          <LinkedInIcon />
        </a>
      </div>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
}

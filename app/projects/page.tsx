import PageWrapper from '@/components/page-wrapper';
import ProjectCard from '@/components/project-card';
import structs from 'public/structs.png';
import bitnurture from 'public/bitnurture.png';
import onlineDebugger from 'public/onlineDebugger.png';
import { IProject } from '@/types';

const projects: IProject[] = [
  {
    name: 'structs.sh',
    description:
      'A learning platform for visualising data structures and algorithms.',
    image: structs,
    github: 'https://github.com/csesoc/structs.sh',
    link: 'https://structs.sh',
    technologies: ['React', 'TypeScript', 'Material UI', 'SVG.js'],
  },
  {
    name: 'BitNurture',
    description:
      'A browser extension for a password manager that securely encrypts your passwords.',
    image: bitnurture,
    github: 'https://github.com/jedwed/bitnurture',
    technologies: ['React', 'Material UI', 'Python', 'Flask', 'SQLite'],
  },
  {
    name: 'Online Debugger',
    description: 'An online tool to debug your C code',
    image: onlineDebugger,
    github: 'https://github.com/jedwed/online-debugger',
    link: 'https://online-debugger.onrender.com',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node',
      'Express',
      'Docker',
    ],
  },
];

export default function Projects() {
  return (
    <PageWrapper>
      <section className="flex flex-col items-center">
        <h1>Projects</h1>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </section>
    </PageWrapper>
  );
}

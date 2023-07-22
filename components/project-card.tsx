import Image from 'next/image';
import { ExternalLinkIcon, GithubIcon } from './icons';
import { IProject } from '@/types';
import Technology from './technology';

export default function ProjectCard(project: IProject) {
  return (
    <div className="flex gap-2">
      <div>
        <h2>{project.name}</h2>
        {project.description}
        <div className="flex flex-wrap">
          {project.technologies.map((technology, idx) => (
            <Technology technology={technology} key={idx} />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a href={project.github} target="_blank">
            <GithubIcon />
          </a>
          {project.link && (
            <a href={project.link} target="_blank">
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>
      <div className="w-3/5">
        <Image src={project.image} alt={project.name} />
      </div>
    </div>
  );
}

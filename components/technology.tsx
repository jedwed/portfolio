import { Technology } from '@/types';

export default function Technology({ technology }: { technology: Technology }) {
  return (
    <span className="dark:bg-indigo-950 bg-indigo-50 mr-2 my-1 p-1 rounded">
      {technology}
    </span>
  );
}

import PageWrapper from '@/components/page-wrapper';
import Welcome from '@/components/welcome';

export default function Home() {
  return (
    <PageWrapper>
      <section className="text-center">
        <Welcome />
        <p>
          My name is <b>Edward Qian</b>, and I&apos;m currently a university
          student studying and tutoring <b>Computer Science</b> at the{' '}
          <a href="https://www.unsw.edu.au" target="_blank">
            University of New South Wales
          </a>
          .
        </p>
        <p>
          I am most passionate for <b>software development</b> as well as{' '}
          <b>music</b> 🎵. At any certain point in time I am most likely either
          coding 👨‍💻, playing piano 🎹 or playing basketball 🏀.
        </p>
      </section>
    </PageWrapper>
  );
}

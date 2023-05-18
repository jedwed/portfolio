export default function Home() {
  return (
    <section>
      <h1 className="text-5xl font-bold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-400">
          Welcome
        </span>
        👋
      </h1>
      {/* <h2 className="text-3xl font-bold my-4">Welcome to my website :D</h2> */}
      <p>
        My name is <b>Edward Qian</b>, and I&apos;m currently a university
        student studying and tutoring <b>Computer Science</b> at the{' '}
        <a href="https://www.unsw.edu.au" className="underline">
          <b>University of New South Wales</b>
        </a>
        .
      </p>
      <br />
      <p>
        I am most passionate for <b>software development</b> as well as{' '}
        <b>music</b> 🎵. At any certain point in time I am most likely either
        coding 👨‍💻, playing piano 🎹 or playing basketball 🏀.
      </p>
    </section>
  );
}

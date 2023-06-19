'use client';
import TypewritterEffect from 'typewriter-effect';

export default function Welcome() {
  return (
    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-200">
      <TypewritterEffect
        onInit={(typewriter) =>
          typewriter
            .typeString('Welcome!')
            .pauseFor(100)
            .pasteString('<span style="color: initial">👋</span>', null)
            .start()
        }
      />
    </h1>
  );
}

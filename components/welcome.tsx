'use client';
import TypewritterEffect from 'typewriter-effect';

export default function Welcome() {
  return (
    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-200">
      <TypewritterEffect
        onInit={(typewriter) =>
          typewriter
            .typeString('Welcome!')
            .pasteString(
              '<span class="wave" style="color: initial">👋</span>',
              null
            )
            .start()
        }
        options={{ cursor: '' }}
      />
    </h1>
  );
}

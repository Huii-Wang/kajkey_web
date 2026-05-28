'use client';

import { useState } from 'react';
import Typewriter from './Typewriter';

type Props = {
  line1: string;
  line2: string;
};

export default function HeroHeading({ line1, line2 }: Props) {
  const [line2Started, setLine2Started] = useState(false);

  return (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-6">
      <Typewriter
        text={line1}
        onComplete={() => setLine2Started(true)}
      />
      <br />
      <span className="text-gray-300">
        <Typewriter
          text={line2}
          started={line2Started}
        />
      </span>
    </h1>
  );
}

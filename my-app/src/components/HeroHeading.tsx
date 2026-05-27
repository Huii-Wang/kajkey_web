'use client';

import { useState } from 'react';
import Typewriter from './Typewriter';

export default function HeroHeading() {
  const [line2Started, setLine2Started] = useState(false);

  return (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-6">
      <Typewriter
        text="精选工具与配件，"
        onComplete={() => setLine2Started(true)}
      />
      <br />
      <span className="text-gray-300">
        <Typewriter
          text="覆盖每一个场景"
          started={line2Started}
        />
      </span>
    </h1>
  );
}

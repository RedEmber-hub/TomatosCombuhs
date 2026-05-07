import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: '#ffcc33',
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: { min: 1, max: 3 },
        },
        move: {
          enable: true,
          speed: 1,
        },
        links: {
          enable: false,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: false,
          },
          onClick: {
            enable: false,
          },
        },
      },
    }),
    []
  );

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
}

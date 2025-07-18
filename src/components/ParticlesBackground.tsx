'use client';

import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none' as const,
        enable: true,
        outModes: {
          default: 'bounce' as const,
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.2,
      },
      shape: {
        type: 'circle' as const,
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" init={particlesInit} options={options as any} />;
};

export default ParticlesBackground;

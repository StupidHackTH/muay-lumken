const particle = {
  style: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  params: {
    particles: {
      image: {
        type: 'edge',
      },
      size: {
        anim: {
          value: 35,
          random: true,
        },
      },
      number: {
        value: 35,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      opacity: {
        value: 0.8,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.5,
          sync: false,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
      },
    },
  },
}

export default particle

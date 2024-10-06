const characters = {
    male: {
      position: {
        x: 100,
        y: 150
      },
      image: {
        src: './img/male.png'
      },
      animate: true,
      name: 'male',
      attacks: [attacks.Tackle, attacks.Fireball],
      scale: 0.6
    },
    greenMonster: {
      position: {
        x: 730,
        y: 200
      },
      image: {
        src: './img/greenMonster.png'
      },
      animate: true,
      isEnemy: true,
      name: 'greenMonster',
      attacks: [attacks.Tackle, attacks.Fireball],
      scale: 0.7
    },
    aerosol: {
      position: {
        x: 700,
        y: 200
      },
      image: {
        src: './img/aerosol.png'
      },
      animate: true,
      isEnemy: true,
      name: 'aerosol',
      attacks: [attacks.Tackle, attacks.Fireball],
      scale: 0.7
    },
    alien: {
      position: {
        x: 720,
        y: 270
      },
      image: {
        src: './img/alien.png'
      },
      animate: true,
      isEnemy: true,
      name: 'alien',
      attacks: [attacks.Tackle, attacks.Fireball],
      scale: 0.5
    }
  }
  
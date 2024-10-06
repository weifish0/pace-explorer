const audio = {
  battle: new Howl({
    src: './audio/battle.mp3',
    html5: true,
    volume: 0.2
  }),
  lose: new Howl({
    src: './audio/lose.mp3',
    html5: true,
    volume: 0.4
  }),
  tackleHit: new Howl({
    src: './audio/tackleHit.wav',
    html5: true,
    volume: 0.2
  }),
  fireballHit: new Howl({
    src: './audio/fireballHit.wav',
    html5: true,
    volume: 0.2
  }),
  initFireball: new Howl({
    src: './audio/initFireball.wav',
    html5: true,
    volume: 0.2
  }),
  victory: new Howl({
    src: './audio/victory.wav',
    html5: true,
    volume: 0.8
  })
}

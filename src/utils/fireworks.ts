import confetti from 'canvas-confetti';

// Colores realistas de fuegos artificiales
const colors = [
  '#ff0000', '#ffa500', '#ffff00', '#00ff00', '#0000ff', '#ff00ff',
  '#ff4444', '#44ff44', '#4444ff', '#ff8c00', '#ffd700'
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function launchShell(options: any) {
  confetti({
    ...options,
    colors: [getRandomColor(), getRandomColor()],
    shapes: ['circle'],
    gravity: 1.2,
    scalar: 1.2,
    drift: randomInRange(-0.5, 0.5),
  });
}

// Efecto de explosión en forma de crisantemo
function chrysanthemumEffect(origin: { x: number, y: number }) {
  launchShell({
    particleCount: 100,
    spread: 360,
    startVelocity: 30,
    origin,
    ticks: 200,
  });
}

// Efecto de explosión en forma de palmera
function palmEffect(origin: { x: number, y: number }) {
  launchShell({
    particleCount: 50,
    spread: 180,
    startVelocity: 45,
    origin,
    ticks: 150,
  });
}

// Efecto de explosión con destellos
function sparkleEffect(origin: { x: number, y: number }) {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      launchShell({
        particleCount: 30,
        spread: 100,
        startVelocity: 20,
        origin,
        ticks: 100,
      });
    }, i * 200);
  }
}

export function launchFireworks() {
  const duration = 15 * 1000;
  const animationEnd = Date.now() + duration;

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    // Lanzar diferentes tipos de efectos
    const x = randomInRange(0.2, 0.8);
    const y = randomInRange(0.2, 0.5);
    const effect = Math.floor(Math.random() * 3);

    switch (effect) {
      case 0:
        chrysanthemumEffect({ x, y });
        break;
      case 1:
        palmEffect({ x, y });
        break;
      case 2:
        sparkleEffect({ x, y });
        break;
    }
  }, 700);

  // Efecto final con múltiples explosiones
  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        chrysanthemumEffect({ 
          x: randomInRange(0.2, 0.8), 
          y: randomInRange(0.2, 0.5) 
        });
      }, i * 300);
    }
  }, duration - 2000);
}
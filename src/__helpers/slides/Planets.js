import React from 'react';
import styled from 'react-emotion';

export function Planets() {
  const dimensionsRef = React.useRef({ width: 0, height: 0 });
  const { width, height } = dimensionsRef.current;
  const canvasRef = React.useRef();

  React.useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext('2d');
    const toX = percentage => (percentage / 100) * dimensionsRef.current.width;
    const toY = percentage => (percentage / 100) * dimensionsRef.current.height;

    let speed = 0.02;
    let currentPowerConstant = 0.01;

    const planets = Array(50)
      .fill(0)
      .map(i => initPlanet());

    function loop(i) {
      updateSize();
      updateLogic();
      draw();
      requestAnimationFrame(loop);
    }

    loop();

    function updateSize() {
      const rect = document.body.getBoundingClientRect();
      dimensionsRef.current.width = rect.width;
      dimensionsRef.current.height = rect.height;

      c.width = Math.floor(rect.width);
      c.height = Math.floor(rect.height);
    }

    function updateLogic() {
      planets.forEach(p => {
        enforceGravitation({ x: 50, y: 50 }, p);
      });
      planets.forEach(updatePlanet);
    }

    function draw() {
      drawLines();
      planets.forEach(drawPlanet);
    }

    function initPlanet() {
      return {
        x: rand(0, 100),
        y: rand(0, 100),
        dx: rand(-speed, speed),
        dy: rand(-speed, speed),
        r: rand(3, 5),
        color: `rgba(82, 231, 129, ${rand(0.6, 1)})`
      };
    }

    function enforceGravitation(source, target) {
      const dist = Math.hypot(source.x - target.x, source.y - target.y);

      if (dist < 1) {
        return;
      }
      const power = currentPowerConstant / (dist * dist);

      const xPower = ((source.x - target.x) / dist) * power;
      const yPower = ((source.y - target.y) / dist) * power;

      target.dy += yPower;
      target.dx += xPower;
    }

    function updatePlanet(p) {
      // if (Math.abs(p.dx) > 1 / (p.r * 10)) p.dx *= 0.99;
      // if (Math.abs(p.dy) > 1 / (p.r * 10)) p.dy *= 0.99;

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < -5) p.x = 105;
      if (p.x > 105) p.x = -5;
      if (p.y < -5) p.y = 105;
      if (p.y > 105) p.y = -5;
    }

    function drawPlanet(p) {
      ctx.beginPath();
      ctx.arc(toX(p.x), toY(p.y), p.r, 0, 2 * Math.PI);
      ctx.fillStyle = p.color;
      ctx.fill();
    }

    function drawLines() {
      for (let i = 0; i < planets.length - 1; i++) {
        for (let j = i + 1; j < planets.length; j++) {
          let a = planets[i];
          let b = planets[j];
          lineBetween(a, b);
        }
      }
    }

    function lineBetween(a, b, maxDistForLink = 10) {
      const dist = Math.hypot(a.y - b.y, a.x - b.x);
      ctx.strokeStyle = `rgba(255, 255, 255, ${Math.max(
        maxDistForLink - dist,
        0
      ) / maxDistForLink})`;
      ctx.beginPath();
      ctx.moveTo(toX(a.x), toY(a.y));
      ctx.lineTo(toX(b.x), toY(b.y));
      ctx.stroke();
    }

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }
  }, []);

  return <Canvas width={width} height={height} innerRef={canvasRef} />;
}

const Canvas = styled('canvas')`
  background: linear-gradient(rgb(31, 92, 139) 0%, rgb(20, 66, 101) 100%);
  position: fixed;
  top: 0;
  left: 0;
`;

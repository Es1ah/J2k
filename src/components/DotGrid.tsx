"use client";
import { useRef, useEffect, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

import './DotGrid.css';

gsap.registerPlugin(InertiaPlugin);

const throttle = (func, limit) => {
  let lastCall = 0;
  return function (...args) {
    const now = performance.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
};

function hexToRgb(hex) {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16)
  };
}

const DotGrid = ({
  dotSize = 16,
  gap = 32,
  baseColor = '#CC0000', // J2K Studios red
  activeColor = '#FF3333', // Brighter red for active state
  proximity = 150,
  speedTrigger = 100,
  shockRadius = 250,
  shockStrength = 5,
  maxSpeed = 5000,
  resistance = 750,
  returnDuration = 1.5,
  className = '',
  style
}) => {
  const containerRef = useRef(null);
  const dotsRef = useRef([]);
  const mouse = useRef({ x: 0, y: 0, vx: 0, vy: 0, lastX: 0, lastY: 0 });
  const animationFrameId = useRef(null);

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  const getDotColor = useCallback((distance, speed) => {
    const proximityFactor = Math.max(0, 1 - distance / proximity);
    const speedFactor = Math.min(1, speed / speedTrigger);
    const factor = Math.max(proximityFactor, speedFactor);

    const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * factor);
    const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * factor);
    const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * factor);
    return `rgb(${r},${g},${b})`;
  }, [baseRgb, activeRgb, proximity, speedTrigger]);

  const updateMousePosition = useCallback(
    throttle((e) => {
      mouse.current.lastX = mouse.current.x;
      mouse.current.lastY = mouse.current.y;
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.vx = mouse.current.x - mouse.current.lastX;
      mouse.current.vy = mouse.current.y - mouse.current.lastY;
    }, 16),
    []
  );

  const animateDots = useCallback(() => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const mouseX = mouse.current.x - containerRect.left;
    const mouseY = mouse.current.y - containerRect.top;
    const mouseSpeed = Math.sqrt(mouse.current.vx ** 2 + mouse.current.vy ** 2);

    dotsRef.current.forEach((dot) => {
      if (!dot) return;

      const dotRect = dot.getBoundingClientRect();
      const dotCenterX = dotRect.left + dotRect.width / 2 - containerRect.left;
      const dotCenterY = dotRect.top + dotRect.height / 2 - containerRect.top;

      const dx = mouseX - dotCenterX;
      const dy = mouseY - dotCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const color = getDotColor(distance, mouseSpeed);
      gsap.to(dot, {
        backgroundColor: color,
        duration: 0.1,
        overwrite: true,
      });

      if (mouseSpeed > speedTrigger && distance < shockRadius) {
        const angle = Math.atan2(dy, dx);
        const force = shockStrength * (1 - distance / shockRadius);
        const targetX = dotCenterX - Math.cos(angle) * force;
        const targetY = dotCenterY - Math.sin(angle) * force;

        gsap.to(dot, {
          x: targetX - dotCenterX,
          y: targetY - dotCenterY,
          duration: 0.3,
          ease: "power2.out",
          overwrite: true,
          onComplete: () => {
            gsap.to(dot, {
              x: 0,
              y: 0,
              duration: returnDuration,
              ease: "elastic.out(1, 0.3)",
              overwrite: true,
            });
          }
        });
      } else if (gsap.getProperty(dot, "x") !== 0 || gsap.getProperty(dot, "y") !== 0) {
        gsap.to(dot, {
          x: 0,
          y: 0,
          duration: returnDuration,
          ease: "elastic.out(1, 0.3)",
          overwrite: true,
        });
      }
    });

    animationFrameId.current = requestAnimationFrame(animateDots);
  }, [getDotColor, proximity, shockRadius, shockStrength, speedTrigger, returnDuration]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      updateMousePosition(e);
    };

    container.addEventListener('mousemove', handleMouseMove);
    animationFrameId.current = requestAnimationFrame(animateDots);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [animateDots, updateMousePosition]);

  useEffect(() => {
    return () => {
      dotsRef.current.forEach(dot => {
        if (dot) gsap.killTweensOf(dot);
      });
    };
  }, []);

  const renderDots = () => {
    if (!containerRef.current) return null;

    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    const numCols = Math.floor(containerWidth / (dotSize + gap));
    const numRows = Math.floor(containerHeight / (dotSize + gap));

    const dots = [];
    let dotIndex = 0;
    for (let r = 0; r < numRows; r++) {
      for (let c = 0; c < numCols; c++) {
        const x = c * (dotSize + gap) + dotSize / 2;
        const y = r * (dotSize + gap) + dotSize / 2;
        dots.push(
          <div
            key={`${r}-${c}`}
            ref={(el) => (dotsRef.current[dotIndex++] = el)}
            className="dot-grid-dot"
            style={{
              width: dotSize,
              height: dotSize,
              left: x,
              top: y,
              backgroundColor: baseColor,
            }}
          />
        );
      }
    }
    return dots;
  };

  return (
    <div
      ref={containerRef}
      className={`dot-grid-container ${className}`}
      style={{ ...style, position: 'absolute', inset: 0, overflow: 'hidden' }}
    >
      {renderDots()}
    </div>
  );
};

export default DotGrid;
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const TypingContainer = styled.div`
  position: relative;
  display: inline-block;
  
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 200%;
    pointer-events: none;
    z-index: 1;
  }

  .typing-text {
    position: relative;
    z-index: 2;
    display: inline-flex;
    gap: 0;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    text-shadow: inherit;
    
    span {
      display: inline-block;
      position: relative;
      font-size: inherit;
      font-family: inherit;
      color: inherit;
      
      .inside {
        font-size: inherit;
        background-image: linear-gradient(180deg, #f8f6ef 10%, #f8f6ef 100%);
        background-clip: text;
        -webkit-background-clip: text;
        text-fill-color: transparent;
        -webkit-text-fill-color: transparent;
        color: transparent;
        text-shadow: none;
        top: -5%;
        left: -1%;
        position: absolute;
        z-index: 99;
      }
    }
  }
`;

const TypingEffect = ({ text, className, startDelay = 0 }) => {
  const svgRef = useRef(null);
  const textRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated || !textRef.current || !svgRef.current) return;

    const letters = textRef.current.querySelectorAll('span');
    const svg = svgRef.current;

    const addTri = (x0, y0, shade, fontSize) => {
      const tri = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      const a = Math.random();
      const a2 = a + (-0.2 + Math.random() * 0.4);
      const r = fontSize * 0.52;
      const r2 = r + fontSize * Math.random() * 0.2;
      const x = x0 + r * Math.cos(2 * Math.PI * a);
      const y = y0 + r * Math.sin(2 * Math.PI * a);
      const x2 = x0 + r2 * Math.cos(2 * Math.PI * a2);
      const y2 = y0 + r2 * Math.sin(2 * Math.PI * a2);
      const triSize = fontSize * 0.1;
      const scale = 0.3 + Math.random() * 0.7;
      const offset = triSize * scale;
      
      tri.setAttribute('points', `0,0 ${triSize * 2},0 ${triSize},${triSize * 2}`);
      tri.style.fill = shade;
      svg.appendChild(tri);
      
      gsap.fromTo(tri, 
        { rotation: Math.random() * 360, scale: scale, x: x - offset, y: y - offset, opacity: 1 },
        { 
          x: x2 - offset, 
          y: y2 - offset, 
          opacity: 0, 
          duration: 0.6,
          ease: 'power1.inOut',
          onComplete: () => {
            if (svg.contains(tri)) svg.removeChild(tri);
          }
        }
      );
    };

    const addCirc = (x0, y0, fontSize) => {
      const circ = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      const a = Math.random();
      const r = fontSize * 0.52;
      const r2 = r + fontSize;
      const x = x0 + r * Math.cos(2 * Math.PI * a);
      const y = y0 + r * Math.sin(2 * Math.PI * a);
      const x2 = x0 + r2 * Math.cos(2 * Math.PI * a);
      const y2 = y0 + r2 * Math.sin(2 * Math.PI * a);
      const circSize = fontSize * 0.05 * Math.random();
      
      circ.setAttribute('r', circSize);
      circ.style.fill = '#eee';
      svg.appendChild(circ);
      
      gsap.fromTo(circ,
        { x: x - circSize, y: y - circSize, opacity: 1 },
        { 
          x: x2 - circSize, 
          y: y2 - circSize, 
          opacity: 0, 
          duration: 0.6,
          ease: 'power1.inOut',
          onComplete: () => {
            if (svg.contains(circ)) svg.removeChild(circ);
          }
        }
      );
    };

    const colors = [
      { main: '#8AFAEC', shades: ['#8AFAEC', '#A0FCF0', '#6FE8DA', '#5DD9CC'] },
      { main: '#7151B6', shades: ['#7151B6', '#8A6FC7', '#9D87D5', '#6043A0'] },
      { main: '#F8F6EF', shades: ['#F8F6EF', '#FFFFFF', '#EAE8E0', '#DCD9D0'] }
    ];

    const animateLetter = (letter, index, delay) => {
      const rect = letter.getBoundingClientRect();
      const fontSize = parseFloat(window.getComputedStyle(letter).fontSize);
      const yOffset = (0.5 + Math.random() * 0.5) * fontSize;
      const rotation = -50 + Math.random() * 100;
      const isSpace = letter.textContent.trim() === '';
      
      gsap.fromTo(letter, 
        { scale: 0, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.4,
          delay: delay,
          ease: 'back.out(1.7)'
        }
      );
      
      gsap.to(letter, {
        y: -yOffset,
        rotation: rotation,
        duration: 0.2,
        delay: delay,
        ease: 'power3.inOut'
      });
      
      gsap.to(letter, {
        y: 0,
        rotation: 0,
        duration: 0.2,
        delay: delay + 0.2,
        ease: 'power3.inOut'
      });

      // Skip confetti for spaces
      if (!isSpace) {
        setTimeout(() => {
          const updatedRect = letter.getBoundingClientRect();
          const containerRect = textRef.current.parentElement.getBoundingClientRect();
          const x0 = updatedRect.left - containerRect.left + updatedRect.width / 2;
          const y0 = updatedRect.top - containerRect.top + updatedRect.height / 2;
          const color = colors[index % colors.length];
          const shade = color.shades[Math.floor(Math.random() * 4)];
          
          for (let i = 0; i < 8; i++) addTri(x0, y0, shade, fontSize);
          for (let i = 0; i < 8; i++) addCirc(x0, y0, fontSize);
        }, (delay + 0.15) * 1000);
      }
    };

    letters.forEach((letter, index) => {
      animateLetter(letter, index, startDelay + index * 0.1);
    });

    setHasAnimated(true);
  }, [hasAnimated, startDelay]);

  return (
    <TypingContainer className={className}>
      <svg ref={svgRef}></svg>
      <div className="typing-text" ref={textRef}>
        {text.split('').map((char, index) => (
          <span key={index}>
            {char}
            <div className="inside">{char}</div>
          </span>
        ))}
      </div>
    </TypingContainer>
  );
};

export default TypingEffect;

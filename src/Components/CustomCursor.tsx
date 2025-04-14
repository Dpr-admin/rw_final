import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

interface CustomCursorProps {
  hidden?: boolean;
}

export const resetHoverState = () => {
  document.querySelectorAll('a, button, .cursor-hover-target, [onClick]').forEach((el) => {
    el.dispatchEvent(new Event('mouseleave'));
  });
};

const CustomCursor: React.FC<CustomCursorProps> = ({ hidden = false }) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (innerRef.current && outerRef.current) {
        innerRef.current.style.left = `${clientX}px`;
        innerRef.current.style.top = `${clientY}px`;
        outerRef.current.style.left = `${clientX}px`;
        outerRef.current.style.top = `${clientY}px`;
      }
    };

    const handleHover = () => setHovering(true);
    const handleUnhover = () => setHovering(false);

    document.addEventListener('mousemove', moveCursor);

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, .cursor-hover-target, [onClick]').forEach((el) => {
        el.addEventListener('mouseenter', handleHover);
        el.addEventListener('mouseleave', handleUnhover);
      });
    };

    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button, .cursor-hover-target, [onClick]').forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Box
        ref={outerRef}
        className={`mouse-cursor cursor-outer ${hovering ? 'cursor-hover' : ''}`}
        sx={{
          position: 'fixed',
          left: 0,
          top: 0,
          pointerEvents: 'none',
          marginLeft: '-15px',
          marginTop: '-15px',
          width: '30px',
          height: '30px',
          border: '2px solid #0f63a5',
          boxSizing: 'border-box',
          zIndex: 100,
          opacity: hovering ? 0 : 0.5,
          transition: 'all .08s ease-out',
          borderRadius: '50%',
          transform: 'translateZ(0)',
          visibility: hidden ? 'hidden' : 'visible'
        }}
      />
      <Box
        ref={innerRef}
        className={`mouse-cursor cursor-inner ${hovering ? 'cursor-hover' : ''}`}
        sx={{
          position: 'fixed',
          left: 0,
          top: 0,
          pointerEvents: 'none',
          marginLeft: hovering ? '-40px' : '-3px',
          marginTop: hovering ? '-40px' : '-3px',
          width: hovering ? '80px' : '6px',
          height: hovering ? '80px' : '6px',
          backgroundColor: '#000',
          opacity: hovering ? 0.3 : 1,
          zIndex: 100,
          transition: 'width .3s ease-in-out, height .3s ease-in-out, margin .3s ease-in-out, opacity .3s ease-in-out',
          borderRadius: '50%',
          transform: 'translateZ(0)',
          visibility: hidden ? 'hidden' : 'visible'
        }}
      />
    </>
  );
};

export default CustomCursor;

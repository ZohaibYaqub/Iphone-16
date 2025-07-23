// ScrollComponent.js
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const ScrollComponent = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  
    // scroll.on('scroll', (obj) => {
    //   console.log('Scroll position:', obj.scroll.y);
    // });
  
    return () => {
      scroll.destroy();
    };
  }, []);
  

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default ScrollComponent;

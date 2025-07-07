import { useState, useEffect, useRef } from 'react';

function About() {
  const hiddenRefs = useRef([]);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      });
  
      hiddenRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
  
      return () => {
        hiddenRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      };
    }, []);

  return(
  <>
    <section className="Hidden" style={{ display: 'block' }} ref={(el) => (hiddenRefs.current[0] = el)}>
        <h2 className="aboutDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, reprehenderit? Quo, deleniti quam voluptas illum illo quas esse! Animi, placeat. Fugiat eveniet aut nulla consequuntur aspernatur quis at a culpa!</h2>
        <h1>Hi im russel nigga</h1>
      </section>
  </>
  );
}

export default About;

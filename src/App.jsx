import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function App() {
  const [count, setCount] = useState(0)
  console.log("Freaky friday");
  const hiddenRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        }
        else{
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

  },[]);

  return (
    <>
      <Header/>
      <section 
        className='Hidden'
        style={{ display: 'block' }}
        ref={(el) => (hiddenRefs.current[0] = el)}>
          <h1>hi</h1>
        
      </section>

      <section 
        className='Hidden'
        style={{ display: 'block' }}
        ref={(el) => (hiddenRefs.current[1] = el)}>
          <h1>hi</h1>
        
      </section>

      <section 
        className='Hidden'
        style={{ display: 'block' }}
        ref={(el) => (hiddenRefs.current[2] = el)}>
          <h1>hi</h1>
        
      </section>
      <Footer/>
    </>
  )
}

export default App

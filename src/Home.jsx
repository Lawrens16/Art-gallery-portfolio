import { useState, useEffect, useRef } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Art1 from './assets/rusArt1.png'
import Art4 from './assets/rusArt4.jpg'
import Art3 from './assets/rusArt3.jpg'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Home() {
  const [count, setCount] = useState(0);
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

  return (
    <>
      <section
        className="Hidden block items-start justify-start min-h-0"
        ref={(el) => (hiddenRefs.current[0] = el)}>
        <Card className="translate-x-[200px] -translate-y-[70px]">
          <CardHeader>
            <img src={Art1} alt="Card Image" className="w-[280px]" />
            <CardDescription className="translate-x-[110px] -translate-y-[60px] text-[18px]"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardDescription>  
          </CardHeader>
        </Card>
      </section>


      <section
        className="Hidden block items-start justify-start min-h-0"
        ref={(el) => (hiddenRefs.current[1] = el)}>
        <Card className="translate-x-[900px] -translate-y-[70px]">
          <CardHeader>
            <img src={Art4} alt="Card Image" className="w-[480px]" />
            <CardDescription className="-translate-x-[110px] -translate-y-[60px] text-[18px]"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardDescription>  
          </CardHeader>
        </Card>
      </section>


      <section
        className="Hidden"
        ref={(el) => (hiddenRefs.current[2] = el)}>
        <Card className="-translate-x-[400px] translate-y-[70px]">
          <CardHeader>
            <img src={Art3} alt="Card Image" className="w-[480px]" />
            <CardDescription className="translate-x-[500px] -translate-y-[210px] text-[18px] tracking-[0.3em] text-lg italic"
            > &ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nesciunt necessitatibus ipsam iure neque ipsa nulla inventore ea, quia recusandae praesentium quaerat voluptas ducimus eveniet reiciendis, eius enim ipsum quos.&rdquo;</CardDescription>  
          </CardHeader>
        </Card>
      </section>

     
    </>
  );
}

export default Home;

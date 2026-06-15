import Hero from '../sections/Hero/Hero'
import Summary from '../sections/Summary/Summary'
import { useEffect } from 'react'



function Home() {

  useEffect(() => {

    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, []); 


  return (
    <main>
      <Hero />
      <Summary />
    </main>
  )
}

export default Home
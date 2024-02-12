import { useRef, Ref } from 'react'
import './App.css'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

function App() {
  const ref: Ref<IParallax> = useRef<IParallax>(null!);
  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer factor={4} style={{ backgroundImage: `url('/clouds.jpg')`, backgroundSize: 'cover', border: '5px solid gray' }}
          onClick={() => ref.current?.scrollTo(4)}>
        </ParallaxLayer>
        <ParallaxLayer className='welcome' offset={1} onClick={() => ref.current?.scrollTo(4)} speed={0.5} >
          <h1 style={{ color: 'white', fontSize: '6rem', textAlign: 'center' }}>Hello my Friend!</h1>
        </ParallaxLayer>
        <ParallaxLayer className='moon' offset={0.1} sticky={{ start: 0.1, end: 3.5 }} onClick={() => ref.current?.scrollTo(4)}
          speed={0.9}   style={{ position: 'relative', top: '2rem' }}>
          <img src="/moon.gif" alt="moon" style={{ display: 'block', margin: '0 auto' }} />
        </ParallaxLayer>
        <ParallaxLayer className='birds' offset={1} onClick={() => ref.current?.scrollTo(4)} speed={1.5}>
          <img src="/birds.png" alt="birds" style={{ display: 'block', margin: '0 auto' }} />
        </ParallaxLayer>
        <ParallaxLayer className='birds' offset={1.5} onClick={() => ref.current?.scrollTo(4)} speed={1.2}>
          <img src="/birds.png" alt="birds" style={{ display: 'block', margin: '0 auto' }} />
        </ParallaxLayer>
        <ParallaxLayer className='birds' offset={1.8} onClick={() => ref.current?.scrollTo(4)} speed={0.8}>
          <img src="/birds.png" alt="birds" style={{ display: 'block', margin: '0 auto' }} />
        </ParallaxLayer>
        <ParallaxLayer className='birds' offset={1.8} onClick={() => ref.current?.scrollTo(4)} speed={0.8}>
          <img src="/birds.png" alt="birds" style={{ display: 'block', margin: '0 auto' }} />
        </ParallaxLayer>
        <ParallaxLayer className='birds' offset={2.0} onClick={() => ref.current?.scrollTo(4)} speed={0.5}>
          <img src="/birds.png" alt="birds" style={{ display: 'block', margin: '0 auto' }} />
        </ParallaxLayer>
        <ParallaxLayer className='birds' offset={2.2} onClick={() => ref.current?.scrollTo(4)} speed={1.2}>
          <img src="/birds.png" alt="birds" style={{ display: 'block', margin: '0 auto' }} />
        </ParallaxLayer>
        <ParallaxLayer className='birds' offset={2.4} onClick={() => ref.current?.scrollTo(4)} speed={1}>
          <img src="/birds.png" alt="birds" style={{ display: 'block', margin: '0 auto' }} />
        </ParallaxLayer>
        <ParallaxLayer className='birds' offset={2.8} onClick={() => ref.current?.scrollTo(4)} speed={1.1}>
          <img src="/birds.png" alt="birds" style={{ display: 'block', margin: '0 auto' }} />
        </ParallaxLayer>
        <ParallaxLayer className='birds' offset={3} onClick={() => ref.current?.scrollTo(4)} speed={0.9}>
          <img src="/birds.png" alt="birds" style={{ display: 'block', margin: '0 auto' }} />
        </ParallaxLayer>
        <ParallaxLayer className='birds' offset={3.3} onClick={() => ref.current?.scrollTo(4)} speed={2}>
          <img src="/birds.png" alt="birds" style={{ display: 'block', margin: '0 auto' }} />
        </ParallaxLayer>

      </Parallax>
    </div>

  )
}

export default App

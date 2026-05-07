import ParticlesBackground from './components/effects/Particles/Particles';
import { HomePage } from './components/organisms/HomePage';

export default function App() {
  return (
    <>
      <div className="app">
        <ParticlesBackground />
        <HomePage />
      </div>
    </>
  );
}

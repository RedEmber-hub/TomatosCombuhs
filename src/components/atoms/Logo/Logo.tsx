import { LogoProps } from './Logo.types';
import './Logo.scss';

export default function Logo({ text }: LogoProps) {
  return (
    <>
      <h1 className="logo">{text}</h1>
    </>
  );
}

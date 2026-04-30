import { LogoProps } from './Logo.types';
import './Logo.scss';

export default function Logo({ text, size }: LogoProps) {
  return <h1 className={`logo logo--${size}`}>{text}</h1>;
}

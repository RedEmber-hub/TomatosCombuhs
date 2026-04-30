import './Link.scss';
import { LinkProps } from './Links.type';

export default function Link({ href, children, size }: LinkProps) {
  return (
    <a href={href} className={`link link--${size}`} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

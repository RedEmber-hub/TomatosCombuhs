import './Link.scss';
import { LinkProps } from './Links.type';

export default function Link({ href, children }: LinkProps) {
  return (
    <a href={href} className="link" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

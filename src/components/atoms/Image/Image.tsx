import { ImageProps } from './Image.type';
import './Image.scss';

export default function Image({ src, alt }: ImageProps) {
  return <img src={src} alt={alt} className="image" />;
}

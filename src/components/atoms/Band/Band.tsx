import './Band.scss';
import { Image } from '../Image';
import { BandProps } from './Band.type';

export default function Band({ imageUrls, reverseAnimation, isAnimated }: BandProps) {
  return (
    <ul className={`band ${isAnimated ? `band--animated` : ''} ${reverseAnimation ? `band--animated-reversed` : ''}`}>
      {imageUrls.map((src, index) => {
        return (
          <li key={index} className="band__item">
            <Image src={src} alt="band" />
          </li>
        );
      })}
    </ul>
  );
}

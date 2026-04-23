import './Band.scss';
import { Image } from '../../atoms/Image';

export default function Band({ images }: BandProps) {
  return (
    <ul className="band">
      {images.map((src, index) => (
        <li key={index} className="band__item">
          <Image src={src} alt="band" />
        </li>
      ))}
    </ul>
  );
}

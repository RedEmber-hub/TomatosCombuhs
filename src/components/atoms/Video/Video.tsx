import './Video.scss';
import { VideoProps } from './Video.type';

export default function Video({ videoId }: VideoProps) {
  if (!videoId) return null;

  return (
    <iframe
      className="video"
      loading="lazy"
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
      allowFullScreen
    />
  );
}

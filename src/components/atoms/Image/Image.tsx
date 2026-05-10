import { ImageProps } from './Image.type';
import './Image.scss';
import { useState } from 'react';

export default function Image({ src, alt }: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="image__wrapper">
      {!loaded && !error && <div className="skeleton skeleton--animated" />}

      {!error && (
        <img
          src={src}
          alt={alt}
          className={`image ${loaded ? 'image--visible' : ''}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}

      {error && <div className="image__error">Image failed to load</div>}
    </div>
  );
}

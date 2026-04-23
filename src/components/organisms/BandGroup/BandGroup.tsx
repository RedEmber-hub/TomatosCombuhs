import { Band } from '@/components/molecules/Band';
import './BandGroup.scss';

export default function BandGroup() {
  const imagesUrlArrays = {
    firstLine: [
      '/src/assets/img/img1.avif',
      '/src/assets/img/img5.avif',
      '/src/assets/img/img7.avif',
      '/src/assets/img/img4.avif',
      '/src/assets/img/img1.avif',
      '/src/assets/img/img5.avif',
      '/src/assets/img/img7.avif',
      '/src/assets/img/img4.avif',
    ],
    secondLine: [
      '/src/assets/img/img2.avif',
      '/src/assets/img/img6.webp',
      '/src/assets/img/img3.avif',
      '/src/assets/img/img8.webp',
      '/src/assets/img/img2.avif',
      '/src/assets/img/img6.avif',
      '/src/assets/img/img3.avif',
      '/src/assets/img/img8.avif',
    ],
    thirdLine: [
      '/src/assets/img/img9.webp',
      '/src/assets/img/img10.webp',
      '/src/assets/img/img3.avif',
      '/src/assets/img/img4.avif',
      '/src/assets/img/img9.webp',
      '/src/assets/img/img10.webp',
      '/src/assets/img/img3.avif',
      '/src/assets/img/img4.avif',
    ],
    fourthLIne: [
      '/src/assets/img/img1.avif',
      '/src/assets/img/img2.avif',
      '/src/assets/img/img3.avif',
      '/src/assets/img/img4.avif',
      '/src/assets/img/img1.avif',
      '/src/assets/img/img2.avif',
      '/src/assets/img/img3.avif',
      '/src/assets/img/img4.avif',
    ],
  };
  return (
    <>
      <div className="bandGroup">
        {Object.entries(imagesUrlArrays).map(([key, value], index) => {
          return <Band key={key} imageUrls={value} reverseAnimation={index % 2 === 0} isAnimated={true} />;
        })}
      </div>
    </>
  );
}

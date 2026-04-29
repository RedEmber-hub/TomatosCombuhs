import { Band } from '@/components/molecules/Band';
import './BandGroup.scss';

export default function BandGroup() {
  const imagesUrl = {
    firstLine: [
      './img1.avif',
      './img5.avif',
      './img7.avif',
      './img4.avif',
      './img1.avif',
      './img5.avif',
      './img7.avif',
      './img4.avif',
    ],
    secondLine: [
      './img2.avif',
      './img6.webp',
      './img3.avif',
      './img8.webp',
      './img2.avif',
      './img6.avif',
      './img3.avif',
      './img8.avif',
    ],
    thirdLine: [
      './img9.webp',
      './img10.webp',
      './img3.avif',
      './img4.avif',
      './img9.webp',
      './img10.webp',
      './img3.avif',
      './img4.avif',
    ],
    fourthLIne: [
      './img1.avif',
      './img2.avif',
      './img3.avif',
      './img4.avif',
      './img1.avif',
      './img2.avif',
      './img3.avif',
      './img4.avif',
    ],
  };
  return (
    <>
      <div className="bandGroup">
        {Object.entries(imagesUrl).map(([key, value], index) => {
          return <Band key={key} imageUrls={value} reverseAnimation={index % 2 === 0} isAnimated={true} />;
        })}
      </div>
    </>
  );
}

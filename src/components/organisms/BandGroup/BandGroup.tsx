import { Band } from '@/components/atoms/Band';
import './BandGroup.scss';

export default function BandGroup() {
  const imagesUrl = {
    firstLine: [
      './prev1.avif',
      './prev11.avif',
      './prev2.avif',
      './prev12.avif',
      './prev3.avif',
      './prev13.avif',
      './prev4.avif',
      './prev14.avif',
    ],
    secondLine: [
      './prev5.avif',
      './prev15.avif',
      './prev6.avif',
      './prev16.avif',
      './prev7.webp',
      './prev17.webp',
      './prev8.webp',
      './prev18.webp',
    ],
    thirdLine: [
      './prev9.webp',
      './prev19.webp',
      './prev10.webp',
      './prev20.webp',
      './img6.webp',
      './img8.webp',
      './img9.webp',
      './img10.webp',
    ],
    fourthLIne: [
      './prev1.avif',
      './prev11.avif',
      './prev2.avif',
      './prev12.avif',
      './prev3.avif',
      './prev13.avif',
      './prev4.avif',
      './prev14.avif',
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

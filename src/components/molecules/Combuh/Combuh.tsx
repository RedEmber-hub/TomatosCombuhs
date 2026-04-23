import './Combuh.scss';
import { Image } from '../../atoms/Image';
import { CombuhProps } from './Combuh.type';
import { Link } from '../../atoms/Link';

export default function Combuh({ tribe, gameType, hero, usedCards, videoUrl, img, description }: CombuhProps) {
  const details = [
    { label: 'Режим игры:', value: gameType },
    { label: 'Тип существ:', value: tribe },
    { label: 'Герой:', value: hero },
    { label: 'Используемые карты:', value: usedCards.join(', ') },
    { label: 'Видео:', value: <Link href={videoUrl}>Смотреть на YouTube</Link> },
  ];
  return (
    <div className="combuh">
      <div className="combuh_info">
        {details.map((detail, index) => (
          <div key={index} className="combuh__details">
            <p className="combuh__details-label">{detail.label}</p>
            <p className="combuh__details-value">{detail.value}</p>
          </div>
        ))}
      </div>

      <div className="combuh__img">
        <Image src={img} alt={description} />
      </div>
    </div>
  );
}

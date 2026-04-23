import './Chips.scss';
import { ChipsProps } from './Chips.type';

export default function Chips({ text, onClick, active, activeColor, hoverColor }: ChipsProps) {
  return (
    <button
      className={`chips ${active ? `chips--active chips--active-${activeColor}` : ''} chips--hover-${hoverColor}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

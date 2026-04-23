import { Chips } from '../../atoms/Chips';
import './ChipsGroup.scss';
import { ChipsGroupProps } from './ChipsGroup.type';

export default function ChipsGroup({
  filters,
  selected,
  backgroundColor,
  hoverBorderColor,
  onChange,
}: ChipsGroupProps) {
  return (
    <div className="chipsGroup">
      {filters.map((filter) => (
        <Chips
          key={filter}
          text={filter}
          active={selected === filter}
          activeColor={backgroundColor}
          hoverColor={hoverBorderColor}
          onClick={() => onChange(filter)}
        />
      ))}
    </div>
  );
}

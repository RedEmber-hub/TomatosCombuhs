import { ActiveColorType } from '../../atoms/Chips/Chips.type';

export interface ChipsGroupProps {
  filters: string[];
  selected: string;
  onChange: (filter: string) => void;
  backgroundColor: ActiveColorType;
  hoverBorderColor: ActiveColorType;
}

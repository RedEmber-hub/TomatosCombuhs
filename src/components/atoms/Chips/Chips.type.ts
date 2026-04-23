export type ActiveColorType = 'green' | 'yellow';

export interface ChipsProps {
  text: string;
  active: boolean;
  onClick: () => void;
  activeColor: ActiveColorType;
  hoverColor: ActiveColorType;
}

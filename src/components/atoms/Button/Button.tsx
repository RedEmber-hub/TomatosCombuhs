import './Button.scss';
import { ButtonProps } from './Button.type';

export default function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

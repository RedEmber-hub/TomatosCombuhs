import { Button } from '@/components/atoms/Button';
import './EmptyState.scss';
import { EmptyStateProps } from './EmptyState.type';

export default function EmptyState({ title, description, onReset }: EmptyStateProps) {
  return (
    <div className="emptyState">
      <h3 className="emptyState__title">{title}</h3>

      <p className="emptyState__description">{description}</p>

      {onReset && <Button onClick={onReset}>Сбросить фильтры</Button>}
    </div>
  );
}

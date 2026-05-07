import { Button } from '@/components/atoms/Button';
import './Pagination.scss';
import { PaginationProps } from './Pagination.type';

export default function Pagination({ page, totalPages, setPage }: PaginationProps) {
  function handlePrev() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function handleNext() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }
  return (
    <div className="pagination">
      <Button onClick={handlePrev} disabled={page === 1}>
        Назад
      </Button>

      <span className="pagination__info">
        {page} / {totalPages}
      </span>

      <Button onClick={handleNext} disabled={page === totalPages}>
        Вперёд
      </Button>
    </div>
  );
}

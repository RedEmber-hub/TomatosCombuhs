export interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

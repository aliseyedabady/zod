import React from "react";
// import { ChevronLeft, ChevronRight } from "tabler-icons-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPages = () => {
    const pages = [];
    pages.push(<li key={"left"}>{/* <ChevronRight size={"1rem"} /> */}</li>);
    pages.push(
      <li
        key={12}
        onClick={() => onPageChange(1)}
        className={currentPage === 1 ? "active" : ""}
      >
        1
      </li>
    );
    let startPage = Math.max(currentPage - 2, 2);
    let endPage = Math.min(currentPage + 2, totalPages - 1);
    if (startPage > 2) {
      pages.push(<li key="dots-before">...</li>);
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li
          key={i}
          onClick={() => onPageChange(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </li>
      );
    }
    if (endPage < totalPages - 1) {
      pages.push(<li key="dots-after">...</li>);
    }
    if (totalPages !== 1) {
      pages.push(
        <li
          key={"last-page"}
          onClick={() => onPageChange(totalPages)}
          className={currentPage === totalPages ? "active" : ""}
        >
          {totalPages}
        </li>
      );
    }
    pages.push(<li key={"right"}>{/* <ChevronLeft size={"1rem"} /> */}</li>);
    return pages;
  };

  return (
    <nav>
      <ul className="flex gap-1 items-center pagination">{renderPages()}</ul>
    </nav>
  );
};

export default Pagination;

import React from "react";
import "./Pagination.css";

function Pagination({ nPages, currentPage, setCurrentPage }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className='pagination'>
      <ul>
        <li className={`next-prev prev ${currentPage === 1 ? "disabled" : ""}`}>
          <span onClick={prevPage}>
            PREV
          </span>
        </li>
        {pageNumbers.map((pgNumber, index) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage === pgNumber ? "active" : ""} `}
          >
            <span
            key={index}
              onClick={() => setCurrentPage(pgNumber)}
            >
              {pgNumber}
            </span>
          </li>
        ))}
        <li className={`next-prev next ${currentPage - nPages === 0 ? "disabled" : ""}`}>
          <span onClick={nextPage}>
            NEXT
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;

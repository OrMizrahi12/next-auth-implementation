import React from "react";
import Style from '../../styles/Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  
    const pages = [...Array(totalPages).keys()].map((page) => page + 1);

    return (
        <div className={Style.paginationWrapper}>
            {pages.map((page) => (
                <a key={page} className={Style.paginationRow} href="#" onClick={() => onPageChange(page)}>
                    {page}
                </a>

            ))}
        </div>
    );
};

export default Pagination;

import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { PaginationContainer, ALink } from "../styleComponents/pagenation";

const Pages = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);

  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  return (
    <PaginationContainer>
      <ALink
        onClick={() =>
          onPageChange(currentPage !== 1 ? currentPage - 1 : currentPage)
        }
      >
        &laquo;
      </ALink>
      {pages.map((page) => (
        <ALink
          className={page === currentPage ? "current" : "not-current"}
          key={page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </ALink>
      ))}
      <ALink
        onClick={() =>
          onPageChange(
            currentPage !== pageCount ? currentPage + 1 : currentPage
          )
        }
      >
        &raquo;
      </ALink>
    </PaginationContainer>
  );
};

Pages.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pages;

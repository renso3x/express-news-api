import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { incrementPaginate, decrementPaginate } from '../actions/news';

const Paginator = ({
  selectedPage,
  totalResults,
  incrementPaginate,
  decrementPaginate
}) => {
  const paginate = totalResults / 10;

  return (
    <Pagination aria-label="pagination" className="paginator">
      <div className="paginate__item">
        {selectedPage} - {paginate} of  {totalResults}
      </div>
      <PaginationItem disabled={selectedPage === 1}>
        <PaginationLink previous href="#" onClick={decrementPaginate} />
      </PaginationItem>
      <PaginationItem disabled={selectedPage >= paginate}>
        <PaginationLink  next href="#" onClick={incrementPaginate} />
      </PaginationItem>
    </Pagination>
  );
}


Paginator.propTypes = {
  totalResults: PropTypes.number,
  selectedPage: PropTypes.number
};

const mapStateToProps = ({ news }) => ({
  totalResults: news.totalResults,
  selectedPage: news.page
})

export default connect(mapStateToProps, {
  incrementPaginate,
  decrementPaginate
})(Paginator);
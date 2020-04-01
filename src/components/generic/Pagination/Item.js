/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import PropTypes from 'prop-types';

const Item = ({ active, disabled, ...rest }) => {
  return (
    <PaginationItem active={active} disabled={disabled}>
      <PaginationLink {...rest} />
    </PaginationItem>
  );
};

Item.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

Item.defaultProps = {
  active: false,
  disabled: false,
};

export default Item;

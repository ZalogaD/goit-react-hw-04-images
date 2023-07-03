import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <Btn onClick={onClick} type="button">
      Load more
    </Btn>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Btn;

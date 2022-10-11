import PropTypes from 'prop-types';

import Icons from '../../../images/icons.svg';

const Icon = ({ name, width, height, className }) => {
  return (
    <svg width={width} height={height} className={className}>
      <use href={Icons + `#${name}`}></use>
    </svg>
  );
};

export default Icon;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  className: PropTypes.string,
};

import './Button.css';
import PropTypes from 'prop-types';

function Button({ onClick }) {
  return (
    <div className="button-container">
      <button className="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;

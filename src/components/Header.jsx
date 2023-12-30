import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

function Header({ text }) {
  return (
    <header>
      <div className='container'>
        <Link to='/' style={{ textDecoration: 'none', color: '#ff6a95' }}>
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'FeedBack UI',
};

Header.propTypes = {
  text: propTypes.string,
};

export default Header;

import { useContext } from 'react';
import PropTypes from 'prop-types';

import FeedbackContext from '../context/FeedbackContext';
import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from './shared/Card';

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card className='card'>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => deleteFeedback(item.id)}>
        <FaTimes color='purple' />
      </button>
      <button className='edit' onClick={() => editFeedback(item)}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;

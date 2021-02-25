import PropTypes from 'prop-types';
import ResourcePropTypes from './ResourcePropTypes';

const ResourcesPropTypes = () => PropTypes.shape({
  Resource: ResourcePropTypes().isRequired,
  quantity: PropTypes.number.isRequired
});

export default ResourcesPropTypes;

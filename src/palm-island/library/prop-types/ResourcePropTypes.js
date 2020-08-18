import PropTypes from 'prop-types';
import Wood from '../../components/atoms/logos/Wood';
import Fish from '../../components/atoms/logos/Fish';
import Stone from '../../components/atoms/logos/Stone';

const ResourcePropTypes = () => PropTypes.oneOf([Wood, Fish, Stone]);

export default ResourcePropTypes;

import { connect } from 'react-redux';
import { toggleLever } from '../actions';
import Luxian from '../components/Luxian';

const mapStateToProps = state => ({
  isUp: state.isUp,
});

const mapDispatchToProps = dispatch => ({
  onLeverClick: isUp => {
    dispatch(toggleLever(isUp));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Luxian);

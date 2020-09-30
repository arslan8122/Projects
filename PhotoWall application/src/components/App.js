import Main from './Main';
import {bindActionCreators} from 'redux';
import * as actions from '../redux/actions';
import {withRouter} from 'react-router';

const { connect } = require("react-redux")

function mapstatetoProps(state){
    return {
        posts:state.posts,
        comments:state.comments
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch)
}

const App=withRouter(connect(mapstatetoProps,mapDispatchToProps)(Main));
export default App;
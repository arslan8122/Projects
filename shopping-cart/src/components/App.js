import Main from './Main';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actions from '../redux/actions'
function mapStateToProps(state){
    return{

        posts:state

    }
}

const App= withRouter(connect(mapStateToProps)(Main))
export default App;
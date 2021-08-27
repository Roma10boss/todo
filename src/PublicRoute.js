import { Route, Redirect } from 'react-router-dom';
import store from './store';

const PublicRoute = ({ component: Component, ...rest }) => {
    const state = store.getState();
    console.log('hey pub state==>>>', state);
    return <Route {...rest} render = {props => state.user.data ? <Redirect to='/' /> : <Component {...props} /> } />
};

export default PublicRoute;
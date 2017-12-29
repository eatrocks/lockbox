import { Route, IndexRoute } from 'react-router';
import App from './containers/app.js';
import Home from './containers/home.js';
import People from './containers/people.js';
import Assets from './containers/assets.js';

const routes = (
    <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="/demo" component={People} />
        <Route path="/assets" component={Assets} />
    </Route>
);

export default routes;

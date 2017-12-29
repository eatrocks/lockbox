import { connect } from 'react-redux';
import { init } from '../actions/assets.js';
import Assets from '../components/Assets';
import mountLoad from '../lib/mount-load';
import {wrap} from '../lib/ss-resolve';
import {isBrowser} from '../env.js';


const LazyAssets = mountLoad(Assets);

const resolveOnServer = (props, store) => store.dispatch( init() );
const ServerLoadedComponent = wrap(LazyAssets, resolveOnServer);


const mapStateToProps = ({ assets }) =>
    ({ assets: assets.all, filtered: assets.filtered, q: assets.q });


const bindActionsToDispatch = (dispatch) => ({
    onLoad: () => isBrowser && dispatch( init() )
});


const mergeAllTheProps = (state, actions, own) => ({
    ...state, ...actions, ...own,
    onLoad: () => actions.onLoad(),
    wait: state.assets.length === 0
});


export default connect(
    mapStateToProps,
    bindActionsToDispatch,
    mergeAllTheProps
)( ServerLoadedComponent );

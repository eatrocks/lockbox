import { INIT_ASSETS, FIND_ASSETS, SELECT_ASSET } from '../reducers/assets.js';
import getAssets from '../services/assets.js';


export const setAssets = assets => ({ type: INIT_ASSETS, assets });

export const findAssets = query => ({ type: FIND_ASSETS, query });

export const selectAsset = query => ({type: SELECT_ASSET, query });

export const init = () => dispatch =>
    getAssets().then( assets => dispatch(setAssets(assets)) );

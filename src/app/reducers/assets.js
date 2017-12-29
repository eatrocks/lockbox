export const INIT_ASSETS = Symbol('INIT_ASSETS');
export const FIND_ASSETS = Symbol('FIND_ASSETS');
export const SELECT_ASSET = Symbol('SELECT_ASSET');


export default function assets( state = { q:'', all: [], filtered:[] }, action) {
    switch(action.type) {
        case INIT_ASSETS:
            return {
                q:'',
                all: action.assets,
                filtered: []
            }

        case FIND_ASSETS:
            return {
                all: [].concat( state.all ),
                q: action.q,
                filtered: action.q.length > 1
                    ? state.all.filter(p => ~p.toLowerCase().indexOf( action.q.toLowerCase() ))
                    : []
            };

        case SELECT_ASSET:
            return {
                all: [].concat(state.all),
                q: action.q,
                filtered: []
            };

        default:
            return state;
    }
}

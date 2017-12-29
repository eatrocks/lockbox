import Helmet from 'react-helmet';
import Asset from '../Asset'


export default ({ assets = [] }) => (
    <div>
        <Helmet title="Assets" />
        <h2>Assets</h2>
        <hr/>
        
        {assets.map( (asset, i) => <Asset key={i} asset={asset} /> )}

    </div>
);

import Helmet from 'react-helmet';


export default ( {assetTypes} ) => (
    <div>
        <Helmet title="Asset Types" />
        <h2>Asset Types</h2>
        <hr/>

        {assetTypes.map( (type, i) => <div key={i}>{type.id} : {type.name}</div> )}

    </div>
);

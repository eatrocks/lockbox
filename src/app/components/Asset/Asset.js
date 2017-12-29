

export default ( {asset} ) => (
    <div>
        <div key={asset.id}>{asset.id} : {asset.name}, type: {asset.type}, {asset.value} </div>
    </div>
);

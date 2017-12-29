import { storiesOf } from '@kadira/storybook'
import AssetTypes from './AssetTypes.js'
import types from '../../../server/data/asset-types.json'

storiesOf('Asset Types', module)
    .add('default', () => (
        <AssetTypes assetTypes={types} />
    )
)

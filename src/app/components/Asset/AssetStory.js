import { storiesOf } from '@kadira/storybook'
import Asset from './Asset.js'
import assets from '../../../server/data/assets.json'

const asset = assets[0];

storiesOf('Assets', module)
    .add('default', () => (
        <Asset asset={asset} />
    )
)

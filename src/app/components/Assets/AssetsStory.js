import { storiesOf } from '@kadira/storybook'
import Assets from './Assets.js'
import assets from '../../../server/data/assets.json'

storiesOf('Assets', module)
    .add('default', () => (
        <Assets things={assets} />
    )
)

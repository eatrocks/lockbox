# Bruce's Notes

## How to Create a Container

### Component

See `components/Assets.js` and related files.
One benefit of defining the component first is you can avoid influence from the
shape of the data. The end result will be a more reusable component. React
Storybook helps us develop and manually test the component before wiring the
component into the application.

### Reducer

See `reducers/assets.js` and `app/store.js`.
Now that we know what data the component needs we can define the reducer and therefore the shape of the state.

### Service

See `services/assets.js`

### Mock the data

See `server/data/assets.json` and `server/routes/api.js`

### Action

See `actions/assets.js`

### Container

This is partially done., see `containers/assets.js` which has been partially
converted from `containers/people.js`

### Routing

See `app/routes.js`

### Menu Item

## Whisky Pick

#### [TODO]
- testing
- sass - chunks
- custom fonts
- image caching/optimization
- service workers

### State management
Create global state using `redux` and `redux-thunk` passing in a custom API.
```
ReduxThunk.withExtraArgument(api)
```


<br>
**Fetches are made via the container/component pattern in the following order.**

The `route` loads a parent component which is a `container`. The `container` checks if the needed data already exists in `store`. If not, an `action` is called.

The `action` calls a corresponding custom API method which contains all the logic for the "action". These methods always return data via a resolved `promise` (or error) and use `async/await`. The `action` is just a simple pure function.

The returned data from the `action` is passed to the `reducer` and it updates the `store`. Finally, the `container` receives the data and sends it to the child component(s).

<br>
### Support deeplinking
On each route, the `containers` check for any prerequisites in state. If the needed data is not present, the `container` fires the initial `action` to fetch it first, essentially this part under **State Management**:
> The `container` checks if the needed data already exists in `store`. If not, an `action` is called.

<br>
### Code splitting
Lazy load components using using `React.lazy`.
```
const Home = React.lazy(() => import('./containers/home/HomeContainer'));
```
<br>

Wrap routes from `react-router` in a `React.Suspense` component to enable code splitting. This splits `bundle.js` into route-based chunks and only loads the appropriate JS file(s) when the corresponding component(s) are loaded via routing.
```
<Suspense fallback={<Loading />}>
  <Switch>
    <Route path="/" exact render={(props) => <Home {...props} />} />
    ...
  </Switch>
</Suspense>
```

<br>
### Optimize rendering
For stateless or pure components, avoid re-rendering on parent component render by leveraging `React.PureComponent` (for class-based components) or `React.memo` (for function components). Use function components whenever possible.

<br>
### Type statically where possible
Enforce loose static typing by using `PropTypes` in every component. Generally, it is okay with pass generic `array` or `object` types, but validate the `shape` on the rendering component level.

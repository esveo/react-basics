// in App.js
<div>
  <Route path="/projects">
    <h1>Hello World</h1>
  </Route>
</div>;

// in Route.js
function Route(props) {
  const currentRoute = useCurrentRoute();
  if (props.path === currentRoute) {
    return props.children;
  }
  return null;
}
Route.propTypes = {
  path: string.isRequired,
  children: node
};

<div>
  <Route
    path="/projects/:id"
    render={routerProps => {
      // Will only be called when route matches
      return <span>{routerProps.match.params.id}</span>;
    }}
  />
  <Route
    path="/projects/:id"
    children={routerProps => {
      // Will always be called
      if (!routerProps.match) {
        // routerProps.match will be null when route is not matching
        return <span>No project found</span>;
      }
      return <span>{routerProps.match.params.id}</span>;
    }}
  />
</div>;

function User(props) {
  const isVisible = !!props.selectedUser;
  return (
    // Conditional classes to style different states.
    <div className={isVisible ? 'container-visible' : ''}>
      {/* null is beeing ignored by React */}
      {isVisible ? props.selectedUser.name : null}

      {/* when isVisible is false, false will be passed to React, which also ignores bools*/}
      {isVisible && props.selectedUser.name}
      {props.selectedUser ? props.selectedUser.name : null}

      {/* Be careful when using && as 0 and NaN are also falsy values
          but are rendered to the dom */}
      {props.selectedUser && props.selectedUser.name}
    </div>
  );
}

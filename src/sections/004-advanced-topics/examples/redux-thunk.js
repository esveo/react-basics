export function loadTodos() {
  return async function(dispatch) {
    dispatch({ type: 'FETCH_TODOS_START' });
    try {
      const response = await fetch(API_ENDPOINT + '/todos');
      const data = await response.json();
      dispatch({ type: 'FETCH_TODOS_SUCCESS', todos: data });
    } catch (err) {
      dispatch({ type: 'FETCH_TODOS_ERROR', error: err });
    }
  };
}
